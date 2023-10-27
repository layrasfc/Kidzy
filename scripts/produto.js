import { catalogPrincipal } from "./products.js";

let id =localStorage.getItem('prodId')

/* Procurar todos que tem a ID */
let produto = catalogPrincipal.find(produto => produto.cod == id)
console.log(produto)

let selecaoProduto = document.querySelector("#product-container")

let html = `<div class="product-image-container">
<div class="imagens-product">
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
            <p class="espec-product">Itens: ${produto.itens}</p>
            <p class="espec-product">Idade: ${produto.idade}</p>
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


/* Levar o carrinho */
let listaCompras = json.parse(localStorage.getItem(listaCompras))
console.log(listaCompras)
let botaoComprar = document.querySelector("#adicionar-buttom")

botaoComprar.addEventListener('click',() => {
    listaCompras.push(produto)
    localStorage.setItem('listaCompras', listaCompras, JSON.stringify(listaCompras))
})