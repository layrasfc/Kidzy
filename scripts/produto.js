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


function showAlert(message) {
    const alertBox = document.createElement("div"); 
    alertBox.classList.add("alert"); 
    alertBox.innerHTML = message; 

    const okButton = document.createElement("div");
    okButton.classList.add("buttonAlert");
    okButton.textContent = "Concluir";

    
    okButton.addEventListener('click', () => {
        alertBox.parentNode.removeChild(alertBox); 
    });

    alertBox.appendChild(okButton);
    document.body.appendChild(alertBox);
}
  
botaoComprar.addEventListener('click', () => {
    let quantidade = parseInt(document.querySelector("div.quntd-p input").value); // Get the quantity from input
    let newProduto = {...produto, quantidade}; // Create a new product object with updated quantity
    showAlert("Item adicionado ao carrinho!"); // Show alert message
    sacolaCompras.push(newProduto); // Add new product to sacolaCompras array
    localStorage.setItem('sacolaCompras', JSON.stringify(sacolaCompras)); // Save sacolaCompras to localStorage
    console.log(sacolaCompras); // Log sacolaCompras array
  });