---
sidebar_position: 5
---

# 4. Domeno aiškumas

## Verslo logikos formalizavimo svarba

Softas vykdo taisykles – ne nuojautą.  
Be logikos formalizavimo:  
- Sistema priklausoma nuo žmonių  
- Sprendimai nenuoseklūs  
- Automatizacija neįmanoma  
- Testavimas tampa subjektyvus

Formalizavimas = bendros kalbos tarp verslo ir technologijos paieška.

---

## Programuotojas nėra ekstrasensas

Jei negali koduoti be patirties – taisyklių nėra.  
Programuotojas nėra verslo aiškiaregys.  

Kai nėra verslo kalbos, programuotojas tampa žmogumi, kuris turi ją **išrasti**.

---

## Nuojauta vs. API

- **Nuojauta**: intuicija, priklausomybė nuo žmonių  
- **API**: formali, dokumentuota sąsaja  

Sistema, kuri reikalauja nuojautos – tai **ritualas**, ne sistema.

---

## Verslo kalba ir jos svarba

Be kalbos – verslas negali augti.

**Gera verslo kalba**:  
- Aiški  
- Nuosekli  
- Išsami  
- Evoliucionuojanti

Verslo kalba → Domeno modelis → Tiltas tarp verslo ir technologijų

---

## Paslėpta taisyklė

Kai verslas neturi kalbos, atsiranda **implicitinės žinios**:  
- Priklausomybė nuo žmonių  
- Sunku perduoti žinias  
- Nesuderinami sprendimai  
- Evoliucijos barjeras

---

## Programuotojo vaidmuo formalizuojant verslą

Kai reikia, programuotojas tampa **paskutiniu filtru** tarp chaoso ir struktūros.  
Problemos:  
- Informacijos trūkumas  
- Verslo žinių trūkumas  
- Atsakomybės perteklius  
- Komunikacijos barjerai

---

## Domeno modeliavimo pagrindai

### Pagrindiniai elementai

- **Entities**: “Sąskaita”, “Klientas”, “Transakcija”  
- **Value Objects**: “Adresas”, “Pinigų suma”  
- **Aggregates**: “Užsakymas” su eilutėmis  
- **Repositories**: prieiga prie agregatų  
- **Services**: “Mokėjimo apdorojimas”  
- **Events**: “Užsakymas patvirtintas”

**Savybės**:  
- Aiškumas  
- Nuoseklumas  
- Išsamumas  
- Evoliucija

---

## Praktiniai žingsniai siekiant domeno aiškumo

1. **Sukurkite bendrą kalbą**  
   - Žodynas, be sinonimų  
   - Visi supranta vienodai

2. **Modeliuokite su verslu**  
   - Diagramos, lentos  
   - Bendra sesija = bendras modelis

3. **Identifikuokite taisykles**  
   - Dokumentuokite aiškiai  
   - Grupavimas pagal temas

4. **Kurkite prototipus ir pavyzdžius**  
   - Iliustracijos  
   - Realūs scenarijai

5. **Įtraukite modelį į kodą**  
   - Terminologija kodo struktūroje  
   - Aiški verslo logikos izoliacija

6. **Reguliariai peržiūrėkite**  
   - Su verslu  
   - Atnaujinimai, dokumentacija

7. **Dalinkitės žiniomis**  
   - Mokymai  
   - Paprasta dokumentacija  
   - Skatinimas klausti

---

Domeno aiškumas – nuolatinis procesas.  
Jis leidžia kurti sistemas, kurios yra **suprantamos**, **palaikomos** ir **evoliucionuoja**.

---
