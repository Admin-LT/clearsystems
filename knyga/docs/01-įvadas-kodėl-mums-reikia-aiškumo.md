---
sidebar_position: 2
---

# 1. Įvadas: Kodėl mums reikia aiškumo

Įvadas: Kodėl mums reikia aiškumo

1 skyrius: Įvadas: Kodėl mums reikia aiškumo
Aiškumo svarba sistemose
Pasaulyje, kuris vis daugiau kalba apie efektyvumą ir MVP, mes pamirštame vieną esminį dalyką: sistemos kokybė matuojama ne tik tuo, ar ji veikia dabar, bet ir tuo, ar ji bus suprantama rytoj. Ši knyga skirta inžinieriams, architektams ir visiems, kas kuria ne tik kodą, bet ir sistemas, kurios turi išlikti. Kai kalbame apie sistemas, mums trūksta ne įrankių ar resursų – mums trūksta aiškumo. Aiškumo, kuris leidžia struktūroms išgyventi ilgiau nei jų kūrėjai.
Šiuolaikinėje programinės įrangos kūrimo kultūroje dominuoja greitis ir funkcionalumas. Mes skubame pristatyti naujas funkcijas, integruoti naujausias technologijas, optimizuoti veikimą. Tačiau dažnai pamirštame, kad sistema, kuri veikia šiandien, nebūtinai bus suprantama ir palaikoma rytoj. Kai programuotojas palieka projektą, ar jo kodas lieka suprantamas? Kai verslo reikalavimai keičiasi, ar sistema gali prisitaikyti be didžiulių pertvarkymų?
Aiškumas sistemose nėra prabanga ar papildomas privalumas – tai būtina sąlyga ilgalaikei sėkmei. Aiški sistema:

Lengviau perduodama naujiems komandos nariams
Greičiau adaptuojama prie besikeičiančių reikalavimų
Patikimiau veikia net neįprastomis sąlygomis
Mažiau priklauso nuo konkrečių žmonių žinių ir patirties
Ilgiau išlieka aktuali ir naudinga

Aiškumas nėra tik gražus kodas ar išsami dokumentacija. Tai gilesnė savybė, kuri persmelkia visą sistemos struktūrą ir formą. Tai principas, kuris leidžia sistemai būti suprantamai ne tik jos kūrėjams, bet ir tiems, kas ją naudos, plėtos ir palaikys ateityje.
Aiškumas vs. sumanumas
Aiškumas yra aiškiau už sumanumą. Tai ne šūkis — tai darbo metodas. Ši knyga gimė iš pokalbių su žmonėmis, kurie stato pasaulį: inžinieriais, sistemų architektais, projektų kūrėjais. Ne tais, kurie ieško efektyviausio būdo uždirbti, bet tais, kurie ieško aiškumo, struktūros, prasmės. Kūrėjais, kurie supranta, kad ne viskas gyvenime yra MVP.
Programavimo pasaulyje dažnai vertiname sumanumą – gebėjimą rasti elegantišką, netikėtą ar itin efektyvų sprendimą. Tačiau sumanumas dažnai ateina su kaina – sudėtingumu, kuris suprantamas tik sprendimo autoriui. Sumanus sprendimas gali būti trumpesnis, greitesnis ar elegantiškesnis, bet jei jis nėra aiškus, ilgainiui jis tampa našta, o ne privalumu.
Aiškumas, priešingai, prioritetą teikia suprantamumui, net jei tai reiškia paprastesnį ar mažiau “elegantišką” sprendimą. Aiškus kodas gali būti ilgesnis ar šiek tiek lėtesnis, bet jis yra suprantamas, palaikomas ir keičiamas be baimės.
Kai renkamės tarp aiškumo ir sumanumo, verta prisiminti:

Kodas skaitomas dažniau nei rašomas
Sistemos palaikomos ilgiau nei kuriamos
Komandos nariai keičiasi, o kodas išlieka
Kontekstas, kuris akivaizdus dabar, gali būti pamirštas po metų

