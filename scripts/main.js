const catalogPrincipal = [
    {
        cod: 1,
        name: "Girafa Esticadinha",
        price: 35.95,
        descricao: "A Girafa Esticadinha é um brinquedo sensorial que cativará a imaginação das crianças com sua ação rápida e dinâmica. Esta adorável girafa tem uma aparência amigável, com cores vibrantes e texturas interessantes que atraem os sentidos dos pequenos exploradores.",
        idade: "A partir de 9 meses",
        imgPrincipal: "./images/produts/p1/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 2,
        name: "",
        price: 79.95,
        descricao: "",
        itens: "1 girafa esticadinha",
        idade: "A partir de 6 meses",
        imgPrincipal: "./images/produts/p2/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 3,
        name: "Caixa de montar peças",
        price: 39.95,
        descricao: "A Caixa de Encaixar Formas é um brinquedo sensorial projetado para crianças em fase pré-escolar que oferece uma experiência educativa para o desenvolvimento cognitivo dos pequenos.",
        itens: "1 caixa sensorial, 6 formas diversas",
        idade: "A partir de 1 ano",
        imgPrincipal: "./images/produts/p3/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 4,
        name: "",
        price: 89.95,
        descricao: "",
        itens: "1 máquina de bolhas, 1 refil de sabão",
        idade: "Todas as idades",
        imgPrincipal: "./images/produts/p4/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 5,
        name: "Máquina de Bolhas Turbo",
        price: 49.95,
        descricao: "A Máquina de Bolhas Turbo é a maneira perfeita de criar uma atmosfera mágica e divertida em qualquer festa ou evento! Esta máquina é projetada para produzir um fluxo constante de bolhas de sabão em alta velocidade, proporcionando uma experiência encantadora e dinâmica para crianças e adultos.",
        itens: "1 pop it eletrônico, 2 pilhas tamanho AAA",
        idade: "A partir de 3 anos",
        imgPrincipal: "./images/produts/p5/principal.jpg", 
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 6,
        name: "Minhoca Dançarina",
        price: 25.95,
        descricao: "A Minhoca Dançarina é um brinquedo encantador que vai proporcionar momentos de diversão e aprendizado para as crianças. Esta amigável minhoeca é projetada para cativar os sentidos dos pequenos de uma forma única e dinâmica, enquanto estimula o desenvolvimento motor e sensorial.",
        imgPrincipal: "./images/produts/p6/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 7,
        name: "",
        price: 49.90,
        descricao: "",
        imgPrincipal: "./images/produts/p7/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 8,
        name: "",
        price: 49.90,
        descricao: "",
        imgPrincipal: "./images/produts/p8/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 9,
        name: "",
        price: 49.90,
        descricao: "",
        imgPrincipal: "./images/produts/p9/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 10,
        name: "",
        price: 49.90,
        descricao: "",
        imgPrincipal: "./images/produts/p10/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 11,
        name: "",
        price: 49.90,
        descricao: "",
        imgPrincipal: "./images/produts/p11/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    },
    {
        cod: 12,
        name: "Pop It Eletrônico",
        price: 59.95,
        descricao: "O Pop It Eletrônico Pulsar é uma versão moderna e eletrônica do famoso brinquedo de estouro de bolhas que as crianças adoram! Com uma reviravolta tecnológica, este brinquedo oferece uma experiência tátil emocionante, com luzes coloridas e efeitos sonoros que tornam a brincadeira ainda mais envolvente e divertida.",
        imgPrincipal: "./images/produts/p12/principal.jpg",
        imgExtra: "./images/produts/p1/extra.jpg",
        imgInfos: "./images/produts/p1/infos.jpg",
        imgModelos: "./images/produts/p1/modelos.jpg"
    }  
]

const gridProdutos = document.querySelector("#options-container")

for (let index = 0; index < catalogPrincipal.length; index++) {
    const element = catalogPrincipal[index];
    const produto = `<div class="option">
    <div class="op-content">
        <div class="op-img">
            <img src="${element.imgPrincipal}" class="options-img">
        </div>

        <div class="op-info">
            <div class="op-text">
                <p class="name">${element.name}</p>
                <p class="price">R$${element.price}</p>
            </div>
                <button type="button" class="buttom"><a href="productPage.html"><img src="images/carrinho.svg" class="options-button"></a></button>
        </div>
    </div>
</div>`
    gridProdutos.innerHTML += produto
}


    