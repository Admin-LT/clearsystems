#!/usr/bin/env python3
import os
import re
from bs4 import BeautifulSoup

def html_to_markdown(html_content):
    """Convert HTML content to Markdown format"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract text content
    text = soup.get_text()
    
    # Basic cleanup
    text = re.sub(r'\n\s*\n', '\n\n', text)  # Remove extra blank lines
    
    return text

def create_markdown_file():
    """Create a single markdown file from all chapters"""
    edited_dir = "/home/ubuntu/book/edited"
    output_file = "/home/ubuntu/markdown_version/sistema_po_zmogaus.md"
    
    # Start with book title and metadata
    with open(output_file, 'w') as outfile:
        outfile.write("# Sistema po žmogaus\n\n")
        outfile.write("**Autorius:** Anonym\n\n")
        outfile.write("**Metai:** 2025\n\n")
        outfile.write("---\n\n")
        
        # Add table of contents
        outfile.write("## Turinys\n\n")
        for i in range(1, 15):
            chapter_titles = {
                1: "Įvadas: Kodėl mums reikia aiškumo",
                2: "Apie aiškumo architektą: Saint archetipas",
                3: "Perėjimas nuo programuotojo prie architekto",
                4: "Domeno aiškumas",
                5: "Kompleksiškumo anatomija",
                6: "Architektūros esmė: erdvė pokyčiui",
                7: "Skalės ir augimo paradoksas",
                8: "Techninės skolos valdymas",
                9: "Evoliucija vs. revoliucija",
                10: "Nežinojimo ir sėkmės paradoksas",
                11: "Sistemos, kurios pergyvena kūrėjus",
                12: "Žinomi gedimai: skaidrumas vs. aiškumas",
                13: "Išvados: Architektūra kaip menas ir mokslas",
                14: "Priedai: Praktiniai įrankiai ir metodai"
            }
            outfile.write(f"{i}. [{chapter_titles[i]}](#skyrius-{i})\n")
        
        outfile.write("\n---\n\n")
        
        # Process each chapter
        for i in range(1, 15):
            chapter_file = f"{edited_dir}/skyrius{i}.html"
            if os.path.exists(chapter_file):
                with open(chapter_file, 'r') as infile:
                    html_content = infile.read()
                
                # Convert HTML to Markdown
                markdown_content = html_to_markdown(html_content)
                
                # Write chapter to output file
                chapter_titles = {
                    1: "Įvadas: Kodėl mums reikia aiškumo",
                    2: "Apie aiškumo architektą: Saint archetipas",
                    3: "Perėjimas nuo programuotojo prie architekto",
                    4: "Domeno aiškumas",
                    5: "Kompleksiškumo anatomija",
                    6: "Architektūros esmė: erdvė pokyčiui",
                    7: "Skalės ir augimo paradoksas",
                    8: "Techninės skolos valdymas",
                    9: "Evoliucija vs. revoliucija",
                    10: "Nežinojimo ir sėkmės paradoksas",
                    11: "Sistemos, kurios pergyvena kūrėjus",
                    12: "Žinomi gedimai: skaidrumas vs. aiškumas",
                    13: "Išvados: Architektūra kaip menas ir mokslas",
                    14: "Priedai: Praktiniai įrankiai ir metodai"
                }
                
                outfile.write(f"<a id='skyrius-{i}'></a>\n\n")
                outfile.write(f"# {i}. {chapter_titles[i]}\n\n")
                outfile.write(markdown_content)
                outfile.write("\n\n---\n\n")
        
        # Add copyright notice
        outfile.write("© 2025 Visos teisės saugomos.\n")
    
    return output_file

if __name__ == "__main__":
    output_file = create_markdown_file()
    print(f"Markdown file created: {output_file}")
