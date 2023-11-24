let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))

let pedidos = JSON.parse(localStorage.getItem("pedido"))
if (pedidos == null){
    pedidos = []
}

let cartList = document.querySelector('ul')


sacolaCompras.forEach(item => {
    let html = `
    <li class="carrinho-option" id="${item.cod}">
        <div class="carrinho-option-img">
            <img src="${item.imgPrincipal}" alt="" srcset="">
        </div>
        <div class="carrinho-option-text">
            <h5>${item.name}</h5>
            <p>Idade: ${item.idade}</p>
        </div>
        <div class="qtd-carrinho">
            <button class="qntd-button"><img src="images/Mais.svg" alt=""></button>
                <p>${item.quantidade}</p>
            <button class="qntd-button"><img src="images/Menos.svg" alt="" srcset=""></button>
        </div>

        <div class="valor-carrinho">
            <p>R$${item.price}</p>
        </div>

        <div class="excluir-carrinho">
            <img src="images/Excluir.svg" alt="" srcset="">
        </div>
    </li>`
cartList.innerHTML += html
});



let botaoDel = document.querySelectorAll("div.excluir-carrinho")
botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
    let item = event.target.parentElement.parentElement
    cartList.removeChild(item)
    console.log(item.id)
    let index = sacolaCompras.findIndex( i => i.cod == item.id)
    sacolaCompras.splice(index,1)
    console.log(sacolaCompras)
    localStorage.setItem('sacolaCompras', JSON.stringify(sacolaCompras))
}
))

let finalizar = document.querySelectorAll("div.finalizar-compra-buttom")
finalizar.forEach(botao => botao.addEventListener('click', ()=> {
    let codPedido = pedidos.length
    if (pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: sacolaCompras,
        id: codPedido
    }
    pedidos.push(pedido)
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
    alert('Compra finalizada!')
}))


