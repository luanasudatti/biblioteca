// Filtrar livros no catálogo
const searchInput = document.querySelector('input[type="text"]');
const livroElements = document.querySelectorAll('.livro');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    livroElements.forEach(livro => {
        const texto = livro.textContent.toLowerCase();
        livro.style.display = texto.includes(filter) ? '' : 'none';
    });
});

// Validação e envio do formulário de contato
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para demonstração
    alert('Formulário enviado com sucesso!');
    form.reset(); // Limpa o formulário após o envio
});

// Scroll suave entre seções
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel img');
    currentSlide += direction;



    // Loop de slides
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100; // Ajuste para a posição correta
    document.querySelector('.carrossel').style.transform = translateX`(${offset}%`;
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;
    
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
      images[currentIndex].classList.add('active');
    }
    
    // Inicia o carrossel com a primeira imagem ativa
    images[currentIndex].classList.add('active');
    
    // Troca de imagem a cada 3 segundos
    setInterval(showNextImage, 3000);
}