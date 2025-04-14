import re
import os

def convert_markdown_to_docusaurus(input_file, output_dir):
    # Sukurti output direktoriją, jei jos nėra
    os.makedirs(output_dir, exist_ok=True)
    
    # Nuskaityti Markdown failą
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Išskirti skyrius pagal antraštes
    chapters = re.split(r'<a id=\'skyrius-\d+\'></a>\s*\n\s*# \d+\. ', content)
    
    # Pirmas elementas yra įvadas, jį apdorojame atskirai
    intro = chapters[0]
    
    # Išsaugoti įvadą
    with open(os.path.join(output_dir, 'index.md'), 'w', encoding='utf-8') as f:
        # Pridėti Docusaurus frontmatter
        f.write('---\n')
        f.write('slug: /\n')
        f.write('sidebar_position: 1\n')
        f.write('---\n\n')
        f.write('# Sistema po žmogaus\n\n')
        
        # Išskirti turinį iš įvado
        intro_parts = intro.split('## Turinys')
        if len(intro_parts) > 1:
            intro_content = intro_parts[0]
            f.write(intro_content)
    
    # Apdoroti kiekvieną skyrių
    chapter_titles = [
        "Įvadas: Kodėl mums reikia aiškumo",
        "Apie aiškumo architektą: Saint archetipas",
        "Perėjimas nuo programuotojo prie architekto",
        "Domeno aiškumas",
        "Kompleksiškumo anatomija",
        "Architektūros esmė: erdvė pokyčiui",
        "Skalės ir augimo paradoksas",
        "Techninės skolos valdymas",
        "Evoliucija vs. revoliucija",
        "Nežinojimo ir sėkmės paradoksas",
        "Sistemos, kurios pergyvena kūrėjus",
        "Žinomi gedimai: skaidrumas vs. aiškumas",
        "Išvados: Architektūra kaip menas ir mokslas",
        "Priedai: Praktiniai įrankiai ir metodai"
    ]
    
    for i, chapter in enumerate(chapters[1:], 1):
        if i <= len(chapter_titles):
            title = chapter_titles[i-1]
            
            # Sukurti failo pavadinimą
            filename = f'{i:02d}-{title.lower().replace(" ", "-").replace(":", "").replace(",", "")}.md'
            
            # Išsaugoti skyrių
            with open(os.path.join(output_dir, filename), 'w', encoding='utf-8') as f:
                # Pridėti Docusaurus frontmatter
                f.write('---\n')
                f.write(f'sidebar_position: {i+1}\n')
                f.write('---\n\n')
                f.write(f'# {i}. {title}\n\n')
                f.write(chapter)

# Naudojimas
convert_markdown_to_docusaurus('./spoz.md', './docs')

