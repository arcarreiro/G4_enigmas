let botaoBalanco = document.getElementById('balanco');
let botaoEscorregador = document.getElementById('escorregador');
let botaoCemiterio = document.getElementById('ir-cemiterio');
let imagemFixa = '../assets/parquinho.webp';
let imagemBalanco = '../assets/parquinho-balanco.webp';
let imagemEscorregador = '../assets/parquinho-escoregador.webp';
let fundoTela = document.getElementById('parquinho');


// redimensionamento do header e footer
window.addEventListener('load', function () {
    const imagem = document.getElementById('parquinho');
    const rodape = document.getElementById('opcoes-parquinho');
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
botaoBalanco.addEventListener('mouseover', () => {
    fundoTela.src = imagemBalanco;
});
// volta à imagem normal
botaoBalanco.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});
botaoBalanco.addEventListener('click', () => {
    mostrarAlerta();
    document.getElementById('conteudo-modal').innerHTML =
        `<p><strong>Balanço</strong><br><br>
                O balanço está em movimento e o vento não está forte o suficiente para isso. Alguém com certeza saiu
                correndo daqui antes que você chegasse. O assento ainda está quente e... O que é isso embaixo do
                balanço? Parece uma página rasgada de um livro...<br><br>
        </p>`;
});

// highlight do arquivo
botaoEscorregador.addEventListener('mouseover', () => {
    fundoTela.src = imagemEscorregador;
});
// volta à imagem normal
botaoEscorregador.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});
botaoEscorregador.addEventListener('click', () => {
    mostrarAlerta();
    document.getElementById('conteudo-modal').innerHTML =
        `<p><strong>A torre do escorregador</strong><br><br>
                É incrível como o escorregador fica bem-posicionado. Oposto a isso, é de arrepiar os ossos o silêncio e
                a escuridão que acompanham o sono desta cidade, não parece natural. Os únicos barulhos que você ouve são
                dos animais da noite. Mas, ao longe, dois pontos luminosos chamam a sua atenção: um você sabe que fica
                na direção do cemitério e o outro parece vir de uma casa às margens da cidade...<br>
        </p>`;
});

const botaoFecharAlerta = document.getElementById('fechar-modal-parquinho');
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
botaoFecharAlerta.addEventListener('click', fecharAlerta);

// fechar o modal ao clicar fora da janela
fundoEmbacado.addEventListener('click', fecharAlerta);


document.getElementById("toggle-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});
