let button = document.getElementById('comecar');
let imagemFixa = '../assets/mansao.png';
let imagemTransitoria = '../assets/mansao2.png';
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

let imgteste = '../assets/mansaoescadas.png';
let botao = document.getElementById('comecar');
botao.addEventListener('click', () => {
    imagemFixa = imgteste;
    fundoTela.src = imgteste;

    //remover o botao entrar na mansao.
    botao.remove();

    //adicionar dois novos botoes
    adicionarNovosBotoes();
});

function adicionarNovosBotoes() {
    let rodape = document.getElementById('opcoes-mansao');
    //criando subir escadas
    let botao1 = document.createElement('button');
    botao1.innerHTML = 'Subir as Escadas';
    botao1.addEventListener('click', () => {
        //indexando texto modal
        trocarImgERmvBotoes('../assets/mansaomesa.png',
            'Ao subir as escadas, você se depara com um cômodo devastado pelo tempo. As paredes estão cobertas de rachaduras, e o teto parece prestes a desmoronar. O ar é denso e cheira a mofo, mas em meio a esse cenário de decadência, algo se destaca. Um livro, velho e empoeirado, está aberto sobre a mesa, como se tivesse sido manuseado recentemente. Estranhamente, a página em que ele está aberto está rasgada, faltando justo a parte mais crucial. Coincidência? Dificilmente. <br><br> Ao investigar o livro com mais atenção, as peças do quebra-cabeça começam a se encaixar. Corunas não é apenas uma cidade pacata; seus moradores veneram uma entidade antiga e maléfica. Os desaparecidos, na verdade, são sacrifícios realizados em nome dessa entidade sombria, entregues em rituais macabros. <br><br> Você descobre que existe uma maneira de impedir o ritual, de cortar o poder dessa entidade e salvar futuras vítimas. No entanto, outra escolha se apresenta. Confrontar os próprios moradores, aqueles que seguem cegamente essa prática, pode ser o único caminho para acabar de vez com essa seita. <br><br> Agora, resta a decisão: tentar interromper o ritual em segredo ou encarar os moradores de Corunas e pôr um fim à devoção ao mal.');
        //alert('Subir escadas');
    });

    //criando entrar porao
    const botao2 = document.createElement('button');
    botao2.innerHTML = 'Entrar no Porão';
    botao2.addEventListener('click', () => {
        //indexando texto modal
        trocarImgERmvBotoes('../assets/mansaoporao.png',
            '<strong>Explorar o Porão</strong><br><br><br>O cheiro de cera queimada e umidade preenche o ar enquanto você desce os últimos degraus para o porão. A luz fraca das velas tremula, criando sombras distorcidas nas paredes de pedra irregular. No centro, uma mesa circular de pedra está cercada por fileiras de velas, todas acesas, como se estivessem esperando o início de algo terrível. Símbolos gravados na pedra chamam sua atenção, mas o que realmente faz seu estômago revirar é o livro aberto, suas páginas manchadas de sangue seco. <br><br> Você se aproxima com cautela, evitando as poças de cera que pingam do teto. Suas mãos tocam a superfície áspera da mesa, onde objetos de culto repousam, mas é uma frase, rabiscada apressadamente em uma das paredes, que faz seu coração disparar: O ritual se completa no cemitério. <br><br>Uma sensação de urgência toma conta de você. Está claro que algo está prestes a acontecer, e o cemitério parece ser o próximo passo inevitável.');
               // alert('Entrar no Porão');
    });

    //adicionar os  botoes
    rodape.appendChild(botao1);
    rodape.appendChild(botao2);
}


//funcao quando sobe as escadas
function trocarImgERmvBotoes(novaImagem ,novoTextoModal) {
    // Trocar a imagem de fundo
    fundoTela.src = novaImagem;

    // Remover os botões existentes
    const rodape = document.getElementById('opcoes-mansao');
    rodape.innerHTML = ''; // Limpa todos os botões

    // Adicionar dois novos botões
    adicionarMaisBotoes();

    // Atualizar o texto do modal
    const modalTexto = document.getElementById('modal-texto');
    modalTexto.inert = novoTextoModal;
}

function adicionarMaisBotoes() {
    const rodape = document.getElementById('opcoes-mansao');

    // Criar botão Encerrar ritual
    const botao3 = document.createElement('button');
    botao3.innerHTML = 'Encerrar Ritual';
    botao3.addEventListener('click', () => {
        alert('Encerrar Ritual');
    });

    // Criar botão Encarar moradores
    const botao4 = document.createElement('button');
    botao4.innerHTML = 'Encarar Moradores';
    botao4.addEventListener('click', () => {
        alert('Encarar Moradores');
    });

    // Adicionar os botões no rodapé
    rodape.appendChild(botao3);
    rodape.appendChild(botao4);
}



function adicionarMaisBotoesPorao() {
    const rodape = document.getElementById('opcoes-mansao');
    
    // Cria botão encontrar itens
    const botao5 = document.createElement('button');
    botao5.innerHTML = 'Encontrar Itens';
    botao5.addEventListener('click', () => {
        alert('Encontrar Itens');
    });

    // Cria botão voltar casa abandonada
    const botao6 = document.createElement('button');
    botao6.innerHTML = 'Voltar para Casa Abandonada';
    botao6.addEventListener('click', () => {
        alert('Voltar para Casa Abandonada');
    });
    
    // Cria botão voltar ao cemiterio
    const botao7 = document.createElement('button');
    botao7.innerHTML = 'Voltar ao Cemiterio';
    botao7.addEventListener('click', () => {
        alert('Voltar ao Cemitério');
    });
    // Adicionar os botões no rodapé
    rodape.appendChild(botao5);
    rodape.appendChild(botao6);
    rodape.appendChild(botao7);
};
//funcao quando entra no porao
function trocarImgERmvBotoesPorao(novaImagem ,novoTextoModal)  {
    // Trocar a imagem de fundo
    fundoTela.src = novaImagem;

    // Remover os botões existentes
    const rodape = document.getElementById('opcoes-mansao');
    rodape.innerHTML = ''; // Limpa todos os botões

    // Adicionar 3 novos botões
    adicionarMaisBotoesPorao();

    // Atualizar o texto do modal
    const modalTexto = document.getElementById('modal-texto');
    modalTexto.innerHTML = novoTextoModal;
};


//modal
document.addEventListener('DOMContentLoaded', function () {
    const botaoAbrirAlerta = document.getElementById('comecar');
    const botaoFecharAlerta = document.getElementById('fechar-modal-mansao');
    const alertaModal = document.getElementById('alerta-modal-mansao');
    const fundoEmbacado = document.getElementById('fundo-embacado-mansao');

    // Função para abrir o modal
    function mostrarAlerta() {
        alertaModal.style.display = 'block';
        fundoEmbacado.style.display = 'block';
        document.body.style.overflow = 'hidden';
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
