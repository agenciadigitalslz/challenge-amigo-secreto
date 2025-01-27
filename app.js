function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim(); // Remove espaços extras
    const listaAmigos = document.getElementById('listaAmigos');

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o nome já está na lista
    const nomesExistentes = Array.from(listaAmigos.children).map(li => li.textContent);
    if (nomesExistentes.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Cria um novo item na lista
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(novoAmigo);

    // Limpa o campo de input
    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const amigos = listaAmigos.children;

    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    // Sorteia um índice aleatório e exibe o nome correspondente
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado].textContent;

    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}
