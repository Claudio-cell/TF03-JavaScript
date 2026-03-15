console.log("Inicio do Tf03.js\n");

const carro = {
    
    nome: "911 GT3",
    marca: "Porsche",
    preco: "3.5M",

    rivais: [
        { nome: "Ferrari", preco: "2.8M" },
        { nome: "Mustang", preco: "1.2M" },
        { nome: "Tesla", preco: "1.0M" }
    ]

};

console.log(carro); 
console.log("Objeto principal criado e uso de array dentro do objeto \n\n");
console.log("________________________________________________________\n\n")

//////////////////////////////////////////////////////

console.log("Propriedades do objeto com for...in\n");

for (let propriedades in carro) {
    console.log(propriedades + ":", carro[propriedades]);
}

console.log("Rivais com for...of:\n");

for (let rival of carro.rivais) {
    console.log(rival.nome, "-", rival.preco);
}

////////////////////////////////////////////////////////////////////////////////

console.log("________________________________________________________\n\n");

console.log("Comparação entre tipos de referência\n");

const carroA = { nome: "911 GT3" };
const carroB = { nome: "911 GT3" };

console.log("carroA === carroB?", carroA === carroB);

console.log("________________________________________________________\n\n");

//////////////////////////////////////////////////////////////////////////////

console.log("Cópia por referência:\n");

const copiaReferencia = carro;

copiaReferencia.nome = "911 gt3";

console.log("Nome no objeto original:", carro.nome);
console.log("Nome na cópia:", copiaReferencia.nome);

console.log("________________________________________________________\n\n");

//////////////////////////////////////////////////////////////////////////////

console.log("Cópia usando Spread Operator:\n");

const copiaCarro = { ...carro };

copiaCarro.marca = "Ferrari";

console.log("Marca do objeto original:", carro.marca);
console.log("Marca da cópia:", copiaCarro.marca);

console.log("________________________________________________________\n\n");

//////////////////////////////////////////////////////////////////////////////

console.log("Objeto convertido para JSON:\n");

const carroJSON = JSON.stringify(carro);

console.log(carroJSON);






