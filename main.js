// Navegação SPA simples
const navLinks = {
    home: document.getElementById('nav-home'),
    sobre: document.getElementById('nav-sobre'),
    cadastro: document.getElementById('nav-cadastro')
};
const sections = {
    home: document.getElementById('home-section'),
    sobre: document.getElementById('sobre-section'),
    cadastro: document.getElementById('cadastro-section')
};

function showSection(section) {
    for (const key in sections) {
        sections[key].style.display = key === section ? '' : 'none';
        navLinks[key].classList.toggle('active', key === section);
    }
}

navLinks.home.addEventListener('click', e => { e.preventDefault(); showSection('home'); });
navLinks.sobre.addEventListener('click', e => { e.preventDefault(); showSection('sobre'); });
navLinks.cadastro.addEventListener('click', e => { e.preventDefault(); showSection('cadastro'); });

// Opcional: feedback ao enviar formulário
document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
    this.reset();
});
