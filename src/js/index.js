/*
    OBJETIVO: quando clicar no botão tem que msotrar a imagem de fundo correspondente


    passo 1 - dar um jeito de pegar o elemento HTML dos botões

    passo 2 - dar um jeito de identificar o clique do usuário no botão

    passo 3 - demarcar o botão selecionado anteriormente

    passo 4 - marcar o botão clicado como se estivesse selecionado

    passo 5 - esconder a imagem de fundo anterior

    passo 6 - faer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - demarcar o botão selecionado anteriormente
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        // passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtivaDeFundo();
 
        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);

    })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('conteudo', 'selecionado');
}

