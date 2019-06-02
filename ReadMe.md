

# Projekt Name : Rechnungsapp einer Wohngemeinschaft

        Hochschule Worms CSA  WS 2018/19

        Gruppe 14

       Tchanga Monique
        inf2836@hs-worms.de
        Matrikelnummer: 672922

## Abstract

    In aller WG (Wohngemeinschaften) entstehen Kosten, die zwischen aller Mitbewohner der WG geteilt werden sollen.
    Dies zu schaffen ist aber nich so leicht, wie mann deken kann, inbesonders wenn die Zahl der Mitbewohner gros wäre, kann mann sich leicht verrechnen, unfair einen Belleg teilen oder sogar die Kosten, die man übernommen hat, vergessen.
    Diese Web app versucht eine Lösung zu diese Probleme zu bieten.

### Allgemein

      Mein Projektvorschlag "RECHNUNGSAPP FÜR EINE WOHNGEMEINSCHAFT" besteht darin , die 
      Personen aus einer Wohngemeinschaft dabei helfen , ihre Einkaufen einfach zu rechnen
      und zwischen ihnen fair zu verteilen.Ausserdem gibt es eine Admin Seite um einfach
      die Seite zu verwalten.

## Quick start

    Die Rechnung app wurde mit node.js beziehungsweise Express.js etwickelt. Daher besteht dieses Project aus einem Client und ein Server. Diese sind auch leicht in der Repository to finden. Um die Rechnungsapp nutzen zu können, wird einen Server
    erforderlich, der die Datenbank und die Daten resourcen an den Clienten Liefert. Merh dazu in weiteren sectionen.

### Requirements

    Um die Rechnungsapp zum Lauf zu bringen sind einige Installationen erforderlich. Die NPM (Node Package Manager) hilft dabei
    packages zu verwalten, d.h. von verschidenen Sourcen zu importieren, und benutzen ohne dass mann die selbe funktionene entwickelt sollte.
    Die folgenden Pragramme mussen im Server installiert werden (Server hier bezeichnet der Rechner wo die Server app laufen wird).

#### [- Node.js oder NPM](https://nodejs.org/en/download/)

    Um zu wissen, ob NodeJs schon im rechner installiert wurde, kann mann den Windows CMD tool starten und das Kommand 'npm -version' ausführen.
    Das Ergebnis ist entweder die Version der Node.js, wenn vorhanden ist, oder eine Fehler wenn Node.js nicht installiert wurde.

### Ausführung

#### Server

    Wenn Node.js erfolgreich installiert wurde, Windows CMD oder ein shell interpreter starten,
    Zur /rechnungsApp/Server navigieren (mit dem CMD/shell) und das Komando 'npm start'  ausführen.
    Diese Startet die Server auf dem Port 3000 im Server.

#### Client

    lauft der Server schon, kann der client im selben Rechner starten, indem mann einen Browser Ferster öffne und den Link
   [Sign up to RechnungsApp](http://localhost:3000/sign_up)
    wenn mann derselben Rechner als Client und Server Verwenden will.
   Mann kann auch von andere Geräte die Rechnungsapp benutzen, indem mann die ip Address der Server ersetz z.b

   [Sign up to RechnungsApp](192.168.0.102:3000/sign_up) Der Server und alle Clients sollen im Selben Homegroup verbunden sein.

#### Deployment

    Die Rechnungsapp könnte auch durch den öffentlichen Internet benutzt werden, indem Statt der Server als ein Rechner in Homegroup, sondern kann mann einen Server port kaufen, und die app dort hochladen. Dann wird die App  online erreichbar.



### Benutzer ZugangsDaten

        Die Username und das Passwort reichen für das Einloggen.

    firstname :'Fabrice'                            
    lastname : 'Kemegni'
    username :'fabrigeas'
    email : 'fabrigeas@gmail.com'
    phone : '017643370587'
     password : '1111'




                            firstname :'Fomen'  
                            lastname : ''Monique'
                            username :'Monique'
                            email : ''tina@yahoo.fr''
                            phone : ''12345'
                            password : '1111'



                                                                        firstname :'Nguemo'  
                                                                        lastname : 'Monique'
                                                                        username :'Stella'
                                                                        email : ''tina@yahoo.fr''
                                                                        phone : ''12345'
                                                                        password : '1111'                           


                                firstname :'Sokeng'  
                                lastname : 'Monique'
                                username :'Josue'
                                email : ''tina@yahoo.fr''
                                phone : ''12345'
                                password : '1111'


                                                                    
### Die Verwaltung der Admin Seite
    User mit Username "Monique" verwaltet Die Admin Seite und ist die einzige, die an diese Seite zugreifen kann.


## Api Dokumentation

### Server Seite
    Die Api Documentation an der Server Seite befindet sich im Pfad Gruppe14\Server\apidoc


### Client Seite
    Die  Documentation an der Client Seite befindet sich im Pfad Gruppe14\Client\javascripts\out"# NODEJS-RECHNUNG-APP" 
