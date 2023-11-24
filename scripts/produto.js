import { catalogoProdutos } from "./dados.js";
import { findProduto, carregaPageProduto } from "./funcoes.js";

let id =localStorage.getItem('prodId')

let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))
if (sacolaCompras == null){
    sacolaCompras = []
}

let produto = findProduto(catalogoProdutos, id)
let selecaoProduto = document.querySelector("#product-container")

carregaPageProduto(produto, selecaoProduto)
let botaoComprar = document.querySelector("#adicionar-buttom")
console.log(botaoComprar)


botaoComprar.addEventListener('click', ()=>{
    let quantidade = parseInt(document.querySelector("div.quntd-p input").value)
    let newProduto = {...produto, quantidade}
    alert("Item adicionado ao carrinho!")
    sacolaCompras.push(newProduto)
    localStorage.setItem('sacolaCompras', JSON.stringify(sacolaCompras))
    console.log(sacolaCompras)
})
