

# Dokumentation der Client seite.

 Verantwortlicher: Tchanga Monique

## Erstellung der Seiten vom Views
 
 viele Seiten mit dem extension "jade" wurden erstellt. Die zeigen uns einfach die verschiedenen richtung unserer App . Als Framework zur Bearbeitung der Seiten habe ich  "Bootstrap" verwenden,weil ich es flexibler  und interessanter gefunden habe. 
 Zur Definition , Bootstrap ist ein freies Frontend-Css-Framework. Es enthält auf HTML und CSS basierende Gestaltungsvorlagen für Formulare, Buttons, Tabellen und andere Oberflächengestaltungselemente. Dieser Framework wird in der Layout Jade Datei mit dem Syntax "script(src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js")" addiert.

### Header.jade
  In diesem Jade Seite, ensteht eine eine Navheader,wo man die Unterschiedliche  groß Namen der Actionen der Applikation merken kann wie zum Beispiel Die Name der App, der Link  zur Transactions, Das Button Zum Adden einer neuen Rechung und am Ende einen Dropdown Item mit dem eingeloggte User, in dem man einfach den Link zum Ausloggen, merkt. Diese Seite ensteht in einem Ordner nämlich 'Partials', der im dem Layout Datei mit dem Befehl 'include partials/header.jade' hinzugefügt. Durch dieses Befehl wird diese Header Datei in das Body jede Seite aufgerufen.


### Admin.jade
   Die View Admin wird nur für den Admin der App reserviert. Es bedeutet ,dass er der einzige ist ,der Zugriff auf diese Seite hast. Wenn ein  normaler User(weil der Admin ist auch ein User der App) sich einloggt, könnte er diese Admin Seite nicht sehen. in diese Seite, hat den Administrator die Möglichkeit jede User zu entfernen, wenn den User nicht den App benutzen möchte.


### Error.jade
   Diese Seite gibt ein error Status zurück mit dem Zahl '500', wenn eine angefordete Seite nicht gefunden wurde


### home.jade
   n diese Seite ist eine der wichtigste Seite ,weil es drin der Code gibt, wo man einfach die Transactionen und die verschiedene Amount Status anschauen kann.man kann sogar verschiedene Users, die zusammen den App benutzen merken und deren Transactionen.
   Das schönste ist dass, man die Möglichkeit ,sich als eingeloggte User und deren Transactionen zu sehen.


### Layout.jade
    
    in dieser View haben wir die alle Links zur Framework  beispielweise Bootstrap und sogar die Stylesheets, die in unsere Views und Javascript Dateien implementiert werden.


### Sign_in.jade

   es ist eine View ,wo sich ein User sich einloggen kann. dazu soltte er seine Koordinaten eingeben und zwar ein Username und ein Password. es ist sogar die Welcome page diese App , weil es keine besondere Welcome page gibt. Sollte Sie neu in der App das heißt kein Konto? dann gibt es ein Link zur registrierung.


### Sign_up.jade

   Diese Seite ist zur Erstellung einer Konto ,wenn man noch nicht  Als Benutzer der App betrachtet wird. man sollte einefach die gefragte Daten reintippen und validieren. es gibt solche , die required sind. Die Validierung kann nicht gut laufen ,wenn diese nicht vorhanden sind .


### Transactions.jade

   Diese Jade Datei ist eine der wichtigste denn sie enthält alle Informationen über die eingefügte Rechnungen und das  von Benuzter bezahlte Geld. es liegt auch drin das Datum ,die Uhrzeit und die Beschreibung der Transaction. Die Transactionsfarben hängt von der Task ab.es gibt ,die von einem benutzer eingefügte Rechnungen und andere die bezahlen werden müssen.



## Javascript Teil

   In diesen Teil, geht es um eine Skriptsprache zur Erweiterung und Implementierung unsere HTML und CSS Seiten. Zum Beispiel gibt es die Seite 'Main.js'


## Main.js 

   in diesem Datei gibt es verschiedene geschriebene Funktionen die, die Views verwalten mit dem unterschiedlichen Javscript Property und Methoden.


### function setReceiver

   Sie nimmt ein String username als Parameter ein . Diese Funktion wird ausgelöst, wenn der Benutzer 
   auf die Schaltfläche "Pay Money Out" klickt.Diese Funktion erhält den Benutzernamen des
   ausgewählten Benutzers und legt den Wert der Eingabe im Dialog fest.


