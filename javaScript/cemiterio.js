let imagemFixa = '../assets/cemiterio.jpg';
const pathLapide = '../assets/cemiterio-lapide.jpg';
const pathMausoleu = '../assets/cemiterio-mausoleu.jpg';
let fundoTela = document.getElementById('lapide-ft');
const botaoLapide = document.getElementById('lapide');
const botaoMausoleu = document.getElementById('mausoleu');
const botaoCaminhos = document.getElementById('caminhos');

// Funções para o modal (movidas para o escopo global)
const botaoFecharAlerta = document.getElementById('fechar-modal-home');
const alertaModal = document.getElementById('alerta-modal');
const fundoEmbacado = document.getElementById('fundo-embaçado');

// Função para adicionar eventos de mouse e clique
function adicionarEventos() {

    function mostrarAlerta() {
        alertaModal.style.display = 'block';
        fundoEmbacado.style.display = 'block';
    };

    // Função para fechar o modal
    function fecharAlerta() {
        alertaModal.style.display = 'none';
        fundoEmbacado.style.display = 'none';
    };

    if (botaoFecharAlerta) {
        botaoFecharAlerta.addEventListener('click', fecharAlerta);
    };

    // Fechar modal ao clicar fora da janela
    if (fundoEmbacado) {
        fundoEmbacado.addEventListener('click', fecharAlerta);
    };

    if (botaoLapide) {
        botaoLapide.addEventListener('mouseover', () => {
            fundoTela.src = pathLapide;
        });
        botaoLapide.addEventListener('mouseout', () => {
            fundoTela.src = imagemFixa;
        });

        botaoLapide.addEventListener('click', function() {
            mostrarAlerta();
            document.getElementById('conteudo-modal').innerHTML = `<p>
                <strong>Caminhando para a lápide...</strong><br><br>
                A bruma densa envolve o cemitério antigo, silenciando os sons ao redor. Você caminha entre as lápides
                desgastadas, até que uma delas chama sua atenção. Mais antiga do que as outras, ela está coberta de
                musgo e rachaduras. O nome inscrito está quase apagado, mas algo muito mais perturbador se destaca:
                marcas de garras profundas rasgam a superfície da pedra. A sensação de que algo, ou alguém, deixou
                aquelas marcas recentemente toma conta de você. Ao tocar a lápide, a umidade fria passa para sua pele, e
                um arrepio sobe pela espinha.<br><br>
                Quem, ou o que, poderia ter feito isso?
            </p>
            <button id="b-lapide">Verificar Lápide</button>`;

            document.getElementById('b-lapide').addEventListener('click', function () {
                fundoTela.src = '../assets/lapide.webp';
                document.getElementById('opcoes-home').innerHTML = `<button id="lapide-v">Voltar para entrada</button>`;
                fecharAlerta();
                document.getElementById('lapide-v').addEventListener('click', function () {
                    fundoTela.src = imagemFixa;
                    document.getElementById('opcoes-home').innerHTML = `
                        <button id="lapide">Investigar a Lápide</button>
                        <button id="mausoleu">Explorar o Mausoléu</button>
                        <button id="voltar-p-c">Deseja voltar</button>`;
                    adicionarEventos(); // Reaplicar eventos
                });
            });
        });
    };

    if (botaoMausoleu) {
        botaoMausoleu.addEventListener('mouseover', () => {
            fundoTela.src = pathMausoleu;
        });
        botaoMausoleu.addEventListener('mouseout', () => {
            fundoTela.src = imagemFixa;
        });

        botaoMausoleu.addEventListener('click', function () {
            mostrarAlerta();
            document.getElementById('conteudo-modal').innerHTML = `<p>
                <strong>Explorando Mausoléu...</strong><br><br>
                O mausoléu é exageradamente mensurado, considerando as dimensões da pequena cidade de Corunas. Parece que cada habitante da cidade cabe no salão. E é exatamente assim que ele se encontra. Cada cidadão veste um robe que cobre o corpo inteiro até os pés, encimado por um capuz, cobrindo seus rostos. Todos eles o cercam e um golpe pega você de surpresa pelas costas...
            </p>
            <button id="seguir-M">Prosseguir</button>`;
            document.getElementById('seguir-M').addEventListener('click', function () {
                fundoTela.src = '../assets/mansao.png';
            });
        });
    };


    botaoCaminhos.addEventListener('click', function () {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML =`
        <p>
        <strong>Escolha sua Rota...</strong><br><br>
        Você está no cemitério antigo de Corunas. Existe um caminho para a parquinho e outro para a mansao abandonada. Qual você escolhe?
        </p>
        <button id="parque">Ir para o parquinho</button>
        <button id="mansao">Ir para a mansao</button>`;
        document.getElementById('parque').addEventListener('click', function () {
            window.location.href = '../pages/parquinho.html';
        });
        document.getElementById('mansao').addEventListener('click', function () {
            window.location.href = '../pages/mansao.html';
        });
    });

};




// Chama a função para adicionar os eventos iniciais
adicionarEventos();

// Redimensionamento do header e footer
window.addEventListener('load', function () {
    const rodape = document.getElementById('opcoes-home');
    const header = document.getElementById('cabecalho');

    function ajustarFooter() {
        let largura = fundoTela.offsetWidth;
        rodape.style.width = largura + "px";
        header.style.width = largura + "px";
    }

    if (fundoTela.complete) {
        ajustarFooter();
    }

    fundoTela.addEventListener('load', ajustarFooter);
    window.addEventListener('resize', ajustarFooter);
});
