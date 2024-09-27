let button = document.getElementById('comecar');
let imagemFixa = './assets/escritorio.jpg';
let imagemTransitoria = './assets/escritorio2.jpg';
let fundoTela = document.getElementById('escritorio');

button.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoria;
});

button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

window.addEventListener('load', function () {
    const imagem = document.getElementById('escritorio');
    const rodape = document.getElementById('opcoes-home');
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