---
sidebar_position: 6
---

# 5. Kompleksiškumo anatomija

## Sudėtingumas vs. kompleksiškumas

- **Sudėtingumas**: kiek komponentų, API, funkcijų.
- **Kompleksiškumas**: kiek sunku išlaikyti sistemą galvoje.

> 10 sistemų su aiškiais API – sudėtinga.  
> 1 sistema su magija – kompleksiška.

Geras architektas ne sumažina sudėtingumą, o **suvaldo kompleksiškumą**.

## Kompleksiškumo šaltiniai

1. Neaiškios atsakomybės  
2. Glaudus susiejimas  
3. Paslėptos priklausomybės  
4. Neaiški būsena  
5. Nekonsekventiškumas  
6. Istorinės priežastys  
7. Žinių trūkumas  
8. Techninė skola  
9. Netinkamas abstrakcijos lygis  
10. Neaiškūs tikslai

## Kompleksiškumo požymiai

- Baimė keisti
- „Magija“
- Ritualai
- Priklausomybė nuo ekspertų
- Ilgas įsitraukimo laikas
- Netikėtos klaidos
- „Restartas padeda“
- Sunkumai testuojant
- Dokumentacijos trūkumas / perteklius
- Lėtas vystymasis

## Kaip matuoti kompleksiškumą

**Kiekybiniai matai**:
- Ciklomatinis kompleksiškumas
- Priklausomybių skaičius
- Kodo dubliavimas
- Kodo eilučių skaičius
- Pakeitimų dažnis

**Kokybiniai matai**:
- Baimės koeficientas
- Įsitraukimo laikas
- „Bus fix’inta vėliau“ komentarai
- Dokumentacijos kokybė
- Klaidų skaičius

## Kompleksiškumo valdymo strategijos

1. Aiškios atsakomybės  
2. Laisvas susiejimas  
3. Aukšta kohezija  
4. Abstrakcijos  
5. Nuoseklumas  
6. Inkrementinis refaktoringas  
7. Dokumentacija  
8. Automatizuoti testai  
9. Moduliarizacija  
10. Paprastumas

## Kada kompleksiškumas neišvengiamas

- Domeno kompleksiškumas  
- Techninis kompleksiškumas  
- Istorinis kompleksiškumas  
- Organizacinis kompleksiškumas  
- Reguliacinis kompleksiškumas  
- Evoliucinis kompleksiškumas

**Valdymas ≠ eliminavimas.**

## Praktiniai pavyzdžiai kompleksiškumo mažinimui

1. Monolito skaidymas į mikroservisus  
2. Domeno modelio refaktoringas  
3. Techninės skolos grąžinimas  
4. Dokumentacijos gerinimas  
5. Testavimo strategijos stiprinimas  
6. Kodo refaktoringas  
7. Architektūros peržiūra  
8. Žinių dalijimasis

**Kompleksiškumo mažinimas – nuolatinis procesas.**

---