Aiškumas nėra priešingas efektyvumui ar elegancijai. Geriausi sprendimai yra ir aiškūs, ir efektyvūs. Tačiau kai tenka rinktis, aiškumas dažniausiai yra vertingesnis ilgalaikėje perspektyvoje.
Kas yra struktūra?
Kai kalbame apie struktūrą, kalbame apie gilesnį sistemos organizavimo principą – ne tik apie tai, kaip kodas išdėstytas failuose ar kaip išskirtos funkcijos. Struktūra yra tai, kas leidžia sistemai būti suprantamai ir keičiamai net tiems, kas neprisidėjo prie jos kūrimo. Tai yra komunikacija, užkoduota pačiame architektūriniame sprendime.
Struktūra sistemoje yra tarsi pastato karkasas – ji ne tik laiko sistemą, bet ir apibrėžia, kaip jos dalys sąveikauja tarpusavyje. Gera struktūra leidžia sistemai augti, keistis ir prisitaikyti, išlaikant savo vientisumą ir suprantamumą.
Geros struktūros požymiai
Gera struktūra:

Aiškiai išreiškia sistemos dalyvaujančių dalių ryšius - Žiūrint į sistemą, lengva suprasti, kaip jos komponentai sąveikauja, kokie yra jų priklausomybės ryšiai ir komunikacijos kanalai.
Sukuria ribas, kurios apsaugo nuo chaotiškų pakeitimų - Gerai struktūruotoje sistemoje pakeitimai vienoje dalyje neturi netikėtų pasekmių kitose dalyse. Ribos tarp komponentų yra aiškios ir gerai apibrėžtos.
Leidžia skirtingoms sistemos dalims keistis nepriklausomai viena nuo kitos - Kai reikia atnaujinti ar pakeisti vieną sistemos dalį, nereikia keisti visos sistemos. Komponentai yra pakankamai autonomiški.
Perduoda kūrėjų ketinimus ir mąstymo modelį be tiesioginės dokumentacijos - Gerai struktūruota sistema “kalba pati už save”. Net be išsamios dokumentacijos, jos organizavimo principai yra suprantami ir intuityvūs.

Gera struktūra taip pat pasižymi:

Nuoseklumu - Panašūs dalykai sprendžiami panašiais būdais visoje sistemoje
Moduliškumu - Sistema suskaidyta į aiškius, savarankiškus modulius su apibrėžtomis sąsajomis
Abstrakcijos lygiais - Skirtingi sistemos aspektai matomi skirtinguose abstrakcijos lygiuose, nemaišant detalių su aukšto lygio koncepcijomis
Prognozuojamumu - Nauji pakeitimai gali būti įgyvendinti nuosekliai, sekant esamus struktūros principus

Blogos struktūros požymiai
Bloga struktūra slepiasi už efektyvumo ir pragmatiškumo kaukės – “kol veikia, viskas gerai”. Ji gali būti greita trumpuoju laikotarpiu, bet ilgainiui tampa technine skola, kurią reikia išpirkti ne tik pinigais, bet ir žmonių savijauta bei sistemos ilgaamžiškumu.
Blogos struktūros požymiai:

Neaiškios atsakomybės - Sunku suprasti, kuri sistemos dalis už ką atsakinga
Glaudus susiejimas - Pakeitimai vienoje vietoje reikalauja pakeitimų daugelyje kitų vietų
Pasikartojantis kodas - Ta pati logika kartojasi skirtingose sistemos vietose
Neaiškios priklausomybės - Sunku nustatyti, nuo ko priklauso konkretus komponentas
“Magija” - Sistema veikia, bet niekas tiksliai nežino kaip ar kodėl
Baimė keisti - Programuotojai vengia liesti tam tikras sistemos dalis, bijodami netikėtų pasekmių

