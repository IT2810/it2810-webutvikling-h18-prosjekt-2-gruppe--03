## Gruppe 3 prosjekt 2

* Struktur og komponenter
  * Galleri-komponent
  * Kategori-komponent
  * Fane-komponent
  * Media-komponent
  * Bilde-, tekst- og lyd-komponent
  * Startside
  * AJAX
* Responsivt design
* Testing
* Bruk av Git
* Kilder til mediafiler

<br />

### Struktur og komponenter
Vi har valgt å ha følgende komponenter: galleri, kategori, media, fane, lyd, bilde og tekst. Grunnen til at vi har valgt å ha så mange komponenter er at vi ønsker å holde koden så ryddig og atomisk som mulig, slik at det er enkelt å finne frem og forstå koden.

#### Galleri-komponent
Galleri-komponenten er en overordnet komponent og er forelder til kategori-, media-, og fane-komponentene. Den får valgt kategori fra kategori-komponenten og aktiv fane fra fane-komponenten. Den sender disse så videre til media-komponenten som genererer tilfeldige utstillinger, og som kontrollerer hvilke media-filer som skal vises for de forskjellige media-komponentene (bilde, lyd og tekst).

#### Kategori-komponenten
Vår kategori-komponent består av ni radioknapper fordelt på tre kategorier, hvor man kan velge én fra hver kategori, og en knapp for å bekrefte valg. Vi tolket oppgaven slik at vi skulle generere utstillinger med tilfeldig valgte filer i valgt kategori. Vi innså senere at dette ikke var et krav, men vi valgte å beholde det slik siden det ikke strider med oppgaven.

Videre tolket vi at det måtte genereres en ny utstilling ved endring av valgt kategori, men at det ikke gjorde noe om det ble generert nye utstillinger fra de samme kategoriene hvis man klikker på bekreft-knappen uten å endre kategoriene. Det finnes nok mer elegante løsninger for denne komponenten, men på grunn av måten vi tolket oppgaven og at vi ikke var så kjent med React fra før, valgte vi å fokusere på funksjonaliteten først og fremst.

#### Fane-komponenten
Fane-komponenten består av fire sub-komponenter: én for hver knapp, hvor hver har en tilstand for å angi hvilken knapp som er aktiv. Dette er gjort for å ikke skrive unødvendig mye kode. Når man har valgt kategori, vil fane 1 være forhåndsvalgt aktiv, og kan endres ved å klikke på fanene. Ved endring av valgt fane vil fane-komponenten si ifra til galleri-komponenten.

#### Media-komponenten
Media-komponenten er forelder til bilde-, tekst-, og lydkomponenten, og har kontroll over kommunikasjon mellom dem og galleri-komponenten. Den bruker valgt kategori og aktiv fane, som den får fra galleri-komponenten, til å generere fire tilfeldige kombinasjoner av filene fra kategoriene, og sender mappe og filnummer videre til barnkompontene når de skal laste inn nye filer.

#### Bilde-, tekst- og lyd-komponentene
Tekst-komponenten bruker mappe og filnummer til å generere en URL. Vi bruker Fetch til å hente filen fra URL-en, omgjør så responsen til JSON, og lagrer verdiene i state. De blir så brukt i renderingen. Prosessen er omtrent den samme for bilde-komponenten, bortsett fra at responsen blir omgjort til tekst.

Siden bilde- og tekst-komponentene er veldig like, kunne vi ha lagd en felles komponent i stedet, og brukt props til å kompensere for forskjellene, men vi syntes det var ryddig å ha to forskjellige komponenter til hver sin mediatype. Lyd-komponenten skiller seg fra disse med at man ikke trenger å hente lydfilene med AJAX, fordi audio-taggen har asynkron henting integrert.

#### Startside
På startsiden er fane 1 aktiv og utstillingen viser bare en velkomsttekst. I kategori-komponenten vil én kategori for hver mediatype være forhåndsvalgt, og når man klikker på velg-knappen vil utstillingene bli generert.

<br />

### Responsivt design
Vi har tilpasset siden til ulike viewports ved å ta med viewport-metataggen i HTML-filen og brukt media-queries for å endre layout basert på bredden. Viewport-metataggen gjør at nettleseren kan tilpasse sidens dimensjoner og skalering basert på blant annet skjermstørrelsen til enheten.

Løsningen vår tilpasser seg skjermens størrelse og orientering ved at den endrer layouten basert på skjermens bredde. Dette gjorde vi med media-queries hvor vi har brukt `max-width` som breakpoint for å bestemme når layouten skal endre seg. Breakpointene vi har brukt er ved 800px og 450px. Disse gjør at layouten tilpasser seg generelle mellomstore og små skjermer. Layouten er generelt laget for å fungere på større skjermer enn disse.

For skjermer over 800px har vi laget en layout som fokuserer på breddeformatet, og er dermed tilpasset plattformer som desktop-PC-er og andre med større skjermer. Her er faner plassert øverst og kategori-valgene på høyresiden, mens bilde, tekst og lyd er plassert midt på siden under fanene for å utnytte bredden. Siden layouten er i breddeformat, ligger tekst og bilde ved siden av hverandre.

For skjermer under 800px gikk vi over til en mer vertikal layout hvor faner og kategori-valg ligger øverst, og media under menyene. Bilde og tekst ligger fortsatt ved siden av hverandre, med lyd nederst. For skjermer under 450px gikk vi over til et fullstendig vertikalt format hvor alle komponentene ligger under hverandre i rekkefølgen (fra toppen): faner, kategori-valg, bilde, tekst og lyd. På denne måten kan komponentene være store nok til at de lett kan interageres med, men samtidig ikke ta opp hele skjermen.

<br />

### Testing
Vi testet løsningen vår i breddeformat på to PC-er med skjermoppløsningene 1920x1080 og 1366x768, og i vertikalt format på tre mobiler med skjermoppløsningene 2240x1080, 1920x1080 og 1520x720. Vi har også testet i to forskjellige nettlesere: Google Chrome og Mozilla Firefox på PC, og Chrome på mobil.

Hensikten med testene er å se at komponentene var plassert riktig på siden og i forhold til hverandre, og å se at plasseringen og skaleringen av komponentene tilpasset seg skjermstørrelsen til enheten. Vi testet løsningen jevnlig og systematisk mens vi jobbet med responsivt design, og sjekket også at alle komponentene tilpasset seg skjermstørrelsen når man skiftet mellom vertikal og horisontal orientering på mobil.

<br />

### Bruk av Git
Vi har brukt Git aktivt i prosjektet. Vi delte oppgavene opp i issues og ga hver en kort beskrivelse. Vi brukte issue-boardet til å koordinere hvem som gjorde hva, og holde styr på hva som måtte gjøres og hva som var ferdig.

Vi har brukt to branches i prosjektet vårt: master og dev, som ble brukt til all utvikling. Vi valgte å bruke to branches, fordi vi avtalte muntlig å jobbe på forskjellige deler av prosjektet, og dermed ikke påvirket hverandres arbeid i stor grad. En annen grunn er også at prosjektet ikke er spesielt stort eller komplekst. Vi ser likevel i etterkant at det ville vært mer ryddig, og at vi ville unngått noen merge-konflikter, hvis vi hadde valgt å lage nye branches for hver funksjonalitet. Dette tar vi med oss til neste prosjekt.

<br />

### Kilder til media-filer
 * Bilder er hentet fra https://openclipart.org
 * Tekster er hentet fra https://www.poetryfoundation.org
 * Lyder er hentet fra http://soundbible.com
