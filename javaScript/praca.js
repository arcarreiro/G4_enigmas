let buttonArvores = document.getElementById('arvores');
let buttonFonte = document.getElementById('fonte');
let buttonBanco = document.getElementById('banco');
let buttonSair = document.getElementById('sair');

let imagemTransitoriaArvores = '../assets/praca-arvores.webp';
let imagemTransitoriaFonte = '../assets/praca-fonte.webp';
let imagemTransitoriaBanco = '../assets/praca-banco.webp';
let imagemFixa = '../assets/praca.webp';

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


// volta à imagem normal
buttonArvores.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

buttonFonte.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});

buttonBanco.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});


//modal

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

botaoFecharAlerta.addEventListener('click', fecharAlerta);

// Opcional: fechar o modal ao clicar fora da janela
fundoEmbacado.addEventListener('click', fecharAlerta);

let dado = {
    lados: 6,
    rolar: function () {
        let numeroAleatorio = Math.floor(Math.random() * this.lados) + 1;
        return numeroAleatorio;
    }
}

buttonArvores.addEventListener('click', () => {
    mostrarAlerta();
    let texto = document.getElementById("conteudo-modal");
    texto.innerHTML = `<p>Ao se esgueirar por entre as árvores, você avista um vulto se afastando apressadamente, que se assemelha à silhueta de uma pessoa. Role o dado para perseguir o suspeito.</p>
    <div id="dado">  </div>
    <button id="rolador">Rolar dado</button>`;
    function mostrarNumero(numero) {
        let caixaDado = document.getElementById('dado');
        caixaDado.innerHTML = `<h2> ${numero}</h2>`;
        if (numero < 4) {
            texto.innerHTML += `<p>Você perdeu o rastro do fugitivo.</p>`
        } else {
            texto.innerHTML += `<p>Mesmo conseguindo seguir o fugitivo, você nota que o beco em que ele se escondeu está cheio de pessoas. Melhor voltar...</p>`
        }
    };
    let botaoDado = document.getElementById('rolador');
    botaoDado.addEventListener('click', () => {
        let resultado = dado.rolar();
        mostrarNumero(resultado);
    });
})


buttonFonte.addEventListener('click', () => {
    mostrarAlerta();
    let texto = document.getElementById("conteudo-modal");
    texto.innerHTML = `<p>A fonte, com sua água turva e musgo cobrindo partes das bordas, guarda mais do que aparenta. Ao se aproximar, você percebe algo gravado na pedra desgastada, quase escondido pelo tempo e pelo descuido. As palavras, difíceis de ler, parecem antigas e carregam um significado que você ainda não consegue compreender. A água escorre lentamente sobre a superfície, tornando a leitura ainda mais desafiadora. Você limpa parte da pedra e, aos poucos, as letras borradas começam a surgir, mas a mensagem ainda é fragmentada, uma mistura de símbolos e palavras enigmáticas.<br><br> Algo está escrito aqui... mas o que?</p>
    <button id='placa-fonte'>Tentar decifrar</button>`;
    document.getElementById('placa-fonte').addEventListener('click', () => {
        fundoTela.src = '../assets/praca.fonte-escrita.webp';
        document.getElementById('opcoes-praca').innerHTML = `<button id="placa">Investigar</button>`;
        fecharAlerta();
        document.getElementById('placa').addEventListener('click', () => {
            mostrarAlerta();
            let texto = document.getElementById("conteudo-modal");
            texto.innerHTML = `<p>Role um dado para tentar decifrar</p>
            <div id="dado">  </div>
            <button id="rolador">Rolar dado</button>`
            function mostrarNumero(numero) {
                let caixaDado = document.getElementById('dado');
                caixaDado.innerHTML = `<h2> ${numero}</h2>`;
                if (numero < 4) {
                    texto.innerHTML += `<p>É impossível decifrar o texto.</p>
                    <button onclick="window.location.href='praca.html'">Voltar</button>`;
                } else {
                    texto.innerHTML += `<p>Você consegue decifrar a seguinte frase:<br>"A escuridão os leva... O caminho é perdido para aqueles que não veem. Encontre a chave nas sombras, ou junte-se aos esquecidos."<br> e encontra uma passagem secreta sob a fonte.</p>
                    <button onclick="window.location.href='cemiterio.html'">Entrar na passagem</button>`;
                }
            };
            let botaoDado = document.getElementById('rolador');
            botaoDado.addEventListener('click', () => {
                let resultado = dado.rolar();
                mostrarNumero(resultado);
            })
        })
    })
})



buttonBanco.addEventListener('click', () => {
    mostrarAlerta();
    let texto = document.getElementById("conteudo-modal");
    texto.innerHTML = `<p>A leve brisa da noite arrepia seus pelos. O barulho das corujas parece muito mais alto quando não há nada mais a se ouvir. No entanto, nada relevante acontece.</p>`;

});
