let button = document.getElementById('botao');
let imagemFixa = 'assets/escritorio.jpg';
let imagemTransitoria = 'assets/escritorio2.jpg';
let fundoTela = document.getElementById('escritorio');

button.addEventListener('mouseover', () => {
    fundoTela.src = imagemTransitoria;
});

button.addEventListener('mouseout', () => {
    fundoTela.src = imagemFixa;
});