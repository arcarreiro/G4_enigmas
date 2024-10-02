document.addEventListener('DOMContentLoaded', function () {
    const artigos = [
        {
            nome: "Arthur Carreiro",
            descricao: "Estudante de programação com formação em Engenharia, apaixonado por jogos e pelo universo do terror. Atualmente, atua como tradutor especializado em jogos, unindo sua paixão por histórias envolventes e tecnologia.",
            github: '<a href="https://github.com/arcarreiro" target="_blank" rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 55px; color:#B22222"></i></a>',
            linkedin: '<a href="https://www.linkedin.com/in/arthurcarreiro/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 55px; color:#B22222"></i></a>'
        },
        {
            nome: "Eber Cintra",
            descricao: "Atualmente, estou cursando desenvolvimento full-stack. Sou formado como técnico em agropecuária e também atuo como intérprete de Libras. Tenho grande interesse por tecnologia e gosto de sempre aprender algo novo",
            github: '<a href="https://github.com/cintra444" target="_blank" rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 55px; color:#B22222"></i></a>',
            linkedin: '<a href="https://www.linkedin.com/in/eber-cintra-261630246/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 55px; color:#B22222"></i></a>'
        },
        {
            nome: "Gabriel Bardasson",
            descricao: "Apaixonado por tecnologia. Atuei como analista na automação de postos de gasolina por um ano e meio. Formado em técnico em automação, atualmente curso engenharia de software, buscando sempre crescer e inovar na área",
            github: '<a href="https://github.com/gabrielbardasson" target="_blank" rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 55px; color:#B22222"></i></a>',
            linkedin: '<a href="https://www.linkedin.com/in/gabriel-bardasson-49858b204/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 55px; color:#B22222"></i></a>'
        },
        {
            nome: "Gustavo Fernandes",
            descricao: "Amante de esportes e em aprender coisas novas, sou estudante de programação e estou atualmente na residência TIC/Software do serratec.",
            github: '<a href="https://github.com/gustavofernandes0403" target="_blank" rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 55px; color:#B22222"></i></a>',
            linkedin: '<a href="https://www.linkedin.com/in/gustavo-fernandes77/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 55px; color:#B22222"></i></a>'
        },
        {
            nome: "Julio Braz",
            descricao: "Sou graduado em engenharia da computação e atuo na área de infraestrutura. Atualmente sou residente do programa TIC/Software do Serratec.",
            github: '<a href="https://github.com/JulioBraz7" target="_blank" rel="noopener noreferrer" aria-label="Github do desenvolvedor"><i class="bi bi-github" style="font-size: 55px; color:#B22222"></i></a>',
            linkedin: '<a href="https://www.linkedin.com/in/julio-cesar-bento-braz-138b261aa/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin do desenvolvedor"><i class="bi bi-linkedin" style="font-size: 55px; color:#B22222"></i></a>'
        }
    ];

    const carouselElement = document.getElementById('carouselExampleCaptions');
    carouselElement.addEventListener('slid.bs.carousel', function (event) {
        const index = event.to;
        const articleContent = document.getElementById('article-content');
        articleContent.innerHTML = `
            <p>${artigos[index].descricao}</p>
            <div id="social-media" class="d-flex gap-4">
                ${artigos[index].github}
                ${artigos[index].linkedin}
            </div>`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const articleContent = document.getElementById('article-content');
    let currentIndex = 0;

    items.forEach((item, index) => {
        item.style.opacity = (index === currentIndex) ? "1" : "0";
        item.style.transition = "opacity 0.5s ease";
    });

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.opacity = "0";
            setTimeout(() => {
                item.style.opacity = (i === index) ? "1" : "0";
            }, 50);
        });

        articleContent.style.transform = 'scale(1.05)';
        articleContent.style.opacity = '0.9';

        setTimeout(() => {
            articleContent.style.transform = 'scale(1)';
            articleContent.style.opacity = '1';
        }, 300);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentIndex);
});
