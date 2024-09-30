let buttonArvores = document.getElementById('arvores');
let buttonFonte = document.getElementById('fonte');
let buttonBanco = document.getElementById('banco');
let buttonSair = document.getElementById('sair');

let imagemTransitoriaArvores = '../assets/praca-arvores.png';
let imagemTransitoriaFonte = '../assets/praca-fonte.png';
let imagemTransitoriaBanco = '../assets/praca-banco.png';
let imagemFixa = '../assets/praca.png';

let fundoTela = document.getElementById('praca');

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

// highlight do arquivo
buttonArvores.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoriaArvores;
});

buttonFonte.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoriaFonte;
});

buttonBanco.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoriaBanco;
});

buttonSair.addEventListener('mouseover', () => {
    fundoTela.src = imagemFixa;
});


// volta à imagem normal
button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});





//modal
document.addEventListener('DOMContentLoaded', function() {
    const botaoAbrirAlerta = document.getElementById('arvores');
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
