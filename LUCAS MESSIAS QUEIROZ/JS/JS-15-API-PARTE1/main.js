// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    // console.log(url_api);
    // Função fetch para buscar dados na API
    fetch(url_api, {
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            document.getElementById('json_aqui').innerText =
                JSON.stringify(data);
            // console.log(data.message)
            let imagem = `
    <img class="rounded img-fluid" src="${data.message}" />
    `;
            // Insere a imagem no elemento HTML com id imagem_aqui
            document.querySelector('#imagem_aqui').innerHTML = imagem;
        });
}

fetch(url).then("receber o JSON").then("Trata o JSON e mostrar as informações em tela para o usuario").catch("cactvh é para tratar erros retornados pela API")
