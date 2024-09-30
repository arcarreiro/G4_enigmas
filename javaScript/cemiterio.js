let button = document.getElementById('comecar');
let imagemFixa = '../assets/cemiterio.jpg';
let imagemTransitoria = '../assets/escritorio2.jpg';
let fundoTela = document.getElementById('escritorio');

// highlight do arquivo
button.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoria;
});
// volta à imagem normal
button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

// redimensionamento do header e footer
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

//modal
document.addEventListener('DOMContentLoaded', function() {
    const botaoAbrirAlerta = document.getElementById('comecar');
    const botaoFecharAlerta = document.getElementById('fechar-modal-home');
    const alertaModal = document.getElementById('alerta-modal');
    const fundoEmbacado = document.getElementById('fundo-embaçado');

    // Função para abrir o modal
    function mostrarAlerta() {
        alertaModal.style.display = 'block';
        fundoEmbacado.style.display = 'block';
    }

    // Função para fechar o modal
    function fecharAlerta() {
        alertaModal.style.display = 'none';
        fundoEmbacado.style.display = 'none';
    }

    // Eventos para abrir e fechar o modal
    botaoAbrirAlerta.addEventListener('click', mostrarAlerta);
    botaoFecharAlerta.addEventListener('click', fecharAlerta);

    // Opcional: fechar o modal ao clicar fora da janela
    fundoEmbacado.addEventListener('click', fecharAlerta);
});
