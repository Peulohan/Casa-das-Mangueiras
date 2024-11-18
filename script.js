// Alternar menu no modo mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Buscar produtos com funcionalidade fictícia
const searchButton = document.querySelector('.search-section button');
const searchInput = document.querySelector('.search-section input[type="text"]');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando por: "${query}"`);
        } else {
            alert('Por favor, insira um termo para busca.');
        }
    });
}

// Enviar formulário de contato
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name && email && message) {
            alert('Obrigado por entrar em contato! Responderemos em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
