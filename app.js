// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco antes e depois

    // Valida se o nome está vazio
    if (!nomeAmigo) {
        alert("Por favor, insira o nome de um amigo antes de adicionar.");
        inputAmigo.focus(); // Mantém o foco no campo de input
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome "${nomeAmigo}" já está na lista!`);
        inputAmigo.value = ""; // Limpa o campo para facilitar novas inserções
        inputAmigo.focus(); // Foco no input para tentar outro nome
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    amigos.push(nomeAmigo);
    atualizarListaAmigos();

    // Limpa o campo e foca novamente para facilitar a inserção de novos nomes
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista para recriá-la

    // Recria a lista com os amigos armazenados no array
    amigos.forEach(amigo => {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo; // Adiciona o nome como texto
        listaAmigos.appendChild(novoAmigo); // Adiciona o item à lista
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Verifica se há amigos para sortear
    if (amigos.length === 0) {
        alert("Não é possível sortear. Adicione amigos à lista primeiro.");
        return;
    }

    // Realiza o sorteio de forma aleatória
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong> 🎉`;
}

// Função para detectar a tecla Enter
function lidarComEnter(event) {
    if (event.key === "Enter") {
        adicionarAmigo(); // Adiciona o amigo quando Enter for pressionado
    }
}

// Configura os eventos ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keydown', lidarComEnter); // Detecta Enter no campo de input
});
