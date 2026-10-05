# Pflege

## Veranstaltungen

Eine Markdown-Datei in src/content/veranstaltungen anlegen:

```yaml
---
title: Bestätigter Veranstaltungstitel
date: 2027-05-01
time: '14:00'
location: Bestätigter Treffpunkt
category: Vereinsleben
status: upcoming
summary: Kurze Beschreibung mit den wichtigsten Angaben.
---
```

Das Datum im Beispiel ist ausschließlich eine Formatvorlage, keine Vereinsveranstaltung. Nur bestätigte Termine eintragen. status: archive markiert historische Termine. Vergangene Termine werden beim nächsten Build automatisch ins Archiv einsortiert. Ein täglicher Build wird in diesem ersten Entwurf noch nicht eingerichtet.

## Seiten und Bilder

Seitentexte liegen zunächst in src/pages/. Gemeinsame Komponenten liegen in src/components/. Bilder nach src/assets/ aufnehmen und mit Astro Image einbinden. Vor Veröffentlichung Nutzungsrechte und gegebenenfalls Einwilligungen klären.

## Kontrolle

npm run check und npm run build ausführen. Mobile Layouts von 320 bis 430 px, Tablet und Desktop prüfen. Menü per Touch und Tastatur, alle internen Links und die Lesbarkeit kontrollieren. Der Pages-Unterpfad muss beim Test aktiv sein.

## Produktiver Start

Vor Veröffentlichung auf der Vereinsdomain sind aktuelle Termine, Kontaktdaten und Rechtstexte zu bestätigen. Der Datenschutztext dieser Vorschau beschreibt GitHub Pages und muss beim Wechsel zu einem anderen Hoster angepasst werden. Alte URLs benötigen passende Weiterleitungen. Das bisherige Hosting bleibt bis dahin unverändert.
