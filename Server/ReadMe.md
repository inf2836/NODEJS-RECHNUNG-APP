
# Dokumentation der Server seite.

 Verantwortlicher: Tchanga Monique

 ## Installation von Express

   Zuerst sollte man Node js schon installieren haben.  man Erstellt ein Verzeichnis für Ihre Anwendung und definieren Sie dieses Verzeichnis als Ihr Arbeitsverzeichnis.Diese Modules kommen zuerst mit der Installation von Express über den Terminal , dann  Erstellt man mit dem Befehl ""npm init"" eine Datei namens package.json für Ihre Anwendung.
   Wenn man Express vorübergehend installieren möchte und nicht zur Abhängigkeitsliste hinzufügen will, geben Sie die Option ""--save"" nicht an.sonst der Befehl ist : ""npm install express""
   
## App.js Datei
 
   DAzu möchte ich hinweisen , dass Alle meine routen und Funktionen zum Server Bearbeitung sich im 'app.js' befinden .
    

### Declaration der Modules Dependencies
  Es geht einfach mit des schüsselwort 'require' nachdem Sie über npm installiert wurde wie zum beispiel:

  ""var session = require('express-session');"". 


### Die route 'app.route('/sign_up')'
 Die besteht aus einer get und Post Methode. Die Get Methode senden uns die sign_up jade Views zurück
 Die Post Methode such in der Datenbank nach dem eingegebene Username und erstellt falls nicht vorhanden einen neuer User, der noch kein Konto besitzt.


### Die route 'app.route('/sign_in')'
 Die besteht wie die Sign_up Route aus einer get und Post Methode.
 Die Get Methode gibt die sign_in jade Views zurück
 Die Post Methode such in der Datenbank ob der eingegebene Username und Password richtig sind falls  vorhanden ,wird der User in die home page redirect. falls nicht wird ihm gesagt entweder der Password oder der Username ist falsch.


### 'app.get('/sign_out')'
  die Route erlaubt den eingeloggte User, sich auszuloggen. Dazu wird sich die Session unterbrechen 
  und wird zur Home Seite führen , damit den User sich wieder einloggt.

### 'app.route("/transactions")'
    Diese Route besteht aus einer get und Post Methode.
    DIe get Methode liefert die die unterschiedliche Transactionen ,die durchgeführt werden
    Die post Methode erstellt einen Transactions ,die entweder von Creator oder Receiver durchgeführt wird.


### 'app.route('/admin')

   Diese Route sicher stellt einfach ,ob den User eingeloggt ist ,bevor die Page zu liefern . wennn nein, sollte er sich zuerst einloggen. Wenn ja, kann den User die unterschiedliche Users merken und ihnen löschen. Zu Erwähnen is es , dass nur Der Administrator diese Seite sehen kann.

### function checkSignIn()

   DIese Function ermöglicht zu prüfen ob, den User sich eingeloggt hat oder nicht .wenn ja kann er sein ziel erreichen ,andersfall wird er auf sie sign_in weitergeleitet.


### function findMany(query)

   liest Daten aus dem Datenbank und liefert es als ein Aray aus Promis Reihe 



### function findOne(query)

 This function führt a select query in dem Datenbank and liefert die erste Reihe


### function insertOne(query)

  Die Function legt Daten in dem Datenbank an und liefert ein Promis


### Laufende Port

  unsere App lauft im Port 3000. Man kann es in ordner bin ansehen. so man kann im browser http://localhost:3000/



# Projektaufgaben(Aufwandschätzungen mit dem Soll und Ist)


    Verantwortlicher: Tchanga Monique

### Projektvorbereitung

| Aufgabe: | Zeit in Stunden soll |  Zeit in Stunden ist |
| :--- | :--- | :--- |
|Backend Endpunkte / API - Beschreibung | 4h |  5h |
| Verfassen des Projektvorschlags | 2h |  5h |
| Summe  | 6h |  10h | 


### Implementierung und Validierung

| Aufgabe: | Zeit in Stunden soll |  Zeit in Stunden ist |
| :--- | :--- | :--- |
|Setup depedencies: | 4h |  3h | 
|framework Express: | 0.5h |  0.5h | 
|cookies-parser: | 0.5h |  1h | 
|Session: | 1h |  1h | 
|Implementierung alle Routen | 10h | 15h |
|Datenbank reinfügen | 10h |  14h |
| Summe  | 26h |  34.5h | 



### Dokumentation und Tests 

| Aufgabe: | Zeit in Stunden soll |  Zeit in Stunden ist |
| :--- | :--- | :--- |  
|Test aller  Api Routen | 7h |  9h | 
|API-Dokumentation Routen | 6h | 8h | 
|Dokumentation-Server| 5h |  7h | 
| Summe  | 18h | 24h | 




### Zusammenfassung

| Teil | Zeit in Stunden soll |  Zeit in Stunden ist |
| :--- | :--- | :--- |
|Projektvorbereitung | 6h |  9h | 
| Implementierung  | 26h |  34.5h |
| Dokumentation und Tests  | 18|  24|
| Summe  | 50h |  67h |