Bloga struktūra dažnai atsiranda ne dėl nekompetencijos, o dėl laiko spaudimo, trumpalaikio mąstymo ar pernelyg didelio dėmesio funkcionalumui, ignoruojant ilgalaikį palaikomumą.
Kas yra forma?
Forma – tai struktūros esminis principas, jos pamatinis šablonas. Jei struktūra yra mūsų sistemos “architektūra”, tai forma yra jos “stilius” – tai, kas suteikia sistemai vientisumą ir atpažįstamą tapatybę.
Struktūra apima konkrečius sistemos dalių išdėstymo ir sąveikos mechaninius aspektus, o forma nurodo gilesnį principą – kodėl struktūra yra tokia, o ne kitokia. Forma yra abstraktesnė nei struktūra.
Forma yra tarsi sistemos DNR – fundamentalus principas, kuris persmelkia visą sistemą ir apibrėžia jos esmines savybes. Tai ne tik tai, kaip sistema atrodo ar veikia, bet ir kodėl ji tokia yra – kokie principai ir vertybės įkūnyti jos dizaine.
Formos ir struktūros santykis
Santykis tarp formos ir struktūros yra subtilus, bet esminis:

Struktūra yra konkretus sistemos organizavimas – klasės, moduliai, sąsajos, duomenų srautai
Forma yra gilesnė idėja, kuri vienija ir formuoja šią struktūrą – principai, paradigmos, architektūriniai stiliai

Forma yra abstraktesnė nei struktūra, bet ji yra ne mažiau reali ar svarbi. Forma suteikia sistemai koherentiškumą ir nuoseklumą, kuris peržengia atskirus struktūrinius sprendimus.
Gerai išreikšta forma
Gerai išreikšta forma:

Atskleidžia sistemos prigimtį ir tikslą be papildomų paaiškinimų - Žvelgiant į sistemą, intuityviai jaučiama, kam ji skirta ir kaip ji veikia.
Padaro sistemą atpažįstamą ir nuspėjamą jos naudotojams - Susipažinus su viena sistemos dalimi, kitos dalys tampa lengviau suprantamos, nes jos seka tą pačią formą.
Leidžia intuityviai suprasti, kas yra daugeliu atvejų tinkama ir kas netinkama - Forma sukuria natūralų jausmą, kas “tinka” sistemoje, o kas atrodo svetima ar prieštaraujanti jos principams.
Išlaiko savo tapatybę net kai keičiasi konkretūs įgyvendinimo detalės - Net kai sistema evoliucionuoja ir keičiasi, jos esminė forma išlieka atpažįstama.

Formos pavyzdžiai
Unix failų sistema yra puikus formos pavyzdys. Jos hierarchinė struktūra su katalogais ir failais, vientisos srauto sąsajos principu (“viskas yra failas”), ir paprastais tekstiniais konfigūracijos failais suteikia aiškią formą, kuri:

Leidžia net naujam sistemos naudotojui intuityviai suprasti jos veikimo principus
Suteikia universalų būdą pasiekti ir manipuliuoti duomenimis
Išlaikė savo tapatybę per dešimtmečius, nepaisant daugybės techninių pokyčių

Kiti formos pavyzdžiai:

REST API forma, kur resursai yra pasiekiami per URL, o veiksmai atliekami per HTTP metodus
Funkcinės programavimo forma, kur funkcijos yra pirmos klasės objektai, o būsenos mutacijos vengiamos
Mikroservisų architektūros forma, kur sistema suskaidyta į mažus, autonomiškus servisus su aiškiomis atsakomybėmis

