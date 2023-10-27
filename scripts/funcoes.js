/* CARREGA TODOS OS PRODUTOS */
export function carregaProdutos(listaProdutos, gridProdutos) {
    
    listaProdutos.forEach(produto => {
        const html = `<div class="option" id="${produto.cod}">
        <a href="./productPage.html">
        <div class="op-content" id="${produto.cod}">
            <div class="op-img">
                <img src="${produto.imgPrincipal}" class="options-img" id="${produto.cod}">
            </div>
    
            <div class="op-info" id="${produto.cod}">
                <div class="op-text">
                    <p class="name">${produto.name}</p>
                    <p class="price">R$${produto.price}</p>
                </div>
                    <button type="button" class="buttom-product" id="${produto.cod}" ><img src="images/carrinho.svg" class="options-button" id="${produto.cod}"></button>
            </div>
        </div>
        </a>
    </div>`

    gridProdutos.innerHTML += html
        
    });
}


export function handleClick(){
    let itens = document.querySelectorAll("div.option")
    console.log(itens)
    itens.forEach(item => item.addEventListener("click",(evento)=>{
        /* Pegar o ID ao clicar*/
        let prodId = evento.target.id
        localStorage.setItem('prodId', prodId) /* Guardar a ID na página de produto, localStorage*/
    }))
}