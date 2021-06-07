# Solidabiksen koodihaaste
Tehtävänäsi on toteuttaa autoilumittari-sovellus. 
Sovelluksen tulee pystyä suorittamaan vertailu matka-ajan ja polttoaineen kulutuksen välillä kahden eri valitun nopeuden mukaan: käyttäjä ilmoittaa saman matkustettavan etäisyyden samalla kulkuneuvotyypillä eri nopeuksilla ja sovellus laskee miten paljon nopeammin käyttäjä on perillä ja kuinka paljon enemmän polttoainetta tähän kuluu.

[Ohjeistus](https://koodihaaste.solidabis.com/#/)

# Toteutus
Yksinkertaisen monimutkainen hienosäätöä vaativa ja parannusehdotuksia löytyvä toteutus, mutta ajanpuutteen vuoksi tälläisenaan toteutettu perusratkaisu hifistelyelementeillä tuotettu autoilulaskuri. Parannusehdotuksia löytyy ja varmasti bugiton ei ole, mutta omaan silmään visuaaliset tarpeet tyydyttävä yksinkertainen lopputulos. Lisättynä jarrutusmatkan laskurilla nopeuserojen ja bensankulutuksen vertailun lisäksi.    
  
tldr; Tulipahan tehtyä projektin puutteessa ja omaksi iloksi  
  
Html & Css  
Javascript  
JQuery  
[Animate.css](https://animate.style/)  
  
Ratkaisu osoitteesta [urrio.cloud](https://urrio.cloud/koodihaaste)

## Tarkempi ohjeistus

Tehtävä  
Kesälomat lähestyvät ja monien katseet kääntyvät kohti kesämökkejä. Osalla nämä löytyvät lähempää, osalla taas matkustukseen kuluu pitkiäkin aikoja. Monesti tien päällä ollessa tuntuu siltä, että jos hieman vielä kiihdyttäisi, olisi perillä merkittävästi nopeammin… vai olisiko sittenkään? Ovatko voitetut minuutit kasvaneiden matkakustannusten arvoisia? Entä kuinka paljon matkustusajoneuvon tyyppi vaikuttaa tähän?  
  
Tehtävänäsi on toteuttaa autoilumittari-sovellus. Sovelluksen tulee pystyä suorittamaan vertailu matka-ajan ja polttoaineen kulutuksen välillä kahden eri valitun nopeuden mukaan: käyttäjä ilmoittaa saman matkustettavan etäisyyden samalla kulkuneuvotyypillä eri nopeuksilla ja sovellus laskee miten paljon nopeammin käyttäjä on perillä ja kuinka paljon enemmän polttoainetta tähän kuluu. Etäisyyden sekä kulkuneuvotyypin tulee siis olla molemmissa samat. Sovelluksen tulee pystyä näyttämään web-käyttöliittymässä molemmista annetuista matkanopeuksista käytetty aika ja polttoaine, sekä näiden kahden ero.  
  
Sovelluksessa tulee pystyä tarkastelemaan kolmen erilaisen auton tuloksia. Autojen bensankulutus kasvaa 1.009 kulmakertoimella. Eli jos auton nopeus kasvaa 1km/h, niin bensankulutus kasvaa 1.009 kertaiseksi. Eri autojen bensakulutus 1km/h nopeudella on seuraava:  
Auto A: 3l / 100km  
Auto B: 3.5l / 100km  
Auto C: 4l / 100km  
  
Toteutuksessa käytettävät teknologiat ovat vapaasti päätettävissäsi. Tehtävässä ei välttämättä ole tarpeen tehdä erillistä backend-toteutusta, mutta voit sen halutessasi tehdä. Tehtävässä ei saa käyttää mitään kolmannen osapuolen palvelua tai kirjastoa, mikä toteuttaa vaaditut vertailutoimenpiteet.
