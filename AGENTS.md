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
- Die bestehende GitHub-Pages-Vorschau darf angesehen werden. Ihre Veröffentlichung darf keine GitHub Actions auslösen. Veröffentlichungen auf der Vereinsdomain bei Hetzner bleiben ein separater Schritt.
- Alle Tests, Typprüfungen, Builds und Browserprüfungen ausschließlich lokal in der Arbeitsumgebung ausführen, niemals auf GitHub-Runnern.
- Keine GitHub Actions starten, dispatchen, erneut ausführen oder aktivieren. Keine GitHub-gehosteten VMs oder Runner und keine Codespaces für Tests oder Builds starten.
- Keine automatisch auslösenden GitHub-Workflows hinzufügen oder reaktivieren. Vor jedem Push, PR, Merge oder anderen GitHub-Schreibzugriff dessen Workflow-Trigger prüfen; bei möglicher Ausführung nicht durchführen. Ein CI-Skip-Vermerk allein ersetzt diese Prüfung nicht.
- Die entfernte Actions-Konfiguration bleibt deaktiviert. Ein späterer Veröffentlichungsweg muss ohne GitHub Actions auskommen; die frühere Preview-Erlaubnis ist keine Ausnahme.
- Vor Abschluss npm run check und npm run build ausschließlich lokal ausführen; sichtbare Änderungen lokal auf Handy- und Desktop-Größen prüfen. Für reine Dokumentations- und Workflow-Entfernungen genügen lokale Inhalts- und Diff-Prüfungen.
