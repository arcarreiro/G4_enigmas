const artigos = [
    {
        nome: "Arthur Carreiro",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.<br> Atualmente trabalha como desenvolvedor de software na empresa",
        github: '<a href="https://github.com/arcarreiro" target="_blank."rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 70px; color:#B22222"></i></a>',
        linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank."rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 70px; color:#B22222"></i></a>'

    },
    {
        nome: "Eber Cintra",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.<br> Atualmente trabalha como desenvolvedor de software na empresa",
        github: '<a href="https://github.com/arcarreiro" target="_blank."rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 70px; color:#B22222"></i></a>',
        linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank."rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 70px; color:#B22222"></i></a>'
    },
    {
        nome: "Gabriel Bardasson",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.<br> Atualmente trabalha como desenvolvedor de software na empresa",
        github: '<a href="https://github.com/arcarreiro" target="_blank."rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 70px; color:#B22222"></i></a>',
        linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank."rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 70px; color:#B22222"></i></a>'
    },
    {
        nome: "Gustavo Fernandes",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.<br> Atualmente trabalha como desenvolvedor de software na empresa",
        github: '<a href="https://github.com/arcarreiro" target="_blank."rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 70px; color:#B22222"></i></a>',
        linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank."rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 70px; color:#B22222"></i></a>'
    },
    {
        nome: "Julio Braz",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.<br> Atualmente trabalha como desenvolvedor de software na empresa",
        github: '<a href="https://github.com/arcarreiro" target="_blank."rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 70px; color:#B22222"></i></a>',
        linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank."rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 70px; color:#B22222"></i></a>'
    }
];

// Capturando o evento de mudança de slide
const carouselElement = document.getElementById('carouselExampleCaptions');
carouselElement.addEventListener('slid.bs.carousel', function (event) {
    const index = event.to; // Pega o índice do slide ativo
    const articleContent = document.getElementById('article-content');

    // Atualizando o conteúdo do artigo com base no índice do slide
    articleContent.innerHTML = `
        <div id="info-article">
            <h2>${artigos[index].nome}</h2>
            <p>${artigos[index].descricao}</p>
            <div id="social-media">
                ${artigos[index].github}
                ${artigos[index].linkedin}
            </div>
        </div>`;
});


