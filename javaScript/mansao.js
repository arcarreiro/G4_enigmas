let button = document.getElementById('comecar');
let imagemFixa = '../assets/mansao.png';
let imagemTransitoria = '../assets/mansao.png';
let fundoTela = document.getElementById('mansao');

button.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoria;
});

button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

window.addEventListener('load', function () {
    const imagem = document.getElementById('mansao');
    const rodape = document.getElementById('opcoes-mansao');
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