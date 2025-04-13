document.addEventListener('DOMContentLoaded', function() {
    // Elementų kintamieji
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const skyriusLinks = document.querySelectorAll('.skyrius-link');
    const turinysDiv = document.getElementById('turinys');
    const prevChapterBtn = document.getElementById('prevChapter');
    const nextChapterBtn = document.getElementById('nextChapter');
    const backToTopBtn = document.getElementById('backToTop');
    const coverImage = document.getElementById('coverImage');
    
    // Kintamieji skyriaus sekimui
    let currentSkyrius = 0;
    const totalSkyrius = 14;
    
    // Funkcija skyriaus turiniui įkelti
    function loadSkyrius(skyriusNum) {
        // Pašalinti aktyvią klasę iš visų nuorodų
        skyriusLinks.forEach(link => link.classList.remove('active'));
        
        // Pridėti aktyvią klasę dabartinei nuorodai
        const activeLink = document.querySelector(`.skyrius-link[data-skyrius="${skyriusNum}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Atnaujinti dabartinį skyrių
        currentSkyrius = parseInt(skyriusNum);
        
        // Atnaujinti navigacijos mygtukus
        updateNavButtons();
        
        // Paslėpti knygos viršelį, kai rodomas skyrius
        coverImage.style.display = 'none';
        
        // Įkelti skyriaus turinį
        fetch(`skyrius/skyrius${skyriusNum}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Skyrius nerastas');
                }
                return response.text();
            })
            .then(html => {
                // Gauti skyriaus pavadinimą iš atitinkamos nuorodos
                const skyriusPavadinimas = activeLink ? activeLink.textContent : `${skyriusNum}. Skyrius`;
                
                // Įdėti turinį su skyriaus pavadinimu
                turinysDiv.innerHTML = `
                    <div id="skyrius${skyriusNum}" class="skyrius">
                        <h2 class="chapter-title">${skyriusPavadinimas}</h2>
                        ${html}
                    </div>
                `;
                
                // Atnaujinti URL hash be slinkimo
                history.pushState(null, null, `#skyrius${skyriusNum}`);
                
                // Slinkti į viršų
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Klaida įkeliant skyrių:', error);
                turinysDiv.innerHTML = `
                    <div class="error-message">
                        <h2>Klaida įkeliant skyrių</h2>
                        <p>Nepavyko įkelti skyriaus. Bandykite dar kartą.</p>
                        <p>Klaidos informacija: ${error.message}</p>
                    </div>
                `;
            });
    }
    
    // Funkcija navigacijos mygtukams atnaujinti
    function updateNavButtons() {
        prevChapterBtn.disabled = currentSkyrius <= 1;
        nextChapterBtn.disabled = currentSkyrius >= totalSkyrius;
    }
    
    // Pridėti paspaudimo įvykių klausytojus turinio nuorodoms
    skyriusLinks.forEach(nuoroda => {
        nuoroda.addEventListener('click', function(e) {
            e.preventDefault();
            const skyriusNum = this.getAttribute('data-skyrius');
            loadSkyrius(skyriusNum);
            
            // Mobiliuose įrenginiuose uždaryti šoninę juostą po paspaudimo
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Šoninės juostos perjungimo funkcionalumas
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // Ankstesnio skyriaus mygtukas
    prevChapterBtn.addEventListener('click', function() {
        if (currentSkyrius > 1) {
            loadSkyrius(currentSkyrius - 1);
        }
    });
    
    // Kito skyriaus mygtukas
    nextChapterBtn.addEventListener('click', function() {
        if (currentSkyrius < totalSkyrius) {
            loadSkyrius(currentSkyrius + 1);
        }
    });
    
    // Grįžimo į viršų mygtukas
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Įkelti skyrių pagal hash arba rodyti pradinį puslapį
    function loadInitialContent() {
        if (window.location.hash) {
            const skyriusNum = window.location.hash.replace('#skyrius', '');
            if (skyriusNum >= 1 && skyriusNum <= totalSkyrius) {
                loadSkyrius(skyriusNum);
                return;
            }
        }
        
        // Jei nėra hash arba neteisingas hash, rodyti pradinį puslapį
        currentSkyrius = 0;
        updateNavButtons();
        coverImage.style.display = 'block';
    }
    
    // Įkelti pradinį turinį
    loadInitialContent();
    
    // Apdoroti naršyklės atgal/pirmyn mygtukus
    window.addEventListener('popstate', loadInitialContent);
    
    // Prisitaikyti prie lango dydžio pakeitimų
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
});
