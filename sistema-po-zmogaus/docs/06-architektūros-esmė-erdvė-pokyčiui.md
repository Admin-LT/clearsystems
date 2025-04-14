---
sidebar_position: 7
---

# 6. Architektūros esmė: erdvė pokyčiui

Architektūros esmė: erdvė pokyčiui

6 skyrius: Architektūros esmė: erdvė pokyčiui
Architektūra kaip erdvė pokyčiui
Architektūra = erdvė pokyčiui. Ne sprendimų suma, o laisvė juos keisti be skausmo.
Tradiciškai architektūra suvokiama kaip struktūra – komponentų, modulių, sluoksnių išdėstymas, jų sąveikos būdai, naudojamos technologijos. Tačiau šis požiūris yra statiškas, jis neatsižvelgia į esminį faktą: sistemos keičiasi. Jos keičiasi, nes keičiasi verslo poreikiai, technologijos, komandos, aplinka.
Tikroji architektūros esmė yra ne struktūra pati savaime, bet erdvė pokyčiui – galimybė sistemai evoliucionuoti, prisitaikyti, keistis be didelių sukrėtimų ar rizikos. Gera architektūra sukuria erdvę, kurioje pokyčiai gali vykti natūraliai ir sklandžiai.
Kai architektūrą suvokiame kaip erdvę pokyčiui, mūsų prioritetai keičiasi:
Nuo statinių struktūrų prie dinaminių galimybių
Vietoj to, kad fokusuotumėmės tik į tai, kaip sistema atrodo dabar, mes galvojame apie tai, kaip ji galės keistis ateityje. Kokius pokyčius ji turės atlaikyti? Kokios evoliucijos kryptys yra tikėtinos?
Nuo griežtų taisyklių prie lanksčių principų
Vietoj to, kad nustatytume griežtas taisykles, kurios gali tapti varžančiomis ateityje, mes formuluojame lanksčius principus, kurie gali būti pritaikyti įvairiose situacijose ir kontekstuose.
Nuo vieno teisingo sprendimo prie kompromisų balanso
Vietoj to, kad ieškotume vieno “teisingo” sprendimo, mes pripažįstame, kad architektūra yra kompromisų menas. Kiekvienas sprendimas turi savo privalumų ir trūkumų, ir geras architektas sugeba rasti balansą, kuris geriausiai atitinka esamus ir būsimus poreikius.
Gerai sukurta sistema leidžia pridėti funkciją kaip plugin’ą, o ne chirurgiją. Kai kiekvienas pokytis – amputacija, architektūra jau mirusi.
Kai sistema sukurta su erdve pokyčiui, naujos funkcijos ar pakeitimai gali būti integruojami natūraliai, be didelių pertvarkymų ar rizikos. Tai panašu į modulinę sistemą, kur nauji komponentai gali būti prijungiami per aiškiai apibrėžtas sąsajas, neliečiant egzistuojančių komponentų vidaus.
Priešingai, kai sistema neturi erdvės pokyčiui, kiekvienas pakeitimas tampa sudėtinga operacija, reikalaujančia gilių žinių apie sistemos vidų ir keliančia didelę riziką. Tai panašu į chirurginę operaciją, kur mažiausias netikslumas gali sukelti rimtų komplikacijų.
Geros architektūros požymiai
Architektūra – tai ne tai, kas parašyta Confluence. Architektūra – tai kiek prakaito išpila žmogus, kai reikia kažką pakeisti. Tai kiek daug bijom „nelauktų efektų", kai paliečiam vieną vietą.
Gera architektūra pasižymi keletu esminių požymių, kurie leidžia jai sukurti erdvę pokyčiui:
1. Moduliškumas
Gera architektūra skaido sistemą į modulius, kurie gali būti suprantami, kuriami ir keičiami nepriklausomai vienas nuo kito. Moduliai turi aiškias atsakomybes ir ribas, kas leidžia dirbti su vienu moduliu neliečiant kitų.
2. Laisvas susiejimas (Loose coupling)
Gera architektūra minimizuoja priklausomybes tarp skirtingų sistemos dalių. Komponentai bendrauja per aiškiai apibrėžtas sąsajas, o ne per paslėptus kanalus ar prielaidas. Tai leidžia keisti vieną komponentą nedarant įtakos kitiems.
3. Aukšta kohezija (High cohesion)
Gera architektūra grupuoja susijusias funkcijas kartu. Kiekvienas modulis ar komponentas turi aiškų tikslą ir atsakomybę, o visos jo dalys dirba kartu siekiant šio tikslo. Tai padaro sistemą labiau suprantamą ir lengviau keičiamą.
4. Abstrakcijos
Gera architektūra naudoja abstrakcijas, kad paslėptų sudėtingumą ir pateiktų paprastesnes sąsajas. Abstrakcijos leidžia dirbti su sistema aukštesniame lygmenyje, neįsigilinant į detales. Jos taip pat leidžia keisti įgyvendinimą nedarant įtakos sąsajai.
5. Nuoseklumas
Gera architektūra yra nuosekli – panašios problemos sprendžiamos panašiais būdais, naudojami tie patys šablonai ir principai visoje sistemoje. Tai padaro sistemą labiau nuspėjamą ir lengviau suprantamą.
6. Aiškios ribos
Gera architektūra apibrėžia aiškias ribas tarp skirtingų sistemos dalių. Šios ribos padeda kontroliuoti, kaip informacija ir kontrolė teka per sistemą, ir užtikrina, kad pakeitimai vienoje dalyje neturi netikėtų pasekmių kitose dalyse.
7. Testavimas
Gera architektūra palengvina testavimą. Sistema gali būti testuojama įvairiais lygmenimis – nuo vienetų testų iki integracinių ir sisteminių testų. Tai leidžia greitai identifikuoti problemas ir užtikrinti, kad pakeitimai nesukėlė netikėtų pasekmių.
8. Evoliucija
Gera architektūra leidžia sistemai evoliucionuoti. Ji gali būti išplėsta naujomis funkcijomis, pritaikyta prie besikeičiančių reikalavimų, integruota su naujomis technologijomis. Ji nėra statinė, bet dinamiška ir prisitaikanti.
9. Paprastumas
Gera architektūra siekia paprastumo. Ji vengia nereikalingo sudėtingumo ir fokusuojasi į esminius aspektus. Paprastumas padaro sistemą labiau suprantamą, lengviau palaikomą ir mažiau linkusią į klaidas.
10. Dokumentacija
Gera architektūra yra dokumentuota. Dokumentacija paaiškina architektūrinius sprendimus, jų priežastis ir kompromisus. Ji padeda naujiems komandos nariams suprasti sistemą ir užtikrina, kad architektūriniai principai yra suprantami ir laikomasi.
Šie požymiai nėra nepriklausomi – jie veikia kartu, sustiprinami vienas kito. Pavyzdžiui, moduliškumas ir laisvas susiejimas padeda sukurti aiškias ribas, o abstrakcijos padeda pasiekti laisvą susiejimą.
Architektūra vs. dokumentacija
Architektūra – tai ne tai, kas parašyta Confluence. Tai realus sistemos elgesys, jos struktūra ir principai, kurie pasireiškia kasdieniniame darbe.
Dokumentacija yra svarbi, bet ji nėra architektūra. Ji yra architektūros aprašymas, bandymas užfiksuoti ir perduoti architektūrinius sprendimus ir jų priežastis. Tačiau dokumentacija gali būti pasenusi, netiksli ar neišsami. Ji gali neatspindėti realios sistemos architektūros.
Tikroji architektūra pasireiškia per:
1. Kodą
Kodas yra galutinis architektūros išraiškos būdas. Jis parodo, kaip sistema iš tikrųjų veikia, kokie yra jos komponentai ir kaip jie sąveikauja. Geras kodas atspindi architektūrinius principus ir sprendimus.
2. Sistemos elgseną
Kaip sistema elgiasi įvairiose situacijose – kaip ji reaguoja į pakeitimus, kaip ji tvarkosi su klaidomis, kaip ji prisitaiko prie besikeičiančių reikalavimų – tai yra tikrosios architektūros išraiška.
3. Komandos patirtį
Kaip komanda dirba su sistema – kiek lengva ar sunku ją keisti, kiek laiko užtrunka įgyvendinti naują funkciją, kiek dažnai įvyksta netikėtos klaidos – tai taip pat yra architektūros išraiška.
Dokumentacija yra svarbi, bet ji turėtų būti suvokiama kaip pagalbinė priemonė, o ne kaip architektūra pati savaime. Ji padeda perduoti architektūrinius sprendimus ir jų priežastis, bet ji nėra architektūra.
Gera dokumentacija:

