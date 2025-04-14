---
sidebar_position: 6
---

# 5. Kompleksiškumo anatomija

Kompleksiškumo anatomija

5 skyrius: Kompleksiškumo anatomija
Sudėtingumas vs. kompleksiškumas
Kompleksiškumas ≠ kiek turi sistemų. Kompleksiškumas = kiek sunku jų modelį išlaikyti galvoje.
10 sistemų su aiškiais API ir srautais – sudėtinga, bet ne kompleksiška. 1 sistema be testų, su magija – kompleksiška, nes jos niekas nevaldo.
Sudėtingumas ir kompleksiškumas dažnai painiojami, tačiau tai yra du skirtingi konceptai, kuriuos svarbu atskirti norint efektyviai kurti ir valdyti sistemas.
Sudėtingumas (Complexity) yra objektyvus matas, nusakantis sistemos dydį, komponentų skaičių, funkcijų įvairovę. Sudėtinga sistema turi daug dalių, daug funkcijų, daug sąveikos taškų. Sudėtingumas yra kiekybinis – jį galima išmatuoti ir palyginti.
Kompleksiškumas (Complicatedness) yra subjektyvus matas, nusakantis, kiek sunku sistemą suprasti, prognozuoti jos elgseną, išlaikyti jos modelį galvoje. Kompleksiškumas yra kokybinis – jis priklauso nuo sistemos aiškumo, nuoseklumo, nuspėjamumo.
Sudėtinga sistema nebūtinai yra kompleksiška. Pavyzdžiui, žmogaus kūnas yra nepaprastai sudėtinga sistema su milijardais ląstelių ir tūkstančiais biocheminių procesų, tačiau jo veikimas yra nuoseklus ir nuspėjamas (bent jau makro lygmenyje). Medicina gali būti sudėtinga, bet ji nėra chaotiška.
Kompleksiška sistema, priešingai, gali būti palyginti nedidelė, bet sunkiai suprantama ir nenuspėjama. Pavyzdžiui, maža programa be dokumentacijos, su neaiškiais kintamųjų pavadinimais ir paslėptomis priklausomybėmis gali būti labai kompleksiška, nors jos kodas užima tik kelis šimtus eilučių.
Esminis skirtumas tarp sudėtingumo ir kompleksiškumo yra tai, kad sudėtingumas yra neišvengiamas – jis kyla iš problemos prigimties ir reikalavimų. Kompleksiškumas, priešingai, dažnai yra išvengiamas – jis kyla iš blogo dizaino, neaiškios struktūros, nepakankamos dokumentacijos.
Geras architektas siekia ne sumažinti sudėtingumą (kas dažnai neįmanoma), bet suvaldyti kompleksiškumą – padaryti sistemą suprantamą ir nuspėjamą, nepaisant jos sudėtingumo.
Kompleksiškumo šaltiniai
Sudėtingumas yra kiekis. Kompleksiškumas – tai neaiškumas. Kiek reikia nuojautos, sėkmės ar tylos susikaupimo, kad sistema nesugriūtų.
Kompleksiškumas sistemose kyla iš įvairių šaltinių. Supratimas, iš kur atsiranda kompleksiškumas, yra pirmasis žingsnis jį suvaldant. Štai pagrindiniai kompleksiškumo šaltiniai:
1. Neaiškios atsakomybės
Kai nėra aišku, kuri sistemos dalis už ką atsakinga, tampa sunku suprasti, kaip sistema veikia ir kaip ją keisti. Tai veda prie situacijos, kai pakeitimai vienoje vietoje turi netikėtų pasekmių kitose vietose.
2. Glaudus susiejimas (Tight coupling)
Kai sistemos komponentai yra glaudžiai susiję, pakeitimai vienoje vietoje reikalauja pakeitimų daugelyje kitų vietų. Tai ne tik padidina darbo kiekį, bet ir padidina klaidų tikimybę.
3. Paslėptos priklausomybės
Kai priklausomybės tarp sistemos dalių nėra aiškiai matomos, tampa sunku suprasti, kaip sistema veikia ir kaip ją keisti. Paslėptos priklausomybės dažnai pasireiškia kaip “magiški” efektai, kai pakeitimai vienoje vietoje turi netikėtų pasekmių kitose vietose.
4. Neaiški būsena
Kai sistemos būsena yra neaiški ar sunkiai stebima, tampa sunku suprasti, kaip sistema veikia ir kaip ją keisti. Tai ypač aktualu sistemose su daug globalios būsenos ar šalutinių efektų.
5. Nekonsekventiškumas
Kai sistema nėra nuosekli – panašios problemos sprendžiamos skirtingais būdais, skirtingos problemos sprendžiamos panašiais būdais – tampa sunku suprasti, kaip sistema veikia ir kaip ją keisti.
6. Istorinės priežastys
Kai sistema evoliucionuoja laikui bėgant, ji dažnai įgauna “istorinį bagažą” – sprendimus, kurie buvo priimti dėl aplinkybių, kurios nebegalioja, bet kurie išlieka sistemoje. Tai veda prie situacijos, kai sistema veikia tam tikru būdu ne dėl to, kad tai yra geriausias būdas, bet dėl istorinių priežasčių.
7. Žinių trūkumas
Kai žinios apie sistemą yra sutelktos tik kelių žmonių galvose, sistema tampa kompleksiška visiems kitiems. Tai ypač aktualu, kai nėra dokumentacijos ar kai dokumentacija yra pasenusi.
8. Techninė skola
Kai sistema yra kuriama greitai, dažnai priimami kompromisai, kurie vėliau tampa technine skola. Jei ši skola nėra grąžinama, ji kaupiasi ir sistema tampa vis kompleksiškesnė.
9. Netinkamas abstrakcijos lygis
Kai abstrakcijos lygis yra netinkamas – per aukštas ar per žemas – tampa sunku suprasti, kaip sistema veikia ir kaip ją keisti. Per aukštas abstrakcijos lygis gali paslėpti svarbias detales, o per žemas gali paskandinti detalėse.
10. Neaiškūs tikslai
Kai nėra aišku, kokius tikslus sistema siekia įgyvendinti, tampa sunku suprasti, kaip ji turėtų veikti ir kaip ją keisti. Tai veda prie situacijos, kai sistema evoliucionuoja be aiškios krypties.
Šie šaltiniai dažnai veikia kartu, sustiprinami vienas kito. Pavyzdžiui, neaiškios atsakomybės gali vesti prie glaudaus susiejimo, o glaudus susiejimas gali vesti prie paslėptų priklausomybių.
Geras architektas siekia identifikuoti ir suvaldyti šiuos kompleksiškumo šaltinius, kuriant sistemas, kurios yra aiškios, nuoseklios ir nuspėjamos.
Kompleksiškumo požymiai sistemoje
Jei niekas nenori liesti – tai kompleksiškumas. Jei reikia maldos prieš deploy – tai kompleksiškumas. Jei klaida „išsprendžiama restartu" – tai šventa paslaptis, o ne sistema.
Kompleksiškumas sistemoje pasireiškia įvairiais požymiais, kurie gali būti pastebimi tiek techninėje, tiek organizacinėje plotmėje. Štai pagrindiniai kompleksiškumo požymiai:
1. Baimė keisti
Kai programuotojai bijo keisti sistemą, tai yra aiškus kompleksiškumo požymis. Baimė kyla iš nežinojimo, kokias pasekmes gali turėti pakeitimai. Jei komanda vengia liesti tam tikras sistemos dalis, tai rodo, kad šios dalys yra per kompleksiškos.
2. “Magija”
Kai sistema veikia, bet niekas tiksliai nežino kaip ar kodėl, tai yra kompleksiškumo požymis. “Magiški” efektai, kai pakeitimai vienoje vietoje turi netikėtų pasekmių kitose vietose, rodo paslėptas priklausomybes ir neaiškią struktūrą.
3. Ritualai
Kai sistemos palaikymas reikalauja specifinių ritualų – “visada daryk X prieš Y”, “niekada nedaryk Z” – tai rodo, kad sistema yra kompleksiška. Ritualai dažnai yra būdas apeiti sistemos problemas, kurios nėra tinkamai išspręstos.
4. Priklausomybė nuo “ekspertų”
Kai tik keli “ekspertai” gali efektyviai dirbti su sistema, tai rodo, kad sistema yra kompleksiška. Priklausomybė nuo konkrečių žmonių žinių ir patirties rodo, kad sistema nėra pakankamai aiški ir dokumentuota.
5. Ilgas įsitraukimo laikas
Kai naujiems komandos nariams reikia daug laiko, kad pradėtų efektyviai dirbti su sistema, tai rodo, kad sistema yra kompleksiška. Ilgas įsitraukimo laikas rodo, kad sistema nėra intuityviai suprantama.
6. Netikėtos klaidos
Kai sistema dažnai patiria netikėtas klaidas, kurių priežastys nėra aiškios, tai rodo, kad sistema yra kompleksiška. Netikėtos klaidos rodo, kad sistema nėra nuspėjama.
7. “Restartas padeda”
Kai problemos “išsisprendžia” perkraunant sistemą, tai rodo, kad sistema yra kompleksiška. Jei restartas padeda, tai reiškia, kad sistema turi neaiškią būseną, kuri gali tapti nesuderinama.
8. Sunkumai testuojant
Kai sistemą sunku testuoti, tai rodo, kad ji yra kompleksiška. Sunkumai testuojant dažnai kyla iš glaudaus susiejimo, paslėptų priklausomybių ir neaiškios būsenos.
9. Dokumentacijos trūkumas ar perteklius
Kai sistema neturi dokumentacijos arba turi pernelyg daug dokumentacijos, tai gali būti kompleksiškumo požymis. Dokumentacijos trūkumas rodo, kad sistema nėra pakankamai aiški, o perteklius gali rodyti, kad sistema yra per sudėtinga, kad būtų suprantama be išsamios dokumentacijos.
10. Lėtas vystymasis
Kai sistemos vystymasis tampa vis lėtesnis, nepaisant to, kad komanda išlieka ta pati ar net didėja, tai rodo, kad sistema yra kompleksiška. Lėtas vystymasis rodo, kad pakeitimai reikalauja vis daugiau pastangų dėl augančio kompleksiškumo.
Šie požymiai dažnai veikia kartu, sustiprinami vienas kito. Pavyzdžiui, baimė keisti gali vesti prie ritualų, o ritualai gali vesti prie priklausomybės nuo “ekspertų”.
Geras architektas siekia identifikuoti šiuos požymius ankstyvoje stadijoje ir imtis veiksmų kompleksiškumui suvaldyti, prieš jam tampant nekontroliuojamu.
Kaip matuoti kompleksiškumą
Kompleksiškumas yra subjektyvus matas, tačiau tai nereiškia, kad jo negalima matuoti. Yra įvairių būdų, kaip galima įvertinti sistemos kompleksiškumą, tiek kiekybiškai, tiek kokybiškai.
Kiekybiniai matai:
1. Ciklomatinis kompleksiškumas
Ciklomatinis kompleksiškumas matuoja, kiek skirtingų kelių gali būti pereita per kodą. Aukštas ciklomatinis kompleksiškumas rodo, kad kodas turi daug sąlygų ir šakų, kas gali padaryti jį sunkiai suprantamą.
2. Priklausomybių skaičius
Priklausomybių skaičius matuoja, kiek kitų komponentų priklauso nuo konkretaus komponento ir kiek kitų komponentų konkretus komponentas priklauso. Aukštas priklausomybių skaičius rodo glaudų susiejimą, kas gali padaryti sistemą sunkiai suprantamą ir keičiamą.
3. Kodo dubliavimas
Kodo dubliavimas matuoja, kiek kodo yra dubliuojama skirtingose sistemos vietose. Aukštas kodo dubliavimas rodo, kad sistema nėra pakankamai abstrahuota, kas gali padaryti ją sunkiai palaikomą.
4. Kodo eilučių skaičius
Nors tai yra labai paprastas matas, kodo eilučių skaičius gali būti naudingas indikatorius. Dideli failai ar funkcijos dažnai yra sunkiau suprantami nei maži.
5. Pakeitimų dažnis
Pakeitimų dažnis matuoja, kaip dažnai keičiasi konkretus komponentas. Komponentai, kurie keičiasi dažnai, gali būti kompleksiški arba turėti neaiškias atsakomybes.
Kokybiniai matai:
1. Baimės koeficientas
Baimės koeficientas matuoja, kiek programuotojai bijo keisti tam tikras sistemos dalis. Tai gali būti įvertinta per apklausas ar pokalbius su komanda.
2. Įsitraukimo laikas
Įsitraukimo laikas matuoja, kiek laiko reikia naujam komandos nariui, kad pradėtų efektyviai dirbti su sistema. Ilgas įsitraukimo laikas gali rodyti aukštą kompleksiškumą.
3. “Bus fix’inta vėliau” komentarų skaičius
Komentarai, kurie žymi problemas, kurios bus išspręstos vėliau, gali būti kompleksiškumo indikatorius. Jie dažnai rodo, kad sistema turi problemas, kurios nėra lengvai išsprendžiamos.
4. Dokumentacijos kokybė
Dokumentacijos kokybė gali būti kompleksiškumo indikatorius. Prasta ar pasenusi dokumentacija gali rodyti, kad sistema yra sunkiai suprantama ir aprašoma.
5. Klaidų skaičius
Klaidų skaičius, ypač netikėtų ar sunkiai paaiškinamų, gali būti kompleksiškumo indikatorius. Aukštas klaidų skaičius gali rodyti, kad sistema yra sunkiai suprantama ir prognozuojama.
Šie matai gali būti naudojami kartu, siekiant gauti išsamesnį vaizdą apie sistemos kompleksiškumą. Svarbu atminti, kad nė vienas matas nėra tobulas, ir jie turėtų būti naudojami kaip indikatoriai, o ne kaip galutinis sprendimas.
Geras architektas naudoja šiuos matus ne tik kompleksiškumui įvertinti, bet ir jo pokyčiams stebėti laikui bėgant. Tai leidžia identifikuoti tendencijas ir imtis veiksmų, kai kompleksiškumas pradeda augti.
Kompleksiškumo valdymo strategijos
Sistemos, kurių niekas neliečia, žūva lėtai. Niekas nenori būti tuo, kuris pirmas ją palietė. Tokie kodai gyvena kaip religiniai artefaktai: ne todėl, kad veikia, o todėl, kad bijom jų prarasti.
Kompleksiškumo valdymas yra vienas svarbiausių architekto uždavinių. Štai keletas strategijų, kurios gali padėti suvaldyti kompleksiškumą:
1. Aiškios atsakomybės
Kiekviena sistemos dalis turėtų turėti aiškią atsakomybę. Tai padeda sumažinti neaiškumą ir padidinti nuspėjamumą. Aiškios atsakomybės taip pat padeda išvengti situacijų, kai pakeitimai vienoje vietoje turi netikėtų pasekmių kitose vietose.
Praktiniai veiksmai: - Apibrėžkite kiekvieno komponento atsakomybę - Užtikrinkite, kad kiekvienas komponentas turi tik vieną priežastį keistis - Dokumentuokite komponentų atsakomybes
2. Laisvas susiejimas (Loose coupling)
Sistemos komponentai turėtų būti kuo mažiau priklausomi vienas nuo kito. Tai leidžia keisti vieną komponentą nedarant įtakos kitiems. Laisvas susiejimas taip pat padeda sumažinti netikėtų šalutinių efektų tikimybę.
Praktiniai veiksmai: - Naudokite aiškiai apibrėžtas sąsajas tarp komponentų - Venkite globalios būsenos - Naudokite priklausomybių injekciją
3. Aukšta kohezija (High cohesion)
Susijusios funkcijos turėtų būti grupuojamos kartu. Tai padeda sumažinti priklausomybes tarp skirtingų sistemos dalių ir padidinti sistemos suprantamumą. Aukšta kohezija taip pat padeda išvengti situacijų, kai pakeitimai reikalauja modifikacijų daugelyje skirtingų vietų.
Praktiniai veiksmai: - Grupuokite susijusias funkcijas į modulius - Užtikrinkite, kad kiekvienas modulis turi aiškų tikslą - Venkite “utility” klasių, kurios atlieka nesusijusias funkcijas
4. Abstrakcijos
Abstrakcijos padeda paslėpti sudėtingumą ir pateikti paprastesnę sąsają. Tai leidžia dirbti su sistema aukštesniame lygmenyje, neįsigilinant į detales. Abstrakcijos taip pat padeda sumažinti priklausomybes tarp skirtingų sistemos dalių.
Praktiniai veiksmai: - Kurkite abstrakcijas, kurios slepia įgyvendinimo detales - Naudokite sąsajas, o ne konkrečias implementacijas - Apibrėžkite aiškias ribas tarp skirtingų abstrakcijos lygių
5. Nuoseklumas
Sistema turėtų būti nuosekli – panašios problemos turėtų būti sprendžiamos panašiais būdais. Tai padeda sumažinti netikėtumų skaičių ir padidinti sistemos suprantamumą. Nuoseklumas taip pat padeda sumažinti mokymosi kreivę naujiems komandos nariams.
Praktiniai veiksmai: - Sukurkite ir laikykitės kodavimo standartų - Naudokite tuos pačius šablonus panašioms problemoms spręsti - Užtikrinkite, kad terminologija yra nuosekli visoje sistemoje
6. Inkrementinis refaktoringas
Kompleksiškumas dažnai auga laikui bėgant, todėl svarbu reguliariai refaktorinti kodą. Inkrementinis refaktoringas leidžia palaipsniui mažinti kompleksiškumą, nesukeliant didelių sutrikimų.
Praktiniai veiksmai: - Įtraukite refaktoringą į kasdienį darbą - Laikykitės “palik kodą švaresnį, nei radai” principo - Naudokite automatizuotus testus, kad užtikrintumėte, jog refaktoringas nepakeitė funkcionalumo
7. Dokumentacija
Gera dokumentacija padeda sumažinti kompleksiškumą, padarydama sistemą labiau suprantamą. Ji taip pat padeda sumažinti priklausomybę nuo “ekspertų” žinių.
Praktiniai veiksmai: - Dokumentuokite sistemos architektūrą ir dizaino sprendimus - Užtikrinkite, kad dokumentacija yra aktuali ir lengvai prieinama - Naudokite “self-documenting” kodą, kur įmanoma
8. Automatizuoti testai
Automatizuoti testai padeda sumažinti baimę keisti sistemą, nes jie greitai identifikuoja, ar pakeitimai sukėlė problemų. Jie taip pat tarnauja kaip gyva dokumentacija, parodanti, kaip sistema turėtų veikti.
Praktiniai veiksmai: - Rašykite testus kartu su kodu - Naudokite testus kaip specifikaciją - Automatizuokite testų vykdymą
9. Moduliarizacija
Sistema turėtų būti suskaidyta į modulius, kurie gali būti suprantami ir keičiami nepriklausomai vienas nuo kito. Tai padeda sumažinti kompleksiškumą, nes leidžia fokusuotis į vieną sistemos dalį vienu metu.
Praktiniai veiksmai: - Skaidykite sistemą į modulius pagal funkcionalumą - Apibrėžkite aiškias sąsajas tarp modulių - Venkite ciklinių priklausomybių tarp modulių
10. Paprastumas
Galiausiai, siekite paprastumo. Paprastos sistemos yra lengviau suprantamos, testuojamos ir keičiamos. Paprastumas turėtų būti siekiamas visais lygmenimis – nuo kodo iki architektūros.
Praktiniai veiksmai: - Venkite per ankstyvos optimizacijos - Rinkitės paprastesnius sprendimus, kai įmanoma - Reguliariai peržiūrėkite sistemą, ieškodami būdų ją supaprastinti
Šios strategijos gali būti naudojamos kartu, siekiant efektyviai valdyti kompleksiškumą. Svarbu atminti, kad kompleksiškumo valdymas yra nuolatinis procesas, o ne vienkartinis veiksmas.
Kada kompleksiškumas yra neišvengiamas
Nors kompleksiškumo valdymas yra svarbus, kai kuriais atvejais kompleksiškumas yra neišvengiamas. Svarbu atpažinti šiuos atvejus ir priimti tinkamus sprendimus.
1. Domeno kompleksiškumas
Kai pats verslo domenas yra kompleksiškas, tam tikras kompleksiškumo lygis sistemoje yra neišvengiamas. Pavyzdžiui, finansų, medicinos ar aviacijos sistemos dažnai turi sudėtingas taisykles ir procesus, kurie negali būti supaprastinti.
Kaip valdyti: - Sukurkite aiškų domeno modelį, kuris atspindi verslo taisykles - Naudokite domenui specifinę kalbą (DSL), kad padarytumėte kodą labiau suprantamą - Bendradarbiaukite su domeno ekspertais, kad užtikrintumėte teisingą supratimą
2. Techninis kompleksiškumas
Kai sistema turi atitikti aukštus techninius reikalavimus, tokius kaip aukštas našumas, saugumas ar patikimumas, tam tikras kompleksiškumo lygis gali būti neišvengiamas.
Kaip valdyti: - Izoliuokite techninį kompleksiškumą specifinėse sistemos dalyse - Dokumentuokite technines detales ir jų priežastis - Naudokite abstrakcijas, kad paslėptumėte techninį kompleksiškumą nuo kitų sistemos dalių
3. Istorinis kompleksiškumas
Kai sistema evoliucionuoja laikui bėgant, ji gali įgyti istorinį kompleksiškumą – sprendimus, kurie buvo priimti dėl aplinkybių, kurios nebegalioja, bet kurie negali būti lengvai pakeisti.
Kaip valdyti: - Dokumentuokite istorines priežastis ir kontekstą - Planuokite laipsnišką refaktoringą, kai įmanoma - Izoliuokite istoriškai kompleksiškas dalis nuo naujų funkcijų
4. Organizacinis kompleksiškumas
Kai sistema yra kuriama ir palaikoma didelės ar geografiškai išsklaidytos komandos, tam tikras kompleksiškumo lygis gali būti neišvengiamas dėl komunikacijos ir koordinavimo iššūkių.
Kaip valdyti: - Sukurkite aiškias komandų atsakomybes ir ribas - Naudokite standartizuotus procesus ir įrankius - Investuokite į komunikaciją ir žinių dalijimąsi
5. Reguliacinis kompleksiškumas
Kai sistema turi atitikti sudėtingus reguliacinius reikalavimus, tam tikras kompleksiškumo lygis gali būti neišvengiamas.
Kaip valdyti: - Izoliuokite reguliacinį kompleksiškumą specifinėse sistemos dalyse - Dokumentuokite reguliacinius reikalavimus ir jų įgyvendinimą - Bendradarbiaukite su teisiniais ir atitikties ekspertais
6. Evoliucinis kompleksiškumas
Kai sistema turi būti suderinama su ankstesnėmis versijomis ar integruotis su egzistuojančiomis sistemomis, tam tikras kompleksiškumo lygis gali būti neišvengiamas.
Kaip valdyti: - Naudokite adapterius ir fasadus, kad izoliuotumėte suderinamumo kodą - Dokumentuokite suderinamumo reikalavimus ir jų įgyvendinimą - Planuokite laipsnišką perėjimą prie naujesnių technologijų
Kai kompleksiškumas yra neišvengiamas, svarbu jį pripažinti ir valdyti, o ne ignoruoti ar bandyti pašalinti bet kokia kaina. Geras architektas supranta, kada kompleksiškumas yra būtinas, ir fokusuojasi į jo valdymą, o ne į jo eliminavimą.
Praktiniai pavyzdžiai kompleksiškumo mažinimui
Kompleksiškumo mažinimas yra praktinis procesas, reikalaujantis konkrečių veiksmų ir sprendimų. Štai keletas praktinių pavyzdžių, kaip galima mažinti kompleksiškumą realiose situacijose:
1. Monolitinės aplikacijos skaidymas į mikroservisus
Monolitinė aplikacija, kuri tapo per didelė ir kompleksiška, gali būti skaidoma į mikroservisus. Kiekvienas mikroservisas turi aiškią atsakomybę ir gali būti vystomas, testuojamas ir diegiamas nepriklausomai.
Praktinis pavyzdys: - Identifikuokite funkcines sritis, kurios gali būti atskirtos - Sukurkite aiškias sąsajas tarp mikroservisų - Palaipsniui perkelkite funkcionalumą iš monolito į mikroservisus - Naudokite API gateway, kad supaprastintumėte klientų sąveiką su mikroservisais
2. Domeno modelio refaktoringas
Kai domeno modelis tapo neaiškus ar neatitinka verslo realijų, jis gali būti refaktorinamas, siekiant geriau atspindėti verslo domeną.
Praktinis pavyzdys: - Bendradarbiaukite su domeno ekspertais, kad suprastumėte verslo realijas - Identifikuokite pagrindinius domeno konceptus ir jų ryšius - Sukurkite naują domeno modelį, kuris geriau atspindi verslo domeną - Palaipsniui perkelkite kodą į naują modelį, išlaikant funkcionalumą
3. Techninės skolos grąžinimas
Kai sistema turi daug techninės skolos, ji gali būti palaipsniui grąžinama, siekiant sumažinti kompleksiškumą.
Praktinis pavyzdys: - Identifikuokite techninės skolos šaltinius - Prioritizuokite techninę skolą pagal jos poveikį ir grąžinimo sudėtingumą - Įtraukite techninės skolos grąžinimą į kasdienį darbą - Naudokite automatizuotus testus, kad užtikrintumėte, jog pakeitimai nepakeitė funkcionalumo
4. Dokumentacijos gerinimas
Kai sistema yra kompleksiška dėl dokumentacijos trūkumo, dokumentacijos gerinimas gali padėti sumažinti kompleksiškumą.
Praktinis pavyzdys: - Sukurkite architektūros dokumentą, kuris aprašo sistemos struktūrą ir komponentus - Dokumentuokite pagrindinius procesus ir srautus - Naudokite diagramas, kad vizualizuotumėte sistemos struktūrą - Reguliariai atnaujinkite dokumentaciją, kad ji išliktų aktuali
5. Testavimo strategijos gerinimas
Kai sistema yra kompleksiška dėl baimės ją keisti, testavimo strategijos gerinimas gali padėti sumažinti šią baimę.
Praktinis pavyzdys: - Sukurkite automatizuotų testų rinkinį, kuris apima pagrindinį funkcionalumą - Įtraukite testavimą į vystymo procesą - Naudokite testus kaip specifikaciją - Automatizuokite testų vykdymą kaip dalį CI/CD proceso
6. Kodo refaktoringas
Kai kodas tapo neaiškus ar sunkiai palaikomas, jis gali būti refaktorinamas, siekiant padaryti jį aiškesnį ir lengviau palaikomą.
Praktinis pavyzdys: - Identifikuokite probleminius kodo fragmentus - Taikykite refaktoringo šablonus, tokius kaip “Extract Method”, “Rename Variable”, “Move Method” - Naudokite automatizuotus testus, kad užtikrintumėte, jog refaktoringas nepakeitė funkcionalumo - Reguliariai peržiūrėkite kodą, ieškodami galimybių jį pagerinti
7. Architektūros peržiūra
Kai sistema tapo kompleksiška dėl architektūrinių sprendimų, architektūros peržiūra gali padėti identifikuoti ir spręsti problemas.
Praktinis pavyzdys: - Organizuokite architektūros peržiūros sesijas su komanda - Identifikuokite architektūrines problemas ir jų priežastis - Sukurkite planą architektūros gerinimui - Įgyvendinkite pakeitimus palaipsniui, išlaikant funkcionalumą
8. Komandos žinių dalijimasis
Kai sistema yra kompleksiška dėl žinių koncentracijos, žinių dalijimasis gali padėti sumažinti šią problemą.
Praktinis pavyzdys: - Organizuokite žinių dalijimosi sesijas - Praktikuokite porinius programavimą - Rotaciją tarp skirtingų sistemos dalių - Kurkite ir palaikykite žinių bazę
Šie praktiniai pavyzdžiai rodo, kad kompleksiškumo mažinimas yra įmanomas ir gali būti įgyvendintas konkrečiais veiksmais. Svarbu atminti, kad kompleksiškumo mažinimas yra nuolatinis procesas, o ne vienkartinis veiksmas, ir jis reikalauja nuolatinio dėmesio ir pastangų.


---

