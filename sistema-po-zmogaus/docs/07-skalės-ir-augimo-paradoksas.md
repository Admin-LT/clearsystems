---
sidebar_position: 8
---

# 7. Skalės ir augimo paradoksas

Skalės ir augimo paradoksas

7 skyrius: Skalės ir augimo paradoksas
Kas yra tikroji skalė?
Scalability = ar gali augti be griūties. Ne ar gali daugiau daryti pats, o ar gali leisti kitiems daryti be baimės.
Skalė dažnai suprantama kaip kiekybinis matas – kiek užklausų sistema gali apdoroti, kiek vartotojų ji gali aptarnauti, kiek duomenų ji gali saugoti. Tačiau tikroji skalė yra daug gilesnė koncepcija, apimanti ne tik techninį, bet ir organizacinį, socialinį bei psichologinį aspektus.
Tikroji skalė yra sistema, kuri gali augti be griūties – ne tik technine prasme, bet ir organizacine, socialine, psichologine prasme. Tai sistema, kuri leidžia ne tik daugiau daryti pačiam, bet ir leidžia kitiems prisidėti be baimės.
Skalė turi kelis esminius aspektus:
1. Techninis aspektas
Tradicinis skalės supratimas – sistema gali apdoroti augantį apkrovos kiekį be veikimo sutrikimų. Tai apima horizontalų ir vertikalų skalabilumą, paskirstytus algoritmus, replikaciją, sharding ir kitas technines priemones.
2. Organizacinis aspektas
Sistema gali būti kuriama ir palaikoma augančios komandos be koordinavimo problemų. Tai apima moduliškumą, aiškias sąsajas, dokumentaciją, procesus ir kitas organizacines priemones.
3. Socialinis aspektas
Sistema skatina bendradarbiavimą ir žinių dalijimąsi tarp komandos narių. Tai apima bendrą kalbą, kultūrą, vertybes ir kitus socialinius aspektus.
4. Psichologinis aspektas
Sistema sukuria pasitikėjimą ir saugumo jausmą komandos nariams. Jie jaučiasi įgalinti prisidėti, eksperimentuoti ir tobulinti sistemą be baimės.
Tikroji skalė pasireiškia, kai sistema gali augti visais šiais aspektais – kai ji gali aptarnauti daugiau vartotojų, kai prie jos kūrimo gali prisidėti daugiau programuotojų, kai ji gali evoliucionuoti ir prisitaikyti prie besikeičiančių reikalavimų.
Augimas be griūties
Jei viską turi liesti tas pats žmogus – sistema neauga. Jei be „to vieno" niekas negali prisiliesti – tai ne sistema, o priklausomybė nuo žmogaus.
Augimas be griūties yra esminis skalės aspektas. Tai reiškia, kad sistema gali augti – tiek technine, tiek organizacine prasme – be katastrofiškų sutrikimų ar krizių.
Augimas be griūties pasireiškia keliais būdais:
1. Techninis augimas
Sistema gali aptarnauti augantį vartotojų skaičių, apdoroti daugiau duomenų, vykdyti daugiau operacijų be veikimo sutrikimų. Ji gali būti plečiama horizontaliai (pridedant daugiau serverių) ar vertikaliai (pridedant daugiau resursų esamiems serveriams) pagal poreikį.
2. Funkcinis augimas
Sistema gali būti plečiama naujomis funkcijomis be esamo funkcionalumo sutrikdymo. Naujos funkcijos gali būti integruojamos sklandžiai, nesukeliant nestabilumo ar konfliktų su esamomis funkcijomis.
3. Komandos augimas
Prie sistemos kūrimo ir palaikymo gali prisidėti augantis komandos narių skaičius be koordinavimo problemų ar produktyvumo sumažėjimo. Nauji komandos nariai gali greitai įsitraukti ir pradėti efektyviai prisidėti.
4. Žinių augimas
Sistema gali kaupti ir perduoti žinias be informacijos praradimo ar iškraipymo. Žinios apie sistemą nėra sutelktos vieno ar kelių žmonių galvose, bet yra dokumentuotos, struktūrizuotos ir prieinamos visiems komandos nariams.
Augimas be griūties reikalauja sąmoningo planavimo ir dizaino. Tai nėra savybė, kuri atsiranda savaime – ji turi būti įdiegta į sistemą nuo pat pradžių ir nuolat palaikoma.
Kai sistema negali augti be griūties, ji tampa priklausoma nuo konkrečių žmonių – “tų vienintelių”, kurie žino, kaip viskas veikia, ir kurie vieninteliai gali ją keisti. Tai nėra tikra sistema – tai yra priklausomybė nuo žmogaus, kuri yra trapi ir netvari.
Dark wizard vs. architekto skalė
Dark wizard skalė – žmogaus atmintis. Architekto skalė – aiškios ribos, kur kiti gali saugiai jungtis.
“Dark wizard” yra programuotojas, kuris žino visas sistemos paslaptis, visus jos niuansus ir ypatumas. Jis gali padaryti “stebuklus” – išspręsti sudėtingas problemas, optimizuoti kritines dalis, išgelbėti sistemą kritiniais momentais. Tačiau jo žinios dažnai yra implicitinės, nedokumentuotos, sunkiai perduodamos kitiems.
Dark wizard skalė yra ribota – ji apsiriboja tuo, ką vienas žmogus gali atsiminti ir valdyti. Kai sistema tampa per didelė ar per sudėtinga net dark wizard’ui, ji pradeda griūti.
Architektas, priešingai, kuria sistemas, kurios gali būti suprantamos ir valdomos ne tik jo paties, bet ir kitų. Jis apibrėžia aiškias ribas, kur kiti gali saugiai jungtis ir prisidėti. Jis dokumentuoja sprendimus, kuria abstrakcijas, nustato principus ir gaires.
Architekto skalė yra daug didesnė – ji apima ne tik tai, ką vienas žmogus gali atsiminti, bet ir tai, ką komanda gali kolektyviai suprasti ir valdyti. Ji leidžia sistemai augti ne tik technine, bet ir organizacine prasme.
Skirtumas tarp dark wizard ir architekto skalės yra esminis:
Dark wizard skalė: - Ribota vieno žmogaus atmintimi ir gebėjimais - Remiasi implicitinėmis žiniomis ir intuicija - Sukuria priklausomybę nuo konkretaus žmogaus - Veda prie “herojiško” programavimo, kur problemos sprendžiamos ad hoc, o ne sistemiškai
Architekto skalė: - Išplėsta per komandos kolektyvinį supratimą - Remiasi eksplicitinėmis žiniomis ir dokumentacija - Sukuria nepriklausomybę nuo konkrečių žmonių - Veda prie sisteminio problemų sprendimo, kur problemos sprendžiamos struktūriškai ir nuosekliai
Perėjimas nuo dark wizard prie architekto skalės reikalauja sąmoningo pastangų ir disciplinos. Tai reiškia atsisakyti “herojaus” vaidmens ir fokusuotis į sistemų kūrimą, kurios gali būti suprantamos ir valdomos kitų.
Sistemos durys vs. sienos
Sistemos, kurios auga – turi duris. Sistemos, kurios neauga – turi sienas.
Sistemos gali būti suprojektuotos dviem pagrindiniais būdais: su durimis arba su sienomis.
Sistemos su durimis: - Leidžia kitiems lengvai prisijungti ir prisidėti - Turi aiškias sąsajas ir protokolus - Dokumentuoja savo veikimą ir principus - Skatina eksperimentavimą ir inovacijas - Evoliucionuoja kartu su bendruomene
Sistemos su sienomis: - Apsunkina kitų prisijungimą ir prisidėjimą - Turi neaiškias ar nedokumentuotas sąsajas - Slepia savo veikimą ir principus - Riboja eksperimentavimą ir inovacijas - Stagnuoja ir tampa izoliuotos
Sistemos su durimis auga, nes jos leidžia kitiems prisidėti, eksperimentuoti, tobulinti. Jos sukuria ekosistemą, kuri evoliucionuoja ir prisitaiko prie besikeičiančių reikalavimų.
Sistemos su sienomis neauga, nes jos riboja kitų prisidėjimą, eksperimentavimą, tobulinimą. Jos tampa izoliuotos ir stagnuojančios, nesugebančios prisitaikyti prie besikeičiančių reikalavimų.
Durys sistemoje gali pasireikšti įvairiais būdais:
1. API ir sąsajos
Aiškiai apibrėžtos ir dokumentuotos API leidžia kitiems integruotis su sistema ir ją plėsti. Jos sukuria aiškias ribas, kur kiti gali saugiai jungtis.
2. Plėtinių mechanizmai
Plėtinių (plugins, extensions) mechanizmai leidžia kitiems pridėti naują funkcionalumą be esamos sistemos modifikavimo. Jie sukuria erdvę eksperimentavimui ir inovacijoms.
3. Atviras kodas
Atviras kodas leidžia kitiems studijuoti, modifikuoti ir tobulinti sistemą. Jis sukuria bendruomenę, kuri kolektyviai prisideda prie sistemos evoliucijos.
4. Dokumentacija ir žinių dalijimasis
Išsami dokumentacija ir aktyvus žinių dalijimasis leidžia kitiems suprasti sistemą ir efektyviai su ja dirbti. Jie mažina priklausomybę nuo “paslaptingų žinių”, kurias turi tik keli žmonės.
5. Bendradarbiavimo procesai
Aiškūs ir efektyvūs bendradarbiavimo procesai leidžia kitiems lengvai prisidėti prie sistemos kūrimo ir palaikymo. Jie sukuria struktūrą, kuri palengvina kolektyvinį darbą.
Durys nėra tik techninė koncepcija – jos yra ir organizacinė, ir kultūrinė. Jos reikalauja ne tik techninių sprendimų, bet ir organizacinių procesų, kultūrinių vertybių, lyderystės.
“Pažinti kodą” vs. naudoti kodą
Kai reikia „pažinti kodą" vietoj to, kad jį naudotum – skalės nėra. Kai instrukcija skamba „paklausk Jono" – tai ne mastelis, tai šešėlinė iniciacija.
Skalabilios sistemos leidžia naudoti kodą be būtinybės jį “pažinti” – t.y., be būtinybės suprasti visas jo vidines detales, niuansus, istoriją. Jos leidžia programuotojams dirbti su abstrakcijomis, sąsajomis, dokumentacija, o ne su “žaliuoju kodu”.
Kai sistema reikalauja “pažinti kodą” – t.y., kai programuotojai turi gilintis į kodo detales, studijuoti jo istoriją, suprasti visus jo niuansus – ji tampa neskalabili. Ji reikalauja per daug investicijų iš kiekvieno naujo programuotojo, ir šios investicijos auga kartu su sistemos dydžiu ir amžiumi.
Panašiai, kai instrukcija naujam komandos nariui skamba “paklausk Jono” – t.y., kai žinios apie sistemą yra sutelktos vieno ar kelių žmonių galvose, o ne dokumentuotos ir struktūrizuotos – sistema tampa neskalabili. Ji sukuria priklausomybę nuo konkrečių žmonių ir jų žinių.
Šis reiškinys dažnai pasireiškia kaip “šešėlinė iniciacija” – procesas, kurio metu nauji komandos nariai turi pereiti neformalų, nedokumentuotą mokymosi procesą, dažnai per bandymus ir klaidas, kad taptų “pilnaverčiais” komandos nariais. Tai yra neefektyvus ir netolygus procesas, kuris gali trukti mėnesius ar net metus.
Skalabilios sistemos, priešingai, turi aiškų, dokumentuotą, struktūrizuotą įvedimo procesą. Jos leidžia naujiems komandos nariams greitai tapti produktyviais, fokusuojantis į tai, ką jie nori pasiekti, o ne į tai, kaip sistema veikia viduje.
Perėjimas nuo “pažinti kodą” prie “naudoti kodą” reikalauja investicijų į:
1. Abstrakcijas
Geros abstrakcijos slepia sudėtingumą ir pateikia paprastesnes sąsajas. Jos leidžia programuotojams dirbti aukštesniame lygmenyje, neįsigilinant į detales.
2. Sąsajas
Aiškiai apibrėžtos sąsajos nustato ribas tarp skirtingų sistemos dalių. Jos leidžia programuotojams suprasti, kaip sąveikauti su sistema, neturint žinoti, kaip ji veikia viduje.
3. Dokumentaciją
Išsami dokumentacija paaiškina, kaip naudoti sistemą, kokie yra jos principai, kokie yra geriausi praktikos pavyzdžiai. Ji leidžia programuotojams greitai rasti atsakymus į savo klausimus.
4. Testus
Automatizuoti testai ne tik užtikrina sistemos kokybę, bet ir tarnauja kaip gyva dokumentacija. Jie parodo, kaip sistema turėtų būti naudojama ir kaip ji turėtų elgtis.
5. Pavyzdžius
Konkretūs pavyzdžiai parodo, kaip naudoti sistemą realiose situacijose. Jie leidžia programuotojams mokytis per pavyzdžius, o ne per abstrakčius aprašymus.
Šios investicijos gali atrodyti brangios trumpuoju laikotarpiu, bet jos atsiperka ilguoju laikotarpiu, nes leidžia sistemai augti be griūties.
Dokumentacija – tai atminties paveldėjimas
Dokumentacija nėra biurokratija – tai kolektyvinė atmintis. Kai sistema aprašyta, ją galima perduoti – kaip estafetę. Kai sistema gyva tik žmogaus galvoje – ją galima tik paveldėti su krauju.
Dokumentacija dažnai suvokiama kaip biurokratinė našta, kaip kažkas, ką reikia daryti, nes “taip reikia”, bet kas neturi realios vertės. Tačiau tai yra klaidingas požiūris. Dokumentacija yra kolektyvinė atmintis – būdas perduoti žinias, patirtį, sprendimus iš vieno žmogaus kitam, iš vienos komandos kitai, iš vienos kartos kitai.
Kai sistema yra gerai dokumentuota, ji gali būti perduodama kaip estafetė – vienas žmogus ar komanda gali perduoti ją kitam žmogui ar komandai be didelių informacijos praradimų ar iškraipymų. Nauji žmonės gali greitai suprasti sistemą, jos principus, jos istoriją, jos sprendimus.
Kai sistema nėra dokumentuota, ji egzistuoja tik žmonių galvose. Kai šie žmonės išeina, jie išsineša ir dalį sistemos su savimi. Nauji žmonės turi “paveldėti” sistemą “su krauju” – t.y., jie turi pereiti ilgą ir skausmingą mokymosi procesą, dažnai per bandymus ir klaidas, kad atstatytų prarastas žinias.
Geros dokumentacijos požymiai
Gera dokumentacija pasižymi keletu esminių požymių:
1. Aiškumas
Gera dokumentacija yra aiški ir suprantama. Ji vengia žargono, abstrakčių terminų, neaiškių formuluočių. Ji naudoja konkrečius pavyzdžius, diagramas, iliustracijas, kad paaiškintų sudėtingas koncepcijas.
2. Struktūra
Gera dokumentacija yra struktūrizuota. Ji turi aiškią struktūrą, kuri leidžia lengvai rasti reikiamą informaciją. Ji naudoja antraštes, turinius, indeksus, nuorodas, kad palengvintų navigaciją.
3. Aktualumas
Gera dokumentacija yra aktuali. Ji atspindi dabartinę sistemos būseną, ne istorinę ar planuojamą. Ji yra reguliariai atnaujinama, kad atspindėtų pokyčius sistemoje.
4. Išsamumas
Gera dokumentacija yra išsami. Ji apima visus svarbius sistemos aspektus – jos tikslus, principus, architektūrą, komponentus, sąsajas, procesus. Ji neturi “baltų dėmių” ar “juodų dėžių”.
5. Kontekstas
Gera dokumentacija pateikia kontekstą. Ji paaiškina ne tik “kaip”, bet ir “kodėl” – kodėl sistema buvo sukurta, kodėl buvo priimti tam tikri sprendimai, kokie buvo alternatyvūs sprendimai ir kodėl jie buvo atmesti.
6. Prieinamumas
Gera dokumentacija yra prieinama. Ji yra lengvai randama, pasiekiama, naudojama. Ji yra integruota į kasdieninį darbą, o ne paslėpta kažkur “dokumentacijos kapinėse”.
Blogos dokumentacijos požymiai
Bloga dokumentacija, priešingai, pasižymi šiais požymiais:
1. Neaiškumas
Bloga dokumentacija yra neaiški ir sunkiai suprantama. Ji naudoja žargoną, abstrakčius terminus, neaiškias formuluotes. Ji vengia konkrečių pavyzdžių, diagramų, iliustracijų.
2. Chaotiškumas
Bloga dokumentacija yra chaotiška. Ji neturi aiškios struktūros, kuri leistų lengvai rasti reikiamą informaciją. Ji yra fragmentuota, nesusieta, neorganizuota.
3. Pasenimas
Bloga dokumentacija yra pasenusi. Ji neatspindi dabartinės sistemos būsenos, bet istorinę ar planuojamą. Ji nėra reguliariai atnaujinama, kad atspindėtų pokyčius sistemoje.
4. Fragmentiškumas
Bloga dokumentacija yra fragmentiška. Ji apima tik dalį svarbių sistemos aspektų, palikdama “baltas dėmes” ar “juodas dėžes”. Ji gali būti pernelyg detali vienose srityse ir pernelyg abstrakti kitose.
5. Bekontekstiškumas
Bloga dokumentacija nepateikia konteksto. Ji paaiškina tik “kaip”, bet ne “kodėl” – ji nepaaiškina, kodėl sistema buvo sukurta, kodėl buvo priimti tam tikri sprendimai, kokie buvo alternatyvūs sprendimai ir kodėl jie buvo atmesti.
6. Neprieinamumas
Bloga dokumentacija yra neprieinama. Ji yra sunkiai randama, pasiekiama, naudojama. Ji yra atskirta nuo kasdieninio darbo, paslėpta kažkur “dokumentacijos kapinėse”.
Bloga dokumentacija prašo tikėjimo. Gera – leidžia pradėti be krikšto.
Praktiniai skalės didinimo metodai
Skalės didinimas yra praktinis procesas, reikalaujantis konkrečių veiksmų ir sprendimų. Štai keletas praktinių metodų, kurie gali padėti didinti skalę:
1. Moduliarizacija
Skaidykite sistemą į modulius, kurie gali būti suprantami, kuriami ir keičiami nepriklausomai vienas nuo kito. Moduliai turėtų turėti aiškias atsakomybes ir ribas.
Praktiniai veiksmai: - Identifikuokite natūralias sistemos skaidymo linijas - Apibrėžkite aiškias sąsajas tarp modulių - Minimizuokite priklausomybes tarp modulių - Dokumentuokite kiekvieno modulio atsakomybę ir ribas
2. Abstrakcijos
Kurkite abstrakcijas, kurios slepia sudėtingumą ir pateikia paprastesnes sąsajas. Abstrakcijos leidžia dirbti su sistema aukštesniame lygmenyje, neįsigilinant į detales.
Praktiniai veiksmai: - Identifikuokite dažnai pasikartojančius šablonus - Sukurkite abstrakcijas, kurios apibendrina šiuos šablonus - Dokumentuokite abstrakcijas ir jų naudojimo būdus - Testuokite abstrakcijas, kad užtikrintumėte jų teisingumą
3. Dokumentacija
Kurkite išsamią dokumentaciją, kuri paaiškina, kaip naudoti sistemą, kokie yra jos principai, kokie yra geriausi praktikos pavyzdžiai.
Praktiniai veiksmai: - Dokumentuokite architektūrą, komponentus, sąsajas - Pateikite konkrečius pavyzdžius ir use-case’us - Reguliariai atnaujinkite dokumentaciją - Integruokite dokumentaciją į kasdieninį darbą
4. Automatizuoti testai
Kurkite automatizuotus testus, kurie ne tik užtikrina sistemos kokybę, bet ir tarnauja kaip gyva dokumentacija.
Praktiniai veiksmai: - Rašykite unit testus, integracinius testus, end-to-end testus - Naudokite testus kaip specifikaciją - Automatizuokite testų vykdymą - Analizuokite testų rezultatus ir tobulinkite testus
5. Standartizacija
Standartizuokite kodo stilių, architektūrinius šablonus, procesus, įrankius. Standartizacija mažina kognityvinę naštą ir palengvina bendradarbiavimą.
Praktiniai veiksmai: - Sukurkite ir laikykitės kodo stilių gairių - Naudokite tuos pačius architektūrinius šablonus panašioms problemoms - Standartizuokite procesus ir įrankius - Automatizuokite standartų tikrinimą
6. Žinių dalijimasis
Skatinkite žinių dalijimąsi tarp komandos narių. Žinių dalijimasis mažina priklausomybę nuo konkrečių žmonių ir didina kolektyvinį supratimą.
Praktiniai veiksmai: - Organizuokite reguliarius žinių dalijimosi sesijas - Praktikuokite porinius programavimą - Rotaciją tarp skirtingų sistemos dalių - Kurkite ir palaikykite žinių bazę
7. Inkrementinis refaktoringas
Reguliariai refaktorinkite kodą, kad jis išliktų švarus, suprantamas, palaikomas. Inkrementinis refaktoringas leidžia palaipsniui gerinti sistemą be didelių sutrikimų.
Praktiniai veiksmai: - Įtraukite refaktoringą į kasdieninį darbą - Laikykitės “palik kodą švaresnį, nei radai” principo - Naudokite automatizuotus testus, kad užtikrintumėte, jog refaktoringas nepakeitė funkcionalumo - Dokumentuokite refaktoringo sprendimus ir jų priežastis
8. Mentorystė
Organizuokite mentorystės programas, kurios padeda naujiems komandos nariams greitai įsitraukti ir tapti produktyviais.
Praktiniai veiksmai: - Priskirkite mentorių kiekvienam naujam komandos nariui - Sukurkite struktūrizuotą įvedimo procesą - Reguliariai peržiūrėkite ir tobulinkite mentorystės programą - Skatinkite grįžtamąjį ryšį iš naujų komandos narių
9. Architektūrinės peržiūros
Reguliariai peržiūrėkite ir vertinkite sistemos architektūrą. Architektūrinės peržiūros padeda identifikuoti problemas ir galimybes tobulinti.
Praktiniai veiksmai: - Organizuokite reguliarias architektūrines peržiūras - Įtraukite įvairius suinteresuotus asmenis - Dokumentuokite peržiūrų rezultatus ir sprendimus - Sekite sprendimų įgyvendinimą
10. Techninės skolos valdymas
Aktyviai valdykite techninę skolą. Techninė skola, jei ji nėra valdoma, gali tapti didele kliūtimi skalei.
Praktiniai veiksmai: - Identifikuokite ir dokumentuokite techninę skolą - Prioritizuokite techninę skolą pagal jos poveikį - Įtraukite techninės skolos grąžinimą į kasdieninį darbą - Sekite techninės skolos lygį ir tendencijas
Šie metodai nėra nepriklausomi – jie veikia kartu, sustiprinami vienas kito. Pavyzdžiui, moduliarizacija palengvina abstrakcijų kūrimą, abstrakcijos palengvina dokumentaciją, dokumentacija palengvina žinių dalijimąsi, ir t.t.
Skalės didinimas nėra vienkartinis projektas – tai yra nuolatinis procesas, reikalaujantis dėmesio, pastangų ir disciplinos. Tačiau šios pastangos atsiperka, nes jos leidžia sistemai augti be griūties, komandai augti be produktyvumo sumažėjimo, verslui augti be techninių apribojimų.


---