Paaiškina architektūrinius sprendimus ir jų priežastis
Aprašo pagrindinius komponentus ir jų sąveikas
Identifikuoja architektūrinius principus ir šablonus
Dokumentuoja kompromisus ir alternatyvas, kurios buvo svarstytos
Yra reguliariai atnaujinama, kad atspindėtų realią sistemos architektūrą

Tačiau net geriausia dokumentacija negali pakeisti realios patirties dirbant su sistema. Tikroji architektūra pasireiškia per kasdieninį darbą, per realius iššūkius ir sprendimus.
Erdvė pokyčiui vs. kontrolė
Erdvė pokyčiui yra svarbesnė už kontrolę. Kuo stipriau spaudi sistemą, tuo labiau ji dreba nuo judesio.
Architektūroje dažnai susiduriame su įtampa tarp dviejų priešingų jėgų: noro kontroliuoti sistemą ir poreikio suteikti erdvę pokyčiui. Ši įtampa pasireiškia įvairiais būdais:
Kontrolė: - Griežtos taisyklės ir apribojimai - Centralizuotas sprendimų priėmimas - Detalus planavimas ir specifikacijos - Standartizuoti procesai ir įrankiai
Erdvė pokyčiui: - Lankstūs principai ir gairės - Decentralizuotas sprendimų priėmimas - Inkrementinis ir adaptyvus planavimas - Įvairovė ir eksperimentavimas
Nors kontrolė gali atrodyti patraukli, ypač didelėse ar kritinėse sistemose, pernelyg didelis fokusavimasis į kontrolę gali turėti neigiamų pasekmių:
1. Rigidiškumas
Pernelyg kontroliuojamos sistemos tampa rigidiškos – jos sunkiai prisitaiko prie besikeičiančių reikalavimų ar aplinkybių. Jos gali veikti gerai stabilioje aplinkoje, bet jos sunkiai tvarkosi su netikėtumais ar pokyčiais.
2. Inovacijų slopinimas
Pernelyg kontroliuojamos sistemos slopina inovacijas. Jos neleidžia eksperimentuoti, bandyti naujus metodus ar technologijas, ieškoti geresnių sprendimų.
3. Motyvacijos mažinimas
Pernelyg kontroliuojamos sistemos mažina komandos motyvaciją. Žmonės jaučiasi apriboti, jų kūrybiškumas ir iniciatyva nėra vertinami, jie tampa pasyviais vykdytojais, o ne aktyviais kūrėjais.
4. Kompleksiškumo didinimas
Paradoksaliai, pernelyg didelis fokusavimasis į kontrolę gali padidinti kompleksiškumą. Kontrolės mechanizmai patys tampa sudėtingais, reikalaujančiais palaikymo ir valdymo, ir gali pridėti daugiau kompleksiškumo nei jie padeda suvaldyti.
Erdvė pokyčiui, priešingai, sukuria sąlygas sistemai evoliucionuoti, prisitaikyti ir tobulėti:
1. Adaptyvumas
Sistemos su erdve pokyčiui gali lengviau prisitaikyti prie besikeičiančių reikalavimų ar aplinkybių. Jos gali evoliucionuoti kartu su verslu, technologijomis ir komanda.
2. Inovacijos
Sistemos su erdve pokyčiui skatina inovacijas. Jos leidžia eksperimentuoti, bandyti naujus metodus ar technologijas, ieškoti geresnių sprendimų.
3. Motyvacija
Sistemos su erdve pokyčiui didina komandos motyvaciją. Žmonės jaučiasi įgalinti, jų kūrybiškumas ir iniciatyva yra vertinami, jie tampa aktyviais kūrėjais, o ne pasyviais vykdytojais.
4. Kompleksiškumo valdymas
Sistemos su erdve pokyčiui gali geriau valdyti kompleksiškumą. Jos leidžia kompleksiškumui natūraliai išsiskirstyti ir evoliucionuoti, vietoj to, kad bandytų jį kontroliuoti centralizuotai.
Tai nereiškia, kad kontrolė yra nereikalinga – tam tikras kontrolės lygis yra būtinas bet kokioje sistemoje. Tačiau gera architektūra randa balansą tarp kontrolės ir erdvės pokyčiui, fokusuojantis į esminius principus ir ribas, bet paliekant erdvę eksperimentavimui ir evoliucijai.
Bloga architektūra gina savo formą. Gera – padeda pasauliui pasikeisti.
Tiltas ar sodas?
Tilto architektūra
Kai galvoji apie architektūrą – klausk: ar tai tiltas, ar sodas?
Tilto architektūra reiškia tikslumą, inžineriją, statiką. Viskas apskaičiuota. Bet kai pasikeičia upės vaga – tiltas nebetinka. Jį tenka griauti.
Tilto architektūra yra preciziškai suprojektuota, kad atlaikytų specifines apkrovas ir sąlygas. Ji yra optimizuota konkrečiam tikslui ir kontekstui. Tiltas yra statiškas – jis negali prisitaikyti prie besikeičiančių sąlygų ar reikalavimų.
Tilto architektūros požymiai:
1. Preciziškas projektavimas
Tilto architektūra reikalauja detalaus ir preciziškai projektavimo. Kiekvienas komponentas, kiekviena jungtis yra kruopščiai apskaičiuota ir suprojektuota.
2. Optimizacija konkrečiam tikslui
Tilto architektūra yra optimizuota konkrečiam tikslui ir kontekstui. Ji gali būti labai efektyvi tame kontekste, bet ji nėra lanksti ar universali.
3. Statinis pobūdis
Tilto architektūra yra statiška – ji negali lengvai prisitaikyti prie besikeičiančių sąlygų ar reikalavimų. Kai kontekstas keičiasi, tiltas gali tapti netinkamu ar net pavojingu.
4. Centralizuotas valdymas
Tilto architektūra dažnai reikalauja centralizuoto valdymo. Sprendimai priimami centralizuotai, remiantis globaliu sistemos supratimu.
5. Vienas teisingas sprendimas
Tilto architektūroje dažnai ieškoma vieno “teisingo” sprendimo. Alternatyvos yra vertinamos pagal tai, kiek jos artimos šiam “teisingam” sprendimui.
Tilto architektūra gali būti tinkama tam tikrose situacijose, ypač kai reikalavimai yra stabilūs, kontekstas yra gerai suprantamas, o optimizacija yra kritiškai svarbi. Tačiau ji gali būti problemiška dinamiškose, neapibrėžtose ar greitai besikeičiančiose situacijose.
Sodo architektūra
Sodo architektūra reiškia gyvumą, erdvę, sluoksnius. Ji leidžia savaiminiam augimui – net kai ne viską gali numatyti. Kiekvienas plugin’as – tai naujas augalas, kuris įsikomponuoja į ekosistemą, o ne ją naikina.
Sodo architektūra yra organiškai auganti, prisitaikanti prie besikeičiančių sąlygų ir reikalavimų. Ji nėra preciziškai suprojektuota, bet evoliucionuoja laikui bėgant, reaguodama į aplinką ir poreikius.
Sodo architektūros požymiai:
1. Organiškas augimas
Sodo architektūra auga organiškai, reaguodama į aplinką ir poreikius. Ji nėra visiškai suprojektuota iš anksto, bet evoliucionuoja laikui bėgant.
2. Prisitaikymas prie aplinkos
Sodo architektūra prisitaiko prie besikeičiančių sąlygų ir reikalavimų. Ji gali augti naujomis kryptimis, keisti formą, prisitaikyti prie naujų iššūkių.
3. Įvairovė ir ekosistema
Sodo architektūra skatina įvairovę ir ekosistemą. Skirtingi komponentai gali koegzistuoti ir sąveikauti, sukurdami turtingą ir atsparią sistemą.
4. Decentralizuotas valdymas
Sodo architektūra dažnai remiasi decentralizuotu valdymu. Sprendimai priimami lokaliai, remiantis lokaliu kontekstu ir poreikiais.
5. Daugelis teisingų sprendimų
Sodo architektūroje pripažįstama, kad gali būti daugelis “teisingų” sprendimų, priklausomai nuo konteksto ir poreikių. Alternatyvos vertinamos pagal tai, kaip jos prisideda prie bendros ekosistemos.
Sodo architektūra gali būti tinkama dinamiškose, neapibrėžtose ar greitai besikeičiančiose situacijose. Ji gali būti mažiau optimali trumpuoju laikotarpiu, bet ji yra atsparesnė ir adaptyvesnė ilguoju laikotarpiu.
Kada tinka vienas ar kitas požiūris
Pasirinkimas tarp tilto ir sodo architektūros priklauso nuo konteksto, reikalavimų ir prioritetų. Nėra vieno “teisingo” pasirinkimo – abu požiūriai turi savo privalumų ir trūkumų, ir abu gali būti tinkami skirtingose situacijose.
Tilto architektūra gali būti tinkama, kai:

