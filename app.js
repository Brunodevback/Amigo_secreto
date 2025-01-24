let amigos = [];
let nomesSorteados = [];
let lista = document.getElementById('listaAmigos');


// Verificação de nome válido + adição a array + adição a lista.
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();
    if (nome === '') {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nome)
        lista.innerHTML = (`${amigos}`)
        CriandoElementos();
        limpandoTextos();
    }
}
// Função para limpar a caixa de texto após adicionar um nome.
function limpandoTextos() {
    nome = document.getElementById('amigo');
    nome.value = "";
}
// Função para a criação de elementos para cada nome na lista.
function CriandoElementos() {
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);
    }
}
// Função para verificar nomes válidos e fazer o sorteio de um nome aleatório.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um nome para ser sorteado.")
    } else {
        let pessoaAleatoria = Math.floor(Math.random() * amigos.length)
        let mensagemSorteado = document.getElementById('resultado')
        mensagemSorteado.innerHTML = (`O amigo secreto sorteado é: ${amigos[pessoaAleatoria]}!`)
        reiniciarJogo()
    }
}
// Função para reiniciar o jogo após o sorteio.
function reiniciarJogo() {
    nome.value = ''
    lista.innerHTML = ''
    amigos = []
}