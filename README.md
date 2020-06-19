# E2E Task

## Installation

`yarn install` oder `npm install`. Das wird ein wenig dauern!

## Tests laufen lassen

- __wichtig__ - ihr müsst erst `yarn run start` oder `npm run start` laufen lassen und diesen Prozess in einem eigenen Fenster aktiv lassen. Das öffnet die Seite auf dem localhost.
- `cypress:open` oder `npm run cypress:open` öffnet das Cypres Dashboard mit einer Übersicht an Tests, die bereits angelegt sind. 

## Erklärung Dashboard

Im Ordner `example` liegen Tests von Cypress selbst, die ihr euch auch als Anregung ansehen könnt. Die File `todo.spec.js` ist die relevante. Die könnt ihr mit einem Click auf den Link öffnen und den Testrunner damit im Watchermodus starten. Die Tests werden mit jedem Mal ausgeführt, wenn ihr Änderungen speicher. 

## Aufgabe

Schreibt einen End-to-End Test, der sicherstellt, dass:
-  Der User kann der Liste eine Aufgabe hinzufügen.
-  Die Aufgabe kann abgehakt werden
-  Die Aufgabe kann gelöscht werden


## Ressourcen

Das Testing Tool, dass ihr benutzt, ist [Cyrpess](https://www.cypress.io/). In der Doku findet ihr alles was ihr braucht.
