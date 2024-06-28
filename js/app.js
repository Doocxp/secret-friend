let amigos = [];

        // Adiciona algum amigo
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
        // Validação para informar o nome do amigo
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
    }

        // Verifica se o nome do amigo já está na lista de amigos
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
        // Organizando a linta de amigos e atualizando os participantes
    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

        // Função para sortear os participantes (amigos)
function sortear() {
        // Aqui faz a validação para quantidade de participantes (Pelo menos 4 participantes)
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 participantes!');
        return;
    }
        // Aqui faz o sorteio dos participantes (amigos)
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }
}

        // Função para embaralhar os participantes (amigos) no final
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via String
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

        // Função para reiniciar a lista de amigos e a lista de sorteio
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}