document.addEventListener('DOMContentLoaded', function() {
    // Funkcija skyriaus turiniui įkelti
    function loadSkyrius(skyriusNum) {
        const turinysDiv = document.getElementById('turinys');
        fetch(`skyriuss/skyrius${skyriusNum}.html`)
            .then(response => response.text())
            .then(html => {
                turinysDiv.innerHTML = `<div id="skyrius${skyriusNum}" class="skyrius">
                    ${html}
                </div>`;
                // Atnaujinti URL hash be slinkimo
                history.pushState(null, null, `#skyrius${skyriusNum}`);
                // Slinkti į viršų
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Klaida įkeliant skyrių:', error);
                turinysDiv.innerHTML = '<p>Klaida įkeliant skyrių. Bandykite dar kartą.</p>';
            });
    }

    // Pridėti paspaudimo įvykių klausytojus turinio nuorodoms
    const turinysNuorodos = document.querySelectorAll('.turinys a');
    turinysNuorodos.forEach(nuoroda => {
        nuoroda.addEventListener('click', function(e) {
            e.preventDefault();
            const skyriusNum = this.getAttribute('href').replace('#skyrius', '');
            loadSkyrius(skyriusNum);
        });
    });

    // Įkelti skyrių pagal hash arba numatytąjį 1 skyrių
    function loadPradinisSkyrius() {
        let skyriusNum = 1;
        if (window.location.hash) {
            skyriusNum = window.location.hash.replace('#skyrius', '');
        }
        loadSkyrius(skyriusNum);
    }

    // Įkelti pradinį skyrių
    loadPradinisSkyrius();

    // Apdoroti naršyklės atgal/pirmyn mygtukus
    window.addEventListener('popstate', loadPradinisSkyrius);
});
