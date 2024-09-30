let button = document.getElementById('comecar');
let imagemFixa = '../assets/praca.png';
let imagemTransitoria = '../assets/praca.png';
let fundoTela = document.getElementById('praca');

button.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoria;
});
// volta à imagem normal
button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

window.addEventListener('load', function () {
    const imagem = document.getElementById('praca');
    const rodape = document.getElementById('opcoes-praca');
    const header = document.getElementById('cabecalho');

    function ajustarFooter() {
        let largura = imagem.offsetWidth;
        rodape.style.width = largura + "px";
        header.style.width = largura + "px";
    }

    if (imagem.complete) {
        ajustarFooter();
    }

    imagem.addEventListener('load', ajustarFooter);

    window.addEventListener('resize', ajustarFooter);
});
