/* CARREGA TODOS OS PRODUTOS */
export function carregaCard(listaProdutos, gridProdutos) {
    
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

export function pegarCodProduto(){
    let itens = document.querySelectorAll("div.option")
    console.log(itens)
    itens.forEach(item => item.addEventListener("click",(evento)=>{
        /* Pegar o ID ao clicar*/
        let prodId = evento.target.id
        localStorage.setItem('prodId', prodId) /* Guardar a ID na página de produto, localStorage*/
    }))
}

export function findProduto(listaProdutos, id){
    let produto = listaProdutos.find(produto => produto.cod == id)
    return produto
}

export function carregaPageProduto(produto, selecaoProduto){
    let html = `<div class="product-image-container">
<div class="imagens-product">
    <div class="tam-img"><img src="${produto.imgPrincipal}" alt=""></div>
    <div class="tam-img"><img src="${produto.imgExtra}" alt=""></div>
    <div class="tam-img"><img src="${produto.imgInfo}" alt=""></div>
    <div class="tam-img"><img src="${produto.imgModelo}" alt=""></div>
</div>

<div class="principal-img">
        <img src="${produto.imgPrincipal}" alt="">
</div>
</div>

<div class="product-text-container">
<div class="section-product">
    <div class="info-product">
    <div class="text-product">
        <div class="info-product">
            <h1>${produto.name}</h1>
            <div class="text-p">
            <p class="section-text">Descrição</p>
            <p class="descrition-product">${produto.descricao}</p>
            </div>

            <div class="text-p">
            <p class="espec-product">Idade: ${produto.idade}</p>
            </div>

            <div class="quntd-p">
                <p>Quantidade</p>
                <input type="number" name="" id="" value="1">
            </div>
        </div>

        </div>
    </div>

    <div class="continuar-compra">
        <div class="valor">
            <p class="section-text">Preço</p>
            <h2>R$${produto.price}</h2>
        </div>
            
        <div class="adicionar">
            <button type="button" class="buttom" id="adicionar-buttom">Adicionar ao carrinho</button>
        </div>
    </div>
    </div>
</div>
</div>`
selecaoProduto.innerHTML = html
}