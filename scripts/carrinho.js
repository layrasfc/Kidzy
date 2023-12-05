
let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
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
            <p>${item.quantidade}</p>
        </div>

        <div class="valor-carrinho">
            <p>R$${item.price * item.quantidade}</p>
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

let finalizar = document.querySelectorAll("button#finalizar-compra-buttom")


finalizar.forEach(botao => botao.addEventListener('click', ()=> {
    let endereco = {
        nome: document.querySelector("input#nome").value,
        logradouro: document.querySelector("input#logradouro").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector('input#cidade').value,
        estado: document.querySelector('input#estado').value
    }

    let codPedido = pedidos.length + 1
    if (pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: sacolaCompras,
        endereco: endereco,
        id: codPedido
    }

    alert('Compra finalizada!')
    pedidos.push(pedido)
    console.log(pedidos)
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
    
}))


