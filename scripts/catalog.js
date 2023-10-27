import { catalogPrincipal } from "../scripts/products.js";
import { carregaProdutos, handleClick } from "../scripts/funcoes.js";

let listaProdutosCatalogo = catalogPrincipal
let gridCatalogo = document.querySelector("#options-container")

carregaProdutos(listaProdutosCatalogo, gridCatalogo);
handleClick()