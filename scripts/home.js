import { catalogoProdutos } from "./dados.js";
import { carregaCard, pegarCodProduto } from "../scripts/funcoes.js";

let listaProdutosDestaque = catalogoProdutos.filter(produto => produto.cod < 5);
let gridDestaque = document.querySelector("#options-home");

carregaCard(listaProdutosDestaque, gridDestaque)
pegarCodProduto()
