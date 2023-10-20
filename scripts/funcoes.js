/* CARREGA TODOS OS PRODUTOS */
export function carregaProdutos(listaProdutos, gridProdutos) {
    
    listaProdutos.forEach(produto => {
        const html = `<div class="option">
        <div class="op-content">
            <div class="op-img">
                <img src="${produto.imgPrincipal}" class="options-img">
            </div>
    
            <div class="op-info">
                <div class="op-text">
                    <p class="name">${produto.name}</p>
                    <p class="price">R$${produto.price}</p>
                </div>
                    <button type="button" id="${produto.cod}" class="buttom"><a href="productPage.html"><img src="images/carrinho.svg" class="options-button"></a></button>
            </div>
        </div>
    </div>`

    gridProdutos.innerHTML += html
        
    });
}