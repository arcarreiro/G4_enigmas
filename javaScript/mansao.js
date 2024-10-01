let botaoComecar = document.getElementById('comecar');
let imagemFixa = '../assets/mansao.webp';
let imagemTransitoria = '../assets/mansao2.webp';
let fundoTela = document.getElementById('mansao');
let quadroBotoes = document.getElementById('opcoes-home');

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

botaoComecar.addEventListener('click', () => {
    //trocar a imagem
    fundoTela.src = '../assets/mansaoescadas.webp'
    //adicionar botões
    quadroBotoes.innerHTML = `
    <button id="subirEscadas">Subir as escadas</button>
    <button id="descerPorao">Descer para o porão</button>`
    let botaoSubirEscadas = document.getElementById('subirEscadas');
    let botaoDescerPorao = document.getElementById('descerPorao');

    if (botaoSubirEscadas) {

        botaoSubirEscadas.addEventListener('mouseover', () => {
            fundoTela.src = '../assets/mansaoescadas-escada.webp';
        });
        botaoSubirEscadas.addEventListener('mouseout', () => {
            fundoTela.src = '../assets/mansaoescadas.webp';
        });
    }

    botaoSubirEscadas.addEventListener('click', function () {
        fundoTela.src = "../assets/mansaomesa.webp"
        quadroBotoes.innerHTML = ` <button id="investigar-comodo">Investigar o cômodo</button>`

        document.getElementById('investigar-comodo').addEventListener('click', () => {
            mostrarAlerta();
            document.getElementById('conteudo-modal').innerHTML = `
            <p>
            A subir as escadas...
            Ao subir as escadas, você se depara com um cômodo devastado pelo tempo. As paredes estão cobertas de rachaduras, e o teto parece prestes a desmoronar. O ar é denso e cheira a mofo, mas em meio a esse cenário de decadência, algo se destaca. Um livro, velho e empoeirado, está aberto sobre a mesa, como se tivesse sido manuseado recentemente. Estranhamente, a página em que ele está aberto está rasgada, faltando justo a parte mais crucial. Coincidência? Dificilmente. <br>
            Ao investigar o livro com mais atenção, as peças do quebra-cabeça começam a se encaixar. Corunas não é apenas uma cidade pacata; seus moradores veneram uma entidade antiga e maléfica. Os desaparecidos, na verdade, são sacrifícios realizados em nome dessa entidade sombria, entregues em rituais macabros.<br>
            Você descobre que existe uma maneira de impedir o ritual, de cortar o poder dessa entidade e salvar futuras vítimas. No entanto, outra escolha se apresenta. Confrontar os próprios moradores, aqueles que seguem cegamente essa prática, pode ser o único caminho para acabar de vez com essa seita.
            Agora, resta a decisão: tentar interromper o ritual em segredo ou encarar os moradores de Corunas e pôr um fim à devoção ao mal. </p>
            <button id='confrontar-moradores'>Confrontar os moradores</button>
            <button id='impedir-ritual'>Impedir o ritual</button>`;

            document.getElementById('confrontar-moradores').addEventListener('click', () => {
                fundoTela.src = '../assets/final2.webp';
                document.getElementById('conteudo-modal').innerHTML = `<p>Você decide que não pode mais ficar às sombras. Ao sair do prédio em ruínas, seu olhar encontra o dos moradores, que agora se reúnem na praça principal. Seus olhares frios e vazios denunciam que algo terrível está para acontecer. Determinado, você caminha em direção à multidão. Cada passo é pesado, e o silêncio da cidade só aumenta a sensação de perigo iminente. 

Ao chegar perto, você levanta a voz, revelando o que descobriu sobre o culto e os sacrifícios. As palavras ecoam pela praça, mas os rostos ao seu redor permanecem impassíveis. Então, alguém se move. Um dos líderes, com um sorriso perturbador, ergue a mão. Você percebe tarde demais a mudança de clima. O grupo se fecha ao seu redor, e os sussurros começam a soar como uma canção macabra. 

Antes que possa reagir, algo atinge a parte de trás da sua cabeça. Sua visão fica turva, o chão parece desmoronar sob seus pés, e a última coisa que vê são os rostos impenetráveis dos moradores, seus sorrisos pálidos se aproximando enquanto a escuridão toma conta. </p>`;
                quadroBotoes.innerHTML = `<button id='final2'>Encerrar</button>`;
                document.getElementById('final2').addEventListener('click', () => {
                    mostrarAlerta();
                    document.getElementById('conteudo-modal').innerHTML = `<p>Suas forças são quase inexistentes e sua visão e audição estão embaralhadas, o que faz você duvidar de cada coisa que vê. O altar montado no mausoléu do cemitério está cercado por encapuzados, velas, símbolos e imagens que desafiariam a sanidade de qualquer pessoa. A proximidade traz cada vez mais o fedor de ferro, até que você é posto sob a mesa de pedra e sente o líquido viscoso e ainda quente da última vítima e passa a entender o que está acontecendo: você é o próximo sacrifício. </p>
                <button onclick="window.location.href='/index.html'">Voltar à página inicial</button>`
                });
            });

            document.getElementById('impedir-ritual').addEventListener('click', () => {
                fecharAlerta();
                fundoTela.src = '../assets/final1.webp';
                quadroBotoes.innerHTML = `<button id="final1">Encerrar</button>`;
                document.getElementById('final1').addEventListener('click', () => {
                    mostrarAlerta();
                    document.getElementById('conteudo-modal').innerHTML = `<p>O silêncio que recai sobre Corunas é quase opressor. O ritual foi interrompido no último momento, quando você conseguiu destruir o altar central — o coração da conexão entre os moradores e a entidade. Com um golpe certeiro, você quebrou a relíquia que canalizava o poder maligno, e a energia sombria que permeava o local se dissipou em um grito silencioso. A entidade, privada de seu poder, lentamente recua para as sombras de onde veio. O ar, antes denso e carregado, agora parece mais leve, quase como se a própria cidade estivesse exalando alívio.<br>
                Você não tem certeza do que aconteceu com os moradores. Talvez a ruptura do ritual tenha quebrado o elo que os ligava àquela força sombria, ou talvez eles simplesmente voltem a suas vidas, sem jamais saberem o quão próximos estiveram do abismo. Mas isso não importa agora. O que importa é que você fez o que poucos teriam a coragem de fazer.<br>
                Com o peso do que vivenciou, você deixa Corunas para trás. A estrada de volta para casa parece mais longa, e as memórias daquelas noites terríveis, das descobertas e do perigo, ficam gravadas em sua mente. Há um misto de alívio e dúvida – o ritual foi interrompido, mas por quanto tempo? Esse tipo de mal pode realmente ser detido para sempre?<br>
                Ao chegar em casa, a familiaridade do lugar oferece um conforto que parecia distante. A noite está tranquila, e por um momento, você se permite acreditar que tudo acabou. Mas, mesmo no silêncio, você sabe que o mal que enfrentou em Corunas nunca desaparece completamente. Ele apenas espera.
                Você foi vitorioso desta vez. Mas a escuridão sempre observa... aguardando. </p>
                <button onclick="window.location.href='/index.html'">Voltar à página inicial</button>`;
                })
            })
        })
    })

    if (botaoDescerPorao) {

        botaoDescerPorao.addEventListener('mouseover', () => {
            fundoTela.src = '../assets/mansaoescadas-porao.webp';
        });
        botaoDescerPorao.addEventListener('mouseout', () => {
            fundoTela.src = '../assets/mansaoescadas.webp';
        });
    }

    botaoDescerPorao.addEventListener('click', () => {
        mostrarAlerta();
        document.getElementById('conteudo-modal').innerHTML = `<p>O cheiro de cera queimada e umidade preenche o ar enquanto você desce os últimos degraus para o porão. A luz fraca das velas tremula, criando sombras distorcidas nas paredes de pedra irregular. No centro, uma mesa circular de pedra está cercada por fileiras de velas, todas acesas, como se estivessem esperando o início de algo terrível. Símbolos gravados na pedra chamam sua atenção, mas o que realmente faz seu estômago revirar é o livro aberto, suas páginas manchadas de sangue seco.<br> 

Você se aproxima com cautela, evitando as poças de cera que pingam do teto. Suas mãos tocam a superfície áspera da mesa, onde objetos de culto repousam, mas é uma frase, rabiscada apressadamente em uma das paredes, que faz seu coração disparar: "O ritual se completa no cemitério."<br> 

Uma sensação de urgência toma conta de você. Está claro que algo está prestes a acontecer, e o cemitério parece ser o próximo passo inevitável.</p> `
        fundoTela.src = '../assets/mansaoporao.webp';
        quadroBotoes.innerHTML = `
            <button id="fugir">Abandonar a investigação</button>
            <button id="lutar">Tentar impedir o ritual no cemitério</button>`

        document.getElementById('fugir').addEventListener('click', () => {
            fecharAlerta();
            fundoTela.src = "../assets/final3.webp";
            quadroBotoes.innerHTML = `<button id='final3'>Encerrar</button>`;
            document.getElementById('final3').addEventListener('click', () => {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `<p>As sombras dos eventos recentes dançam em sua mente, enquanto você tenta se concentrar no que está à sua frente. As imagens dos rostos vazios, dos sussurros macabros e do altar sombrio o perseguem como fantasmas incansáveis. A cada gole, as visões se tornam mais vívidas, mais insuportáveis. O sangue nas paredes, os rituais grotescos, e as súplicas silenciosas dos desaparecidos ecoam em sua cabeça, deixando uma marca indelével na sua alma.<br>
                    Sentado à mesa, cercado por garrafas vazias, você se sente como um náufrago em um mar de desesperança. As memórias esmagadoras das noites passadas se misturam ao líquido amargo que desce pela sua garganta. Você tinha vindo a Corunas em busca de respostas, mas agora se vê preso em um pesadelo sem fim. A investigação que começou com curiosidade termina em um abismo de desespero, onde a única saída parece ser o esquecimento.
                    Enquanto a escuridão se aprofunda, você percebe que a fuga não será fácil. As visões não irão embora. E, em algum lugar lá fora, a cidade ainda sussurra os segredos que você não conseguiu desvendar. </p>
                    <button onclick="window.location.href='/index.html'">Voltar à página inicial</button>`
            });
        });
            document.getElementById('lutar').addEventListener('click', () => {
                mostrarAlerta();
                document.getElementById('conteudo-modal').innerHTML = `<p>Você decide que não pode mais ficar às sombras. Ao sair do prédio em ruínas, seu olhar encontra o dos moradores, que agora se reúnem na praça principal. Seus olhares frios e vazios denunciam que algo terrível está para acontecer. Determinado, você caminha em direção à multidão. Cada passo é pesado, e o silêncio da cidade só aumenta a sensação de perigo iminente.
                Ao chegar perto, você levanta a voz, revelando o que descobriu sobre o culto e os sacrifícios. As palavras ecoam pela praça, mas os rostos ao seu redor permanecem impassíveis. Então, alguém se move. Um dos líderes, com um sorriso perturbador, ergue a mão. Você percebe tarde demais a mudança de clima. O grupo se fecha ao seu redor, e os sussurros começam a soar como uma canção macabra.
                Antes que possa reagir, algo atinge a parte de trás da sua cabeça. Sua visão fica turva, o chão parece desmoronar sob seus pés, e a última coisa que vê são os rostos impenetráveis dos moradores, seus sorrisos pálidos se aproximando enquanto a escuridão toma conta. </p>`;
                fundoTela.src = '../assets/final2.webp';
                quadroBotoes.innerHTML = `<button id='final2'>Encerrar</button>`;
                document.getElementById('final2').addEventListener('click', () => {
                    mostrarAlerta();
                    document.getElementById('conteudo-modal').innerHTML = `<p>Suas forças são quase inexistentes e sua visão e audição estão embaralhadas, o que faz você duvidar de cada coisa que vê. O altar montado no mausoléu do cemitério está cercado por encapuzados, velas, símbolos e imagens que desafiariam a sanidade de qualquer pessoa. A proximidade traz cada vez mais o fedor de ferro, até que você é posto sob a mesa de pedra e sente o líquido viscoso e ainda quente da última vítima e passa a entender o que está acontecendo: você é o próximo sacrifício. </p>
                <button onclick="window.location.href='/index.html'">Voltar à página inicial</button>`
                });
            });
    });
});
