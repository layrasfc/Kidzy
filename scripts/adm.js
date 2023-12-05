let data = JSON.parse(localStorage.getItem("pedidos"));
const resultadoDiv = document.getElementById('resultado');

data.forEach(pedido => {
    const informacoes = document.createElement("div");
    informacoes.className = "titulo-pedido";

    const div = document.createElement("div")

    div.innerHTML += `<h2 class="itens-pedido">> Itens do Pedido ${pedido.id}</h2>`;
    div.innerHTML += `<h3 class="nome-pedido">Cliente: ${pedido.endereco.nome}</h3>`;
    informacoes.appendChild(div)
    informacoes.innerHTML += `<div class="excluir-pedido"><img src="/images/Excluir.svg"></div>`;
    resultadoDiv.appendChild(informacoes);
    
    pedido.itens.forEach(item => {
        const infoPedido = document.createElement("div");
        infoPedido.className = "info-pedidos-container";
    
        infoPedido.innerHTML += `<p class="info-pedido">Título: ${item.name}</li>`;
        infoPedido.innerHTML += `<p class="info-more-pedido">Quantidade: ${item.quantidade}</li>`;
        infoPedido.innerHTML += `<p class="info-more-pedido">Preço: $${item.price.toFixed(2)}</li>`;
        resultadoDiv.appendChild(infoPedido);
        resultadoDiv.innerHTML += `<hr class="separador-pedido">`
    });
});

