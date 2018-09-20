## Gruppe 3 prosjekt 2

* Struktur og komponenter
  * Galleri-komponent
  * Kategori-komponent
  * Fane-komponent
  * Media-komponent
  * Bilde-,tekst- og lyd-komponent
  * Startside
  * AJAX
* Layout
  * Bruk av CSS
  * Responsivt design
* Testing
* Kilder til mediafiler



### Struktur og komponenter
Vi har valgt å ha følgende komponenter: galleri, kategori, media, fane, lyd, bilde og tekst. Grunnen til at vi har valgt å ha så mange komponenter er at vi ønsker å holde koden så ryddig og atomisk som mulig, slik at det er enkelt å finne frem og å forstå koden.

#### Galleri-komponent:
Galleri komponenten er en overordnet komponent (foreldrekomponent til de andre komponentene) som får valgt kategori fra kategori-komponenten og aktiv fane fra fane-komponenten. Den sender disse så videre til media-komponenten som genererer tilfeldige utstillinger, og som kontrollerer hvilke media-filer som skal vises for de forskjellige media-komponentene (bilde, lyd og tekst).

#### Kategori-komponenten:
Vår kategori-komponent består av ni radioknapper fordelt på tre kategorier, hvor man kan velge en fra hver kategori, og en knapp for å bekrefte valg. Vi tolket oppgaven slik at vi skulle generere utstillinger med tilfeldig valgte filer i valgt kategori. Vi innså senere at dette ikke var et krav, men vi valgte å beholde det slik siden det ikke strider med oppgaven.

Videre tolket vi det slik at det måtte genereres en ny utstilling ved endring av valgt kategori, men at det ikke gjorde noe om det ble generert nye utstillinger fra de samme kategoriene hvis man klikker på bekreft-knappen uten å endre kategoriene. Det finnes nok mer elegante løsninger for denne komponenten, men på grunn av måten vi tolken oppgaven og at vi ikke var så kjent med React fra før, valgte vi å fokusere på funksjonaliteten først og fremst.

#### Fane-komponenten:
Fane-komponenten består av fire sub-komponenter, én for hver knapp, hvor hver har en state for å angi hvilken knapp som er aktiv. Når man har valgt kategori, vil fane 1 være aktiv, og kan endres ved klikk på knappene. Ved endring av valg av fane vil fane-komponenten oppdatere galleri-komponenten, som er en foreldre.
-- idéer for diskusjon av løsning?

#### Media-komponenten:
Media-komponenten er forelder til bilde-, tekst-, og lydkomponenten, og har kontroll over kommunikasjon mellom dem og galleri-komponenten. Den bruker valgt kategori og aktiv fane til å generere fire tilfeldige kombinasjoner av filene fra kategoriene, og sender mappe og filnummer videre til barnkompontene når de skal laste inn nye filer.

-- noe om de individuelle komponentene og diskusjon rundt løsningen


#### Bilde-,tekst- og lyd-komponent:
Tekst-komponenten bruker mappe og filnummer som den får fra media-komponenten til å generere en url. Vi bruker fetch til å hente filen fra url-en, omgjør responsen så til json, og lagrer verdiene i state. De blir så brukt i renderingen. Prosessen er omtrent den samme for bilde-komponenten, bortsett fra at responsen blir omgjort til tekst.

Siden disse to komponentene er veldig like, kunne vi ha lagd en felles komponent i stedet, og brukt props til å kompensere for forskjellene, men vi synes det også er ryddig å ha to forskjellige komponenter til hvert sitt bruk.

--noe om hvordan lyd skiller seg ut

#### Startside:
På startsiden viser utstillingen bare en velkomsttekst. Fane 1 vil være aktiv og de andre vil være deaktivert. I kategori-komponenten vil én kategori for hver mediatype være forhåndsvalgt, og når man klikker på velg-knappen vil utstillingene bli generert og fane 2, 3 og 4 vil bli aktivert.


#### AJAX:
Vi har valgt å bruke Fetch for å laste inn data dynamisk, siden det er en del av javaScript API-et, og det har nok funksjonalitet til et lite prosjekt.
-- Mer å legge til?


### Layout:
PC: Vi ønsker å utnytte bredden på PC-skjermen, og har derfor valgt denne layouten.
Mobil: Vi ønsker at bruker ikke skal måtte scrolle for å se bilde og tekst, og at bruker ikke skal bli overveldet av mange komponenter, og har derfor valgt denne layouten.
--trenger oppdatering


### Testing:
3 enheter


### Kilder til media-filer:
Bilder er hentet fra “”
Tekster er hentet fra “https://www.poetryfoundation.org/”
Lyder er hentet fra “http://soundbible.com”











### Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
