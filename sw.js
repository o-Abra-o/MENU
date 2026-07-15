const CACHE = 'menu-embassy-v7';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './logo.png',
  './favicon.ico',
  './vendor/jspdf.umd.min.js',
  './vendor/html2canvas.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // App shell: network-first so updates appear, cached fallback offline
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Same-origin assets: cache-first
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(c => c || fetch(req).then(r => {
        const cp = r.clone(); caches.open(CACHE).then(ch => ch.put(req, cp)); return r;
      }))
    );
    return;
  }

  // Cross-origin (Google Fonts): stale-while-revalidate
  e.respondWith(
    caches.match(req).then(c => {
      const net = fetch(req).then(r => {
        const cp = r.clone(); caches.open(CACHE).then(ch => ch.put(req, cp)); return r;
      }).catch(() => c);
      return c || net;
    })
  );
});
