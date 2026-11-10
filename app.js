const filmes = [];
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');

// CORREÇÃO: Seleciona a tag <main> pela classe onde a lista de filmes já é exibida
const feed = document.querySelector('.grid-filmes');

botao.addEventListener('click', () => {
    formulario.hidden = false;
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede de recarregar a página

    const filme = {
        titulo: formulario.elements.titulo.value,
        capa: formulario.elements.capa.value
    };
    filmes.push(filme); // Coloca o filme no array de filmes

    // Cria o container do filme mantendo o padrão visual CSS existente (.card-filme)
    const card = document.createElement('div');
    card.classList.add('card-filme');

    // Cria a tag da imagem
    const capa = document.createElement('img');
    capa.src = filme.capa;
    capa.alt = filme.titulo; // Usa o título inserido como texto alternativo da imagem

    // Insere a imagem dentro do card e o card no grid de filmes
    card.append(capa);
    feed.append(card);

    // Limpa o formulário e o esconde novamente
    formulario.reset();
    formulario.hidden = true;
});
