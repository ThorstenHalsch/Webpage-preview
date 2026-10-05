# VZO · Neue Website

Mobile-first Astro-Entwurf für den Verein Zufriedenheit Oberndorf e. V.

Vorschau: https://thorstenhalsch.github.io/Webpage-preview/

## Entwickeln

Node.js ab 22.12.0 (empfohlen 24), npm ab 9.6.5:

```sh
npm ci
npm run dev
```

Die Vorschau läuft unter http://localhost:4321/Webpage-preview/.

```sh
npm run check
npm run build
npm run preview
```

## Architektur

- Astro mit TypeScript und statischer Ausgabe.
- Gemeinsame Kopf-/Fußbereiche und Seitenvorlagen.
- Schema-validierte Veranstaltungen in src/content/veranstaltungen/.
- Optimierte Bilder über Astro Image, lokal ausgelieferte Manrope-Schrift.
- Keine Datenbank, PHP-Abhängigkeit, externen Schriften oder Tracking-Dienste.

Der GitHub-Pages-Unterpfad wird zentral in astro.config.mjs und src/lib/paths.ts berücksichtigt. Für eine spätere eigene Domain lassen sich SITE_URL und BASE_PATH beim Build setzen. Die Vereinsdomain bleibt bis zu einer separaten Freigabe unverändert.

## Vorschau und Branches

GitHub Actions prüft und baut die Website. Der Branch preview/astro-first-draft veröffentlicht die Entwicklungsvorschau auf GitHub Pages. Pull Requests bauen und prüfen, veröffentlichen aber nicht. In den Repository-Einstellungen muss Pages als Quelle GitHub Actions verwenden; die Umgebung github-pages muss den Vorschau-Branch zulassen.

Die Vorschau enthält noindex-Metadaten. Das verhindert keine öffentliche Erreichbarkeit.

## Inhalte

Dieser Entwurf übernimmt ausschließlich bereits öffentlich sichtbare Vereinsinhalte und vier ausgewählte Bilder aus der bisherigen Website. Alle übernommenen Termine sind als Archiv von 2025 gekennzeichnet. Aktuelle Termine, Ansprechpartner, Bildrechte und Rechtstexte sind vor dem produktiven Start zu bestätigen.

Die alte Git-Historie, X5-Projekte, Zugangsdaten und internen Unterlagen bleiben im privaten Alt-Repository.

Siehe docs/maintenance.md und docs/sources.md.
