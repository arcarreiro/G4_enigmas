let button = document.getElementById('comecar');
let imagemFixa = '../assets/mansao.png';
let imagemTransitoria = '../assets/mansao2.png';
let fundoTela = document.getElementById('mansao');

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


// Funções para o modal (movidas para o escopo global)
const botaoFecharAlerta = document.getElementById('fechar-modal');
const alertaModal = document.getElementById('alerta-modal');
const fundoEmbacado = document.getElementById('fundo-embaçado');

//funcao para adicionar eventos de mouse e clique
const botaoSubirEscadas = document.getElementById('subirEscadas');
const botaoDescerPorao = document.getElementById('descerPorao');
//sub botoes subir escadas
const botaoEncerrarRitual = document.getElementById('encerrarRitual');
const botaoEncararMoradores = document.getElementById('encararMoradores');
//sub-botoes descer ao porão
const botaoEncontrarItens = document.getElementById('encontrarItens');
const botaoVoltarMansao = document.getElementById('voltarMansao');
const botaoVoltarCemiterio = document.getElementById('voltarCemiterio');

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


if (botaoSubirEscadas) {

    botaoSubirEscadas.addEventListener('mouseover', () => {
        fundoTela.src = '../assets/mansaoescadas.png';
    });
    botaoSubirEscadas.addEventListener('mouseout', () => {
        fundoTela.src = '../assets/mansaoescadas-escadas.png';
    });

    botaoSubirEscadas.addEventListener('click', function () {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `
        A subir as escadas.....
        <p>
        Ao subir as escadas, você se depara com um cômodo devastado pelo tempo. As paredes estão cobertas de rachaduras, e o teto parece prestes a desmoronar. 
        O ar é denso e cheira a mofo, mas em meio a esse cenário de decadência, algo se destaca. Um livro, velho e empoeirado, está aberto sobre a mesa, como 
        se tivesse sido manuseado recentemente. Estranhamente, a página em que ele está aberto está rasgada, faltando justo a parte mais crucial. Coincidência? 
        Dificilmente.</p>
        <p>
        Ao investigar o livro com mais atenção, as peças do quebra-cabeça começam a se encaixar. Corunas não é apenas uma cidade pacata; seus moradores veneram 
        uma entidade antiga e maléfica. Os desaparecidos, na verdade, são sacrifícios realizados em nome dessa entidade sombria, entregues em rituais macabros. 
        </p><p>Você descobre que existe uma maneira de impedir o ritual, de cortar o poder dessa entidade e salvar futuras vítimas. No entanto, outra escolha se apresenta. 
        Confrontar os próprios moradores, aqueles que seguem cegamente essa prática, pode ser o único caminho para acabar de vez com essa seita. 
        Agora, resta a decisão: tentar interromper o ritual em segredo ou encarar os moradores de Corunas e pôr um fim à devoção ao mal. 
        </p>
        <button id='subir-escadas'>Prosseguir enquanto você decide o que fazer</button>`;

        document.getElementById('subir-escadas').addEventListener('click', function () {
            fundoTela.src = '../assets/mansaomesa.png';
            document.getElementById('opcoes-mansao').innerHTML = `
            <button id='encerrarRitual'>Tentar Encerrar Ritual</button>
            <button id='encararMoradores'>Encarar Moradores</button>`;
            fecharAlerta();
            document.getElementById('encerrarRitual').addEventListener('click', function () {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `
                Tentando encerrar o Ritual...
                <p>O silêncio que recai sobre Corunas é quase opressor. O ritual foi interrompido no último momento, quando você conseguiu destruir 
                o altar central — o coração da conexão entre os moradores e a entidade. Com um golpe certeiro, você quebrou a relíquia que canalizava o 
                poder maligno, e a energia sombria que permeava o local se dissipou em um grito silencioso. A entidade, privada de seu poder, 
                lentamente recua para as sombras de onde veio. O ar, antes denso e carregado, agora parece mais leve, quase como se a própria cidade 
                estivesse exalando alívio. </p>
                <p>
                Você não tem certeza do que aconteceu com os moradores. Talvez a ruptura do ritual tenha quebrado o elo que os ligava àquela força sombria, 
                ou talvez eles simplesmente voltem a suas vidas, sem jamais saberem o quão próximos estiveram do abismo. Mas isso não importa agora. O que importa 
                é que você fez o que poucos teriam a coragem de fazer. </p>
                <p>
                Com o peso do que vivenciou, você deixa Corunas para trás. A estrada de volta para casa parece mais longa, e as memórias daquelas noites terríveis, 
                das descobertas e do perigo, ficam gravadas em sua mente. Há um misto de alívio e dúvida – o ritual foi interrompido, mas por quanto tempo? Esse tipo 
                de mal pode realmente ser detido para sempre? </p>
                <p>
                Ao chegar em casa, a familiaridade do lugar oferece um conforto que parecia distante. A noite está tranquila, e por um momento, você se permite 
                acreditar que tudo acabou. Mas, mesmo no silêncio, você sabe que o mal que enfrentou em Corunas nunca desaparece completamente. Ele apenas espera. 
                Você foi vitorioso desta vez. Mas a escuridão sempre observa... aguardando. </p>
                `
            });
            document.getElementById('encararMoradores').innerHTML = `
            Encarando Moradores...
            <p>
            Suas forças são quase inexistentes e sua visão e audição estão embaralhadas, o que faz você duvidar de cada coisa que vê. O altar montado no mausoléu do cemitério está <br>
            cercado por encapuzados, velas, símbolos e imagens que desafiariam a sanidade de qualquer pessoa. A proximidade traz cada vez mais o fedor de ferro, até que você é posto sob <br> 
            a mesa de pedra e sente o líquido viscoso e ainda quente da última vítima e passa a entender o que está acontecendo: você é o próximo sacrifício.`;
        });
    });
};