Struktūros ir formos santykio pavyzdžiai
Duomenų bazės atveju: - Struktūra: Konkreti lentelių schema, indeksai, užklausų optimizacijos - Forma: Reliacinė duomenų bazė kaip principas, normalizacijos konceptas
Programavimo kalboje: - Struktūra: Konkretūs klasių ryšiai, funkcijų apibrėžimai, modulių organizacija - Forma: Objektinio programavimo paradigma arba funkcinio programavimo principai
Monolitinė vs. mikroservisų architektūra kaip formos pavyzdys
Kontrasto pavyzdys: Monolitinė vs. mikroservisų architektūra
Monolitinė aplikacija, kuri auga be aiškios formos, tampa vis sunkiau suprantama ir keičiama. “Kas už ką atsakingas” tampa vis labiau priklausoma nuo žmonių patirties, o ne nuo aiškios struktūros.
Monolitinėje aplikacijoje be aiškios formos: - Funkcionalumas išsibarsčiusi po visą kodą - Atsakomybės ribos neaiškios - Pakeitimai vienoje vietoje gali turėti netikėtų pasekmių kitose vietose - Naujiems komandos nariams sunku suprasti sistemą kaip visumą
Mikroservisų architektūra (kai gerai įgyvendinta) suteikia aiškią formą: - Kiekvienas servisas turi vieną aiškią atsakomybę - Servisai bendrauja per apibrėžtas sąsajas - Naujas komandos narys gali suprasti vieną servisą neišmanydamas visos sistemos - Naują funkcionalumą galima pridėti sukuriant naują servisą, neliečiant egzistuojančių
Kai sakome, kad “sistema stovi ant formos, o ne ant patirties”, turime omenyje, kad ji remiasi aiškiais, pažįstamais principais, o ne paslėptomis žiniomis, kurios egzistuoja tik žmonių galvose.
Paprasčiau tariant: - Struktūra yra tai, ką galime matyti ir tiesiogiai keisti – konkrečios sistemos dalys ir jų ryšiai - Forma yra tai, ką jaučiame – sistemos holistinis principas, kuris išlieka net kai keičiasi atskiros dalys
Forma – tai architektūros kalba, kuri padeda mums suvokti, kaip dalykai turi būti susiję tarpusavyje. Ir kai ši kalba aiški, sistema gali evoliucionuoti be chaoso.
Knygos apžvalga: ką rasite šiuose puslapiuose
Pastaraisiais metais daug kas galvoja apie efektyvumą, produkt-market fit, greitą vystymą ir plėtrą. Bet retai kas kalba apie tai, ką daryti kai nežinai. Kai reikia ne vykdyti, o tyrinėti. Kai nei pinigai, nei papildomos rankos nepadeda, nes trūksta ne resursų, o matymo.
Tai — knyga apie matymą. Apie sisteminį aiškumą: tą tylią, gilią tvarką, kuri atsiranda tada, kai esi nuoširdus sau ir struktūrizuoji mintis taip pat rimtai, kaip kodą.
Šioje knygoje mes nagrinėsime:

Aiškumo pagrindus - Kas yra tikrasis aiškumas sistemose ir kodėl jis svarbus. Susipažinsime su Saint archtipu - žmogumi, kuris siekia aiškumo, ir išnagrinėsime perėjimą nuo programuotojo prie architekto mąstymo.
Sistemos pamatus - Domeno aiškumo svarbą, kompleksiškumo anatomiją ir architektūros esmę kaip erdvę pokyčiui.
Augimą ir skalę - Kaip sistemos auga be griūties, kaip valdyti techninę skolą ir kada rinktis evoliuciją, o kada revoliuciją.
Sistemos gyvavimo ciklą - Nežinojimo ir sėkmės paradoksą, sistemas, kurios pergyvena kūrėjus, žinomus gedimus ir skaidrumo bei aiškumo santykį.
Architektūros praktiką - Architektūrą kaip meną ir mokslą, praktinius įrankius ir metodus.

Čia rasite:

Aforizmus, kurie padeda sustabdyti mintį ir ją pergalvoti;
Mąstymo modelius, kurie parodo ryšius, o ne tik informaciją;
Esminius principus, kurie nesensta, nes jie kalba ne apie įrankius, o apie požiūrį.

Tai nėra dar viena produktyvumo knyga. Čia nėra „kaip pasiekti daugiau per mažiau laiko". Tai kvietimas susivokti. Nes kai supranti, ką iš tikrųjų darai, visa kita paspartėja savaime.
Jei esi kūrėjas, kuris tiki, kad geras darbas prasideda nuo gero klausimo — ši knyga tau.


---

