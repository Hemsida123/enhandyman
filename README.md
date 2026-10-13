# En Handyman — färdig webbplats

Komplett statisk hemsida med 18 HTML-filer, lokal CSS, JavaScript, typsnitt och originalbilder. Ingen installation eller byggprocess behövs.

## GitHub Pages
1. Packa upp ZIP-filen.
2. Ladda upp ALLT innehåll i mappen, så att `index.html`, `styles.css`, `fonts.css`, `script.js` och `assets/` ligger direkt i repositoryts rot. Behåll även `.nojekyll`.
3. Gå till Settings → Pages. Välj Deploy from a branch, din branch och `/ (root)`. Spara.
4. Vänta tills publiceringen är klar. Öppna adressen som GitHub Pages visar.

Alla interna länkar och resurser använder relativa sökvägar och fungerar även under ett GitHub-projektnamn. Undvik att ladda upp en extra omslutande mapp. En enda indexfil utan assets, CSS och andra sidor räcker inte.

## Vanligt webbhotell
Ladda upp samma innehåll i webbhotellets webbrotsmapp, ofta `public_html`. Aktivera SSL/HTTPS hos webbhotellet. HTTPS och omdirigering från HTTP ställs in på servern, inte i indexfilen.

## Sidor
Startsida, tjänsteöversikt, nio tjänstesidor, om oss, priser/FAQ, omdömen, kontakt, miljö/återvinning, integritet samt 404.

## Kontakt och priser
Telefon och mejlknappar fungerar direkt. Offertknappen öppnar besökarens mejlprogram med förifyllt ämne och mall. Den skickar inget automatiskt och kräver att en mejlapp är installerad/konfigurerad; mejladressen finns också synlig.

Räkneexemplet på prissidan inkluderar arbetstid och en servicebil, 25 % moms, före eventuell skattereduktion. Material, parkering, trängselskatt och avfall ingår inte. Minsta debitering två timmar. El/VVS och specialistarbete offereras separat. Kontrollera prislistan före skarp publicering.

## Bilder, referenser och omdömen
Bilder, logotyp och företagsuppgifter hämtade från enhandyman.se den 13 oktober 2026. Inga ägarporträtt hittades. Tjänstebilderna presenteras som illustrationer, inte kundprojekt.

Tre kundreferenser kommer från företagets startsida. Två Google-omdömen återges från företagets befintliga Trustindex-modul på snickerisidan, med källa och hämtningsdatum. De uppdateras inte automatiskt. Uppdatera dem manuellt vid behov; inga betyg eller kunder har hittats på. Företagets publicerade försäkringsuppgifter används utan separat verifieringssigill.

Alla rasterbilder har källmetadata. Behåll `.webp.json`-filerna intill bilderna som dokumentation. Typsnitt: Barlow och Barlow Condensed (SIL Open Font License), lokalt lagrade. Licenstext finns i assets/OFL.txt.

## Sök och integritet
Unika sidtitlar och beskrivningar, semantiska rubriker, företagsdata i JSON-LD, bildbeskrivningar, tangentbordsstöd och reducerad rörelse. Ingen spårning eller cookies sätts av sidans kod. Integritetstexten beskriver denna leverans; se över den om fler externa tjänster läggs till.

Ingen canonical eller sitemap med en påhittad domän är inlagd. När den slutliga adressen är bestämd kan dessa läggas till med rätt domän. Ingen placering i sökresultat garanteras.