### function submitPayoutForm

   Sie erhält ein Event im Parameter . Handler wird ausgelöst, wenn der Button "Pay Money Out" angeklickt wird Diese Funktion sammelt den Wert aus dem Formular. erstellt ein Transaktionsobjekt, aktualisiert die Ansicht undsendet eine POST-Anforderung an den Server über (AJAX).



### function submitTransactionForm

   Diese Funktion nimmt ein Event als Parameter ein und  Wird ausgelöst, wenn der Benutzer eine neue Transaktion erstellt


### function submitRegistrationForm

   Sie nimmt ein  event als Parameter ein . Sie Wird ausgelöst, wenn der Benutzer alle Felder des Registrierungsformulars erfolgreich eingegeben hat . Diese Funktion ruft alle Felder aus dem Formular ab und erstellt eine POST-Anforderung


### function submitSignInForm

  Sie nimmt ein  event als Parameter ein. Diese Funktion übermittelt die Anmeldeinformationenund zeigt einen Fehler an oder navigiert zur Startseite.


### function  submitDeleteUser

 Verwenden Sie eine Funktion zum Senden der Löschanforderung, da die Anforderung zum Löschen des HTML-Formulars nicht funktioniert hat


### function markUserToBeDeleted

 Diese Methode legt den Wert des # delete-user-Formulars fest gefunden in der /admin.jade-Ansicht Damit dieser Wert für den AJAX-Aufruf verwendet werden kann. Sie nimmt als Parameter ein _id

### function submitSignInForm

  Eine Hilfsmethode zum Erstellen von http Request in Hintergrund. Diese Methode verwendet Versprechen, um ein Auflösungs- oder Ablehnungsobjekt zurückzugeben Die nimmt ala Parameter ein String Url für den Url der Api, ein Methode(PUT,DELeTE,GET,POST) und ein Data Objekt.


## Images

  Es gibt sogar ein Images Ordner ,die Fotos für die Schönheit der Seite enthalten. Dies wird bezuglich in die sign_in Datei benutzt

 
## Stylesheets

   ist eine Formatvorlage, über dessen Implementierung in eine Webseite sich schnell und einfach z.B. Änderungen am Design einer Seite vornehmen lassen. Ein Stylesheet interpretiert die zugewiesenen Daten und formatiert sie entsprechend den z.B. über CSS vorgegebenen Regeln. dazu habe ich ein Format 'handy.css' ,'Tablet.css' fur Handy und Tabletten und am Ende ein 'Sytle.css' , wo die ganzen jade Dateien verschönen werden.

   


# Projektaufgaben(Aufwandschätzungen mit dem Soll und Ist)

    Verantwortlicher: Tchanga Monique

### Projektvorbereitung
| Teil | Zeit in Stunden soll  | Zeit in Stunden ist | 
| :--- | :--- | :---|
| Verfassen des Projektvorschlags | 5h| 7h|
| Beschreibung  der Funktionen  | 6h|  8h|
| Summe  | 11h| 15h|


### Implementierung
| Teil | Zeit in Stunden soll | Zeit in Stunden ist |
| :--- | :--- | :---|
|HTML-Grundgerüst Registrierung | 1h | 1 und 1/2 h|
|HTML-Grundgerüst Anmeldung |1h| 1 und 1/2 h|
|HTML-Grundgerüst Home | 1h| 1 und 3/4 h|
|HTML-Grundgerüst Admin | 1h| 45min|
|HTML-Grundgerüst Transactions | 1h| 1 und 1/2 h|
|HTML-Grundgerüst Layout | 1h| 1 und 1/2 h| 
|SCSS-Styling Breakpoint small  | 2h| 1 h|
|SCSS-Styling Breakpoint medium  | 2h|1 h|
|SCSS-Styling Breakpoint large  | 2h| 1 h|
|  Implementierung alle Funktionen  | 10h| 13 h|
| Summe  | 22h| 24h und 1/2h| 



### Dokumentation und Tests

| Aufgabe: | Zeit in Stunden  Soll | Zeit in Stunden Ist |
| :--- | :--- | :---|
|Dokumentation aller Funktionen | 12h | 15h |
| Vergleich SOLL / IST Stunden  | 5h |  10h |
| Summe  | 17h | 25h | 




### Zusammenfassung

| Teil | Zeit in Stunden | Zeit in Stunden | 
| :--- | :--- | :---|
|Projektvorbereitung | 11h | 15h |
| Implementierung  | 22h | 24 und 1/2 h |
| Dokumentation und Tests  | 17h | 25h |
| Summe  | 50h| 64 und 1/2 h |  
 
