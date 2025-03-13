document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const pages = {
        home: `
            <h1>Suivi d'Alternance</h1>
            <p>Suivi d'alternance de Mr. Thomas <nomdefamille> dans l'entreprise XXXX, 3ème année de BUT informatique à l'IUT Charlemagne à Nancy.</p>
        `,
        entreprise: `
            <h1>L'Entreprise</h1>
            <p>Présentation de l'entreprise et des personnes avec qui je travaille.</p>
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
