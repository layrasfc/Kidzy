import { catalogPrincipal } from "../scripts/products.js";
import { carregaProdutos } from "../scripts/funcoes.js";
import { handleClick } from "../scripts/funcoes.js";

let listaProdutosDestaque = catalogPrincipal.filter(produto => produto.cod < 5);
let gridDestaque = document.querySelector("#options-home");

carregaProdutos(listaProdutosDestaque, gridDestaque)
handleClick()
