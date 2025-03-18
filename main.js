document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const pages = {
        home: `
            <div id="home">
            <h1>Suivi d'Alternance</h1>
            <p><strong>Ce site présente le suivi d'alternance de Thomas DEKERSABIEC dans l'entreprise Bleuforet, 3ème année de BUT informatique à l'IUT Charlemagne à Nancy.</strong></p>
            <p>Dans le cadre de ma 3ème année de BUT Informatique en option Réalisation d'Applications - Développement Web et mobile, je suis en alternance dans l'entreprise Bleuforêt, à Vagney dans les Vosges. Ce site présentera l'entreprise, le contexte dans lequel je mettrai en place les différents projets qui me seront confiés, puis présentera en détail les projets sur lequel je travaille, ce que j'ai réalisé...</p>
            
            <p><a href="#" data-page="entreprise">Présentation de l'entreprise Bleuforêt</a></p>
            </div>
        `,
        entreprise: `
            <div id="entreprise">
            <h1>L'Entreprise</h1>
            <p></p>
            </div>
        `,
        contexte: `
            <h1>Contexte</h1>
            <p>Contexte dans lequel j'effectue mes travaux.</p>
        `,
        projet1: `
            <h1>Projet 1</h1>
            <p>Description du premier projet sur lequel j'ai travaillé.</p>
        `,
        projet2: `
            <h1>Projet 2</h1>
            <p>Description du deuxième projet sur lequel j'ai travaillé.</p>
        `
    };

    function loadPage(page) {
        content.classList.add('fade-out');
        setTimeout(() => {
            content.innerHTML = pages[page];
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        }, 500);
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
        });
    });


    loadPage('home');
});