Reikalavimai yra stabilūs ir gerai suprantami
Kontekstas yra apibrėžtas ir mažai tikėtina, kad jis keisis
Optimizacija yra kritiškai svarbi
Sistema yra kritinė ir klaidos gali turėti rimtų pasekmių
Komanda yra patyrusi ir turi gilių žinių apie domeną

Sodo architektūra gali būti tinkama, kai:

Reikalavimai yra nestabilūs ar neaiškūs
Kontekstas yra dinamiškas ir tikėtina, kad jis keisis
Adaptyvumas yra svarbesnis už optimizaciją
Sistema yra eksperimentinė ar inovatyvi
Komanda yra įvairi ir turi skirtingų perspektyvų

Daugelyje realių situacijų geriausias sprendimas yra hibridas – tam tikri sistemos aspektai gali būti suprojektuoti kaip tiltas, o kiti gali būti leidžiami augti kaip sodas. Pavyzdžiui, pagrindinė infrastruktūra gali būti suprojektuota kaip tiltas, o verslo logika gali būti leidžiama augti kaip sodas.
Statiniai byra, kai keičiasi aplinkybės. Sodai prisitaiko. Tilto klaidos – lemtingos. Sodo klaidos – išraunamos.
Kuo gyvesnė architektūra, tuo mažiau joje reikia heroizmo. Sistema turi priimti pokytį kaip lietų – natūraliai, ne su skėčiu.
Praktiniai architektūros vertinimo kriterijai
Kaip įvertinti, ar architektūra sukuria erdvę pokyčiui? Štai keletas praktinių kriterijų, kurie gali padėti:
1. Pakeitimų lokalizacija
Kiek plačiai paplinta pakeitimų poveikis? Ar pakeitimai vienoje sistemos dalyje reikalauja pakeitimų daugelyje kitų dalių? Ar jie sukelia netikėtų šalutinių efektų?
Gera architektūra lokalizuoja pakeitimus – jie lieka izoliuoti konkrečioje sistemos dalyje ir nesukelia netikėtų pasekmių kitose dalyse.
2. Mokymosi kreivė
Kiek laiko reikia naujam komandos nariui, kad pradėtų efektyviai dirbti su sistema? Ar jis gali pradėti nuo mažos sistemos dalies, ar turi suprasti visą sistemą?
Gera architektūra turi švelnią mokymosi kreivę – nauji komandos nariai gali pradėti nuo mažos sistemos dalies ir palaipsniui plėsti savo supratimą.
3. Testavimo paprastumas
Kiek lengva testuoti sistemą? Ar galima testuoti atskiras sistemos dalis nepriklausomai? Ar testai yra stabilūs ir patikimi?
Gera architektūra palengvina testavimą – atskiros sistemos dalys gali būti testuojamos nepriklausomai, testai yra stabilūs ir patikimi.
4. Naujų funkcijų pridėjimo laikas
Kiek laiko užtrunka pridėti naują funkciją? Ar šis laikas auga kartu su sistemos dydžiu ir amžiumi?
Gera architektūra leidžia greitai pridėti naujas funkcijas, nepriklausomai nuo sistemos dydžio ar amžiaus.
5. Technologijų keitimo paprastumas
Kiek lengva pakeisti naudojamas technologijas? Ar galima pakeisti vieną technologiją neliečiant kitų sistemos dalių?
Gera architektūra leidžia lengvai keisti technologijas – jos yra izoliuotos ir gali būti keičiamos nepriklausomai viena nuo kitos.
6. Skalės efektas
Kaip keičiasi produktyvumas, kai sistema auga? Ar jis mažėja, išlieka pastovus, ar didėja?
Gera architektūra sukuria teigiamą skalės efektą – produktyvumas didėja, kai sistema auga, nes komanda gali pakartotinai naudoti komponentus, šablonus ir žinias.
7. Techninės skolos augimas
Kaip greitai auga techninė skola? Ar ji kaupiasi eksponentiškai, ar yra valdoma ir stabilizuojama?
Gera architektūra leidžia valdyti techninę skolą – ji neauga nekontroliuojamai, bet yra stabilizuojama ir mažinama.
8. Komandos savijauta
Kaip komanda jaučiasi dirbdama su sistema? Ar ji jaučia pasitikėjimą ir kontrolę, ar baimę ir frustraciją?
Gera architektūra kuria pasitikėjimą ir kontrolės jausmą – komanda jaučiasi įgalinta, o ne apribota.
9. Sistemos evoliucija
Kaip sistema evoliucionuoja laikui bėgant? Ar ji tampa vis labiau koherentiška ir nuosekli, ar vis labiau fragmentuota ir chaotiška?
Gera architektūra leidžia sistemai evoliucionuoti pozityvia kryptimi – ji tampa vis labiau koherentiška ir nuosekli, o ne fragmentuota ir chaotiška.
10. Verslo vertė
Kiek efektyviai sistema kuria verslo vertę? Ar ji leidžia verslui greitai reaguoti į galimybes ir iššūkius?
Gera architektūra padeda kurti verslo vertę – ji leidžia verslui greitai reaguoti į galimybes ir iššūkius, eksperimentuoti ir inovuoti.
Šie kriterijai nėra absoliutūs ar nepriklausomi – jie veikia kartu ir turi būti vertinami kontekste. Tačiau jie gali padėti identifikuoti architektūros stiprybes ir silpnybes, ir nukreipti tobulinimo pastangas.
Architektūros evoliucijos principai
Architektūra nėra statiška – ji evoliucionuoja kartu su sistema, komanda ir verslu. Štai keletas principų, kurie gali padėti valdyti šią evoliuciją:
1. Inkrementinis pokytis
Architektūra turėtų evoliucionuoti inkrementiškai, o ne revoliucingai. Dideli, vienkartiniai pokyčiai yra rizikingi ir gali sukelti didelių sutrikimų. Inkrementiniai pokyčiai leidžia palaipsniui tobulinti architektūrą, mokytis iš patirties ir adaptuotis prie besikeičiančių reikalavimų.
2. Nuolatinis refaktoringas
Refaktoringas turėtų būti nuolatinis procesas, o ne vienkartinis projektas. Kiekvienas pakeitimas yra galimybė pagerinti architektūrą, ir maži, nuolatiniai pagerinimai gali turėti didelį kumuliatyvinį poveikį.
3. Evoliucinė architektūra
Architektūra turėtų būti suprojektuota taip, kad galėtų evoliucionuoti. Ji turėtų turėti mechanizmus, leidžiančius ją keisti ir plėsti, nesukeliant didelių sutrikimų. Tai gali būti pasiekta per moduliškumą, abstrakcijas, aiškias sąsajas ir kitus principus.
4. Eksperimentavimas ir mokymasis
Architektūra turėtų skatinti eksperimentavimą ir mokymąsi. Eksperimentai leidžia išbandyti naujas idėjas ir metodus, o mokymasis iš šių eksperimentų leidžia tobulinti architektūrą.
5. Balansas tarp stabilumo ir pokyčio
Architektūra turėtų rasti balansą tarp stabilumo ir pokyčio. Tam tikri architektūros aspektai turėtų būti stabilūs, suteikiant tvirtą pagrindą, o kiti turėtų būti lankstūs, leidžiant prisitaikyti prie besikeičiančių reikalavimų.
6. Konteksto suvokimas
Architektūros evoliucija turėtų būti pagrįsta konteksto supratimu. Kontekstas apima verslo tikslus, technologines tendencijas, komandos įgūdžius ir kitus faktorius, kurie gali turėti įtakos architektūrai.
7. Bendradarbiavimas ir komunikacija
Architektūros evoliucija turėtų būti bendradarbiavimo procesas, įtraukiantis visus suinteresuotus asmenis. Komunikacija yra esminė, užtikrinant, kad visi supranta architektūros principus, sprendimus ir jų priežastis.
8. Techninės skolos valdymas
Techninė skola turėtų būti aktyviai valdoma. Ji neturėtų būti ignoruojama ar leidžiama nekontroliuojamai augti. Vietoj to, ji turėtų būti identifikuojama, prioritizuojama ir palaipsniui mažinama.
9. Architektūrinių sprendimų dokumentavimas
Architektūriniai sprendimai ir jų priežastys turėtų būti dokumentuojami. Tai padeda perduoti žinias, užtikrinti nuoseklumą ir palengvinti būsimus sprendimus.
10. Nuolatinis vertinimas ir tobulinimas
Architektūra turėtų būti nuolat vertinama ir tobulinama. Reguliarios peržiūros, retrospektyvos ir metrikos gali padėti identifikuoti problemas ir galimybes tobulinti.
Šie principai nėra taisyklės, kurias reikia aklai sekti – jie yra gairės, kurios gali padėti valdyti architektūros evoliuciją. Kiekviena situacija yra unikali ir reikalauja specifinio požiūrio, bet šie principai gali padėti nukreipti šį požiūrį tinkama kryptimi.
Architektūros evoliucija yra nuolatinis procesas, reikalaujantis dėmesio, pastangų ir disciplinos. Tačiau šios pastangos atsiperka, nes jos leidžia sukurti ir palaikyti architektūrą, kuri sukuria erdvę pokyčiui – galimybę sistemai evoliucionuoti, prisitaikyti ir tobulėti kartu su verslu, technologijomis ir komanda.


---