if (botaoDescerPorao) {

    botaoDescerPorao.addEventListener('mouseover', () => {
        fundoTela.src = '../assets/mansaoescadas.png';
    });
    botaoDescerPorao.addEventListener('mouseout', () => {
        fundoTela.src = '..,assets/mansaoescadas-porao.png';
    });
    botaoDescerPorao.addEventListener('click', function () {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `
        descendo ao Porão...
        <p>
        O cheiro de cera queimada e umidade preenche o ar enquanto você desce os últimos degraus para o porão. A luz fraca das velas tremula, criando sombras distorcidas nas <br>
        paredes de pedra irregular. No centro, uma mesa circular de pedra está cercada por fileiras de velas, todas acesas, como se estivessem esperando o início de algo terrível. 
        </p>
        <p>
        Símbolos gravados na pedra chamam sua atenção, mas o que realmente faz seu estômago revirar é o livro aberto, suas páginas manchadas de sangue seco. <br><br> Você se aproxima <br>
        com cautela, evitando as poças de cera que pingam do teto. Suas mãos tocam a superfície áspera da mesa, onde objetos de culto repousam, mas é uma frase, rabiscada apressadamente<br>
        em uma das paredes, que faz seu coração disparar: O ritual se completa no cemitério. <br><br>Uma sensação de urgência toma conta de você. <br><br>
        Está claro que algo está prestes a acontecer, e o cemitério parece ser o próximo passo inevitável.
       </p>
       <button id='descer-porao'>Prosseguir para o Porão</button>`;

        document.getElementById('descer-porao').addEventListener('click', function () {
            document.getElementById('opcoes-mansao').innerHTML = `
            <button id='encontrarItens'>Encontrar Itens</button>
            <button id='voltarMansao'>Voltar para a Mansão</button>
            <button id='voltarCemiterio'>Voltar para o Cemitério</button>`;
            fecharAlerta();
            document.getElementById('encontrarItens').addEventListener('click', function () {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `
            <p>O cheiro de cera queimada e umidade preenche o ar enquanto você desce os últimos degraus para o porão. A luz fraca das velas tremula, criando sombras distorcidas nas paredes de pedra irregular. 
            No centro, uma mesa circular de pedra está cercada por fileiras de velas, todas acesas, como se estivessem esperando o início de algo terrível. Símbolos gravados na pedra chamam sua atenção, mas 
            o que realmente faz seu estômago revirar é o livro aberto, suas páginas manchadas de sangue seco.</p> 
            <p>Você se aproxima com cautela, evitando as poças de cera que pingam do teto. Suas mãos tocam a superfície áspera da 
            mesa, onde objetos de culto repousam, mas é uma frase, rabiscada apressadamente em uma das paredes, que faz seu coração disparar: 
            "O ritual se completa no cemitério."</p> 
            <p>Uma sensação de urgência toma conta de você. Está claro que algo está prestes a acontecer, e o cemitério parece ser o próximo passo inevitável.</p> `;

            });

            document.getElementById('voltarMansao').addEventListener('click', function () {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `
            window.location.href = '../pages/mansao.index'`;

            });

            document.getElementById('voltarCemiterio').addEventListener('click', function () {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `
                        window.location.href = '../pages/cemiterio.index'`;
            });
        });


        
    });
};
