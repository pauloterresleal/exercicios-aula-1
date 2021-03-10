/* 4 - Verficar se eles usaram map. filter, e se não refatorar o 3 e usar
CALLBACK */

/* 3 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
    Na lista "categoria de produtos" adicionar para cada uma 3 produtos (com id, nome e preço)
    Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
    Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
    Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
    Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
MAP, FILTER */

//3 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
const categoria = [];

categoria.push({ id: 1, nome: "Higiene", status: false });
categoria.push({ id: 2, nome: "Saúde", status: false });
categoria.push({ id: 3, nome: "Ferramentas", status: true });
categoria.push({ id: 4, nome: "Eletrônicos", status: true });
categoria.push({ id: 5, nome: "Eletrodomésticos", status: true });

//Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos
const produtos = [];

produtos.push(
  { idCat: 1, id: 1, nome: "shampoo", price: 40 },
  { idCat: 1, id: 2, nome: "sabonete", price: 3 },
  { idCat: 1, id: 3, nome: "desodorante", price: 15 },

  { idCat: 2, id: 1, nome: "remédio", price: 230 },
  { idCat: 2, id: 2, nome: "gase", price: 7 },
  { idCat: 2, id: 3, nome: "luva cirurgica", price: 30 },

  { idCat: 3, id: 1, nome: "furadeira", price: 299 },
  { idCat: 3, id: 2, nome: "alicate", price: 8 },
  { idCat: 3, id: 3, nome: "chave de fenda", price: 9 },

  { idCat: 4, id: 1, nome: "teclado", price: 230 },
  { idCat: 4, id: 2, nome: "tela", price: 990 },
  { idCat: 4, id: 3, nome: "mouse", price: 120 },

  { idCat: 5, id: 1, nome: "batedeira", price: 230 },
  { idCat: 5, id: 2, nome: "galadeira", price: 990 },
  { idCat: 5, id: 3, nome: "liquidificador", price: 220 }
);

//Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".

categoria.forEach(function (cat) {
  if (cat.nome === "Eletrônicos") console.log(cat.id + " - " + cat.nome);
});

console.log("-----------------");

produtos.forEach(function (prods) {
  if (prods.idCat == 4) console.log(prods.nome);
});

console.log("-----------------");

//Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.

produtos.forEach((item) => {
  if (item.price < 10) {
    console.log(categoria.find((categ) => categ.id == item.idCat).nome);
  }
});
console.log("-----------------");
//Percorrer a lista e mostrar no console só os produtos das categorias desativadas.

produtos.forEach((item) => {
  if (categoria.find((categ) => categ.id == item.idCat).status == false) {
    console.log(item.nome);
  }
});

console.log("-----------------");
//Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
categoria.map((categ) => {
  //let count = 0;
  /*   produtos.forEach((item) => {
    if (item.idCat == categ.id) {
      count++;
    } 
  }); */
  const produtosFiltrados = produtos.filter((prod) => prod.idCat == categ.id);
  // console.log("produtosFiltrados");
  // console.table(produtosFiltrados.length);
  // categ.quantidade = count;

  const result = {
    idCategoria: categ.id,
    nomeCategoria: categ.nome,
    numProdutos: produtosFiltrados.length,
  };

  console.table(result);

  return result;
});
console.log(categoria);
