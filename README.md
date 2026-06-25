# Menù del giorno – Hotel Embassy

App per creare e stampare il menù giornaliero (pranzo e cena), con quattro template e stampa A4. Funziona offline e si può installare come app (PWA).

## Pubblicazione su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `menu-embassy`).
2. Carica **tutti i file di questa cartella nella radice del repository** (non dentro una sottocartella):
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `logo.png`
   - `favicon.ico`
   - cartella `icons/`
3. Vai su **Settings → Pages**.
4. In *Build and deployment* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, poi **Save**.
5. Dopo un minuto il sito è online su `https://<tuo-utente>.github.io/menu-embassy/`.

## Installazione come app

Apri il link dal telefono e usa "Aggiungi a schermata Home" (iPhone) o "Installa app" (Android/Chrome). L'icona è la pentola colorata.

## Aggiornamenti

Quando modifichi `index.html`, cambia il numero di versione in `sw.js` (`menu-embassy-v1` → `v2`) così il service worker serve la versione nuova al posto di quella in cache.

## Uso

- Scrivi i piatti di pranzo e cena (1-3 primi, 1-3 secondi, 0-2 dolci), usa **+** per aggiungerne.
- La data in alto è automatica; il selettore data serve per stampare il menù di un altro giorno.
- Scegli il template dall'anteprima e premi **Stampa**.

### Libreria

- **Salva in libreria** memorizza il menù del giorno sul dispositivo. Resta salvato anche chiudendo o reinstallando l'app (memoria del browser).
- La tab **Libreria** mostra tutti i menù salvati con anteprima, data e template.
- Seleziona uno o più menù e usa **Crea PDF**: viene scaricato un file PDF con un menù per pagina.
- **Modifica** riapre il menù nell'Editor con tutti i dati; **Nuovo menù** parte da una scheda vuota.

> Nota: i menù sono salvati nel browser del dispositivo. Pulire i dati del sito o usare un altro dispositivo/browser parte da una libreria vuota.
