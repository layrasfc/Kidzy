import { catalogoProdutos } from "./dados.js";
import { carregaCard, pegarCodProduto } from "./funcoes.js";


let gridTodosProdutos = document.querySelector("#options-container")
carregaCard(catalogoProdutos, gridTodosProdutos)
pegarCodProduto()
