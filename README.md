## Gebiedsprogramma Poort West-Limburg

Deze repository bevat een klikbaar kaartje. Een template voor het maken van klikbare kaartjes vind je [hier](https://codepen.io/wannes-vlaanderen/pen/oNQGWxx).

Dit klikbare kaartje wordt gebruikt op https://omgeving.vlaanderen.be/poort-west-limburg

#### Gebruikte data
mapbox: https://api.mapbox.com/styles/v1/wannes-vlaanderen/cljwn59bh00gb01pj5mef6coa.html?title=view&access_token=pk.eyJ1Ijoid2FubmVzLXZsYWFuZGVyZW4iLCJhIjoiY2xqb2Q0MDUxMDhjeDNtcGIxNjF4a2lrbyJ9.TmBAlCtIR-SS3YXwXvUJlA&zoomwheel=true&fresh=true#11.32/51.0657/5.2047  
csv: https://docs.google.com/spreadsheets/d/1XeNtZzURVRu9W1kQOIOmAaZoNF3qb87sQz8C9BK6DOE/edit?usp=sharing


## Tutorial

Voor het maken van een klikbaar kaartje wordt gebruik gemaakt van mapbox voor de kaart, codepen voor het schrijven van de nodige code, en github pages voor het deployen van de site, de github pages page kan worden geembed in een 'iframe' tag in html.


### Mapbox
Maak een account aan op mapbox, creëer daar je eerste kaartje. Voeg lagen toe zoveel als nodig, maak een eigen stijl, je kan het zo zot niet bedenken.  
Als je kaartje af is, duw je rechtsboven op publish, hierdoor zal de kaart worden geupdated. Hou er rekening mee dat elke keer als je een aanpassing maakt aan je kaart, je opnieuw moet publishen om de aanpassing te zien in codepen/github etc.  
In de js code op codepen, moet je de config aanvullen, op de plaats van stijl, moet je de mapbox stijl invullen, bij token, je access token. Die kan je beide vinden door op share (naast publish) te duwen, en naar onder te scrollen onder developer resources.  

Je hebt de mogelijkheid om bij het opstarten van de webpagina, in te zoomen naar een bepaalde locatie. Als je op mapbox op de juiste positie staat, zie je linksonderaan twee getallen (eig 3). Het eerste is de zoom van uw map, het tweede (en derde) zijn de longitude en latitude. In de config op js kan je deze weer invullen. Opgelet: je moet je longitude en latitude omwisselen van plaats.

### CSV
Als csv bestand wordt gebruik gemaakt van google spreadsheets, elke link naar een csv bestand zou echter moeten werken (dit is niet getest).  
Het csv bestand moet minstens de kolommen 'Longitude' en 'Latitude' bevatten (lijn 1 wordt gezien als kolomheaders), waar het klikbare puntje zal verschijnen. Verder kan je nog kolommen toevoegen die meer informatie geven over een pointer.  
Je kan kolommen invoegen in het csv bestand, waarop kan worden gefilterd (meer hierover later).  
In de js code op codepen, in config, moet je csv aanvullen met een link naar je csv file, in het geval van google spreadsheets, kan volgende link worden gebruikt: "https://docs.google.com/spreadsheets/d/DOCUMENT-UID/gviz/tq?tqx=out:csv&sheet=Sheet1", waarbij 'DOCUMENT-UID' moet worden vervangen door je document UID.

### Javascript
Het enige van de javascript code die je moet aanpassen, is de config, tenzij je extra functionaliteiten wilt toevoegen, leef je gerust uit!  
Behalve bovengenoemde instellingen, kan je verder nog een aantal parameters invullen:
- title: de titel van uw map, dit komt links boven filters te staan
- description: een beschrijving van uw map, dit komt net onder de titel te staan
- sideBarInfo: een lijst, het eerste element is de titel van iedere locatie, het tweede is een beschrijving (analoog als hierboven)
- popupInfo: een lijst, dit element komen in het vet bovenaan het tekstballonnetje te staan als je op een locatie duwt
- popupInfo2: een lijst, dit is een link, deze komt te staan als 'meer info' onderaan het tesktballonnetje
- popupInfo3: een lijst, dit is de beschrijving die op uw tekstballonnetje in de midden terechtkomt
- filters: een lijst met filters

#### filters
Je kan zoveel filters instellen als je wilt, de data waarop wordt gefilterd moet je meegeven in de csv.  
Filters kunnen een checkbox of een dropdown zijn, de volgende parameters worden gebruikt:

- type: 'checkbox' of 'dropdown'
- columnHeader: de naam van de kolom waarop wordt gefilterd
- title: de titel die boven de filter komt te staan
- listItems: een lijst, waarin alle mogelijke waarden van de filter komen te staan.
