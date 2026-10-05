# Arbeitsregeln

- Kommunikation und Dokumentation auf Deutsch.
- Mobile-first; ab 320 px ohne horizontales Scrollen. Touch-Ziele mindestens 44 px, sichtbare Tastaturfokusse, Bewegungsreduktion beachten.
- Astro mit TypeScript, statische Ausgabe, keine ungenutzten Frameworks oder Tracking-Dienste.
- Wiederverwendbare Komponenten in src/components, Seitenvorlagen in src/layouts, Veranstaltungen in src/content/veranstaltungen.
- Interne Links immer über src/lib/paths.ts, damit der GitHub-Pages-Unterpfad funktioniert.
- Originalbilder aus src/assets mit Astro Image optimieren. Keine extern geladenen Schriftarten.
- Keine erfundenen aktuellen Termine, Ansprechpartner, Mitgliedszahlen oder Bildunterschriften. Vereinsangaben vor Aktualisierung bestätigen.
- Das private Alt-Repository niemals in dieses öffentliche Repository kopieren. Keine X5-Archive, internen Domain-Unterlagen oder Zugangsdaten.
- Arbeiten in einem Aufgabenbranch. Kein Merge in main oder Deployment auf die Vereinsdomain ohne Auftrag.
- Die GitHub-Pages-Entwicklungsvorschau ist im aktuellen Auftrag erlaubt. Veröffentlichungen auf der Vereinsdomain bei Hetzner bleiben ein separater Schritt.
- Vor Abschluss npm run check und npm run build ausführen; sichtbare Änderungen auf Handy und Desktop prüfen.
