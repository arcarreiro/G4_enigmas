let imagemFixa = '../assets/cemiterio.jpg';
const pathLapide = '../assets/cemiterio-lapide.jpg';
const pathMausoleu = '../assets/cemiterio-mausoleu.jpg';
let fundoTela = document.getElementById('lapide-ft');

// Funções para o modal (escopo global)
const botaoFecharAlerta = document.getElementById('fechar-modal-home');
const alertaModal = document.getElementById('alerta-modal');
const fundoEmbacado = document.getElementById('fundo-embaçado');

// Função para mostrar o alerta
function mostrarAlerta() {
    alertaModal.style.display = 'block'; // Mostra o modal
    fundoEmbacado.style.display = 'block'; // Embaça o fundo
}

// Função para fechar o alerta
function fecharAlerta() {
    alertaModal.style.display = 'none'; // Oculta o modal
    fundoEmbacado.style.display = 'none'; // Remove o embaçamento do fundo
}

function adicionarEventos() {
    const botaoLapide = document.getElementById('lapide');
    const botaoMausoleu = document.getElementById('mausoleu');
    const botaoCaminhos = document.getElementById('caminhos');

    // Função para adicionar eventos
    const adicionarEvento = (elemento, tipoEvento, funcao) => {
        if (elemento) {
            elemento.addEventListener(tipoEvento, funcao);
        }
    };

    // Eventos para a lápide
    adicionarEvento(botaoLapide, 'mouseover', () => {
        fundoTela.src = pathLapide;
    });
    adicionarEvento(botaoLapide, 'mouseout', () => {
        fundoTela.src = imagemFixa;
    });
    adicionarEvento(botaoLapide, 'click', () => {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `<p>
            <strong>Caminhando para a lápide...</strong><br><br>
            A bruma densa envolve o cemitério antigo, silenciando os sons ao redor. Você caminha entre as lápides desgastadas, até que uma delas chama sua atenção. Mais antiga do que as outras, ela está coberta de musgo e rachaduras. O nome inscrito está quase apagado, mas algo muito mais perturbador se destaca: marcas de garras profundas rasgam a superfície da pedra. A sensação de que algo, ou alguém, deixou aquelas marcas recentemente toma conta de você. Ao tocar a lápide, a umidade fria passa para sua pele, e um arrepio sobe pela espinha.<br><br>
            Quem, ou o que, poderia ter feito isso?
        </p>
        <button id="b-lapide">Verificar Lápide</button>`;

        document.getElementById('b-lapide').addEventListener('click', () => {
            fundoTela.src = '../assets/lapide.jpg';
            document.getElementById('opcoes-home').innerHTML = `<button id="lapide-v">Voltar para entrada</button>`;
            fecharAlerta();
            document.getElementById('lapide-v').addEventListener('click', () => {
                fundoTela.src = imagemFixa;
                document.getElementById('opcoes-home').innerHTML = `
                    <button id="lapide">Investigar a Lápide</button>
                    <button id="mausoleu">Explorar o Mausoléu</button>
                    <button id="caminhos">Escolher caminhos</button>`;
                adicionarEventos(); // Reanexar eventos
            });
        });
    });

    // Eventos para o mausoléu
    adicionarEvento(botaoMausoleu, 'mouseover', () => {
        fundoTela.src = pathMausoleu;
    });
    adicionarEvento(botaoMausoleu, 'mouseout', () => {
        fundoTela.src = imagemFixa;
    });
    adicionarEvento(botaoMausoleu, 'click', () => {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `<p>
            <strong>Explorando Mausoléu...</strong><br><br>
            O mausoléu é exageradamente mensurado, considerando as dimensões da pequena cidade de Corunas. Parece que cada habitante da cidade cabe no salão. E é exatamente assim que ele se encontra. Cada cidadão veste um robe que cobre o corpo inteiro até os pés, encimado por um capuz, cobrindo seus rostos. Todos eles o cercam e um golpe pega você de surpresa pelas costas...
        </p>
        <button id="seguir-M">Prosseguir</button>`;

        document.getElementById('seguir-M').addEventListener('click', () => {
            fundoTela.src = '../assets/final2.jpg';
            fecharAlerta();
            document.getElementById('opcoes-home').innerHTML = `<button id="b-final">Encerrar</button>`;
            document.getElementById('b-final').addEventListener('click', () => {
                    const PATHOME = '/index.html';
                    mostrarAlerta();
                    document.getElementById('conteudo-modal').innerHTML = `<p>
                    <strong>Morte inevitável...</strong><br><br>
                    Suas forças são quase inexistentes e sua visão e audição estão embaralhadas, o que faz você duvidar de cada coisa que vê. O altar montado no mausoléu do cemitério está cercado por encapuzados, velas, símbolos e imagens que desafiariam a sanidade de qualquer pessoa. A proximidade traz cada vez mais o fedor de ferro, até que você é posto sob a mesa de pedra e sente o líquido viscoso e ainda quente da última vítima e passa a entender o que está acontecendo: você é o próximo sacrifício.
                    </p>
                    <button id="seguir-h">Restart</button>`;
                    document.getElementById('seguir-h').addEventListener('click', () => {
                        window.location.href = PATHOME;
                });
            });
        });
    });

    // Eventos para escolher caminhos
    adicionarEvento(botaoCaminhos, 'click', () => {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `<p>
            <strong>Escolha sua Rota...</strong><br><br>
            Você está no cemitério antigo de Corunas...
        </p>
        <button id="parque" style= "margin: 1rem auto">Ir para o parquinho</button>
        <button id="mansao">Ir para a mansão</button>`;

        document.getElementById('parque').addEventListener('click', () => {
            window.location.href = '../pages/Parquinho.html';
        });
        document.getElementById('mansao').addEventListener('click', () => {
            window.location.href = '../pages/Mansao.html';
        });
    });
}

// Função para ajustar o tamanho do footer e header
function ajustarFooter() {
    const rodape = document.getElementById('opcoes-home');
    const header = document.getElementById('cabecalho');
    const largura = document.getElementById('lapide-ft').offsetWidth;
    rodape.style.width = `${largura}px`;
    header.style.width = `${largura}px`;
}

// Inicializa os eventos
window.addEventListener('load', () => {
    adicionarEventos();
    ajustarFooter();

    // Redimensionamento do footer e header
    window.addEventListener('resize', ajustarFooter);
});
