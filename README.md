# exercicios-aula-1

Exercicio (tem que ser criados dados que supram as condições)
1 - Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
    Percorrer a lista e mostrar no console só o nome da categoria.
    Percorrer a lista e mostrar no console só a categoria "Eletrônicos".
2 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
    Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos
    Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
    Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
    Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
    Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
3 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
    Na lista "categoria de produtos" adicionar para cada uma 3 produtos (com id, nome e preço)
    Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
    Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
    Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
    Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
MAP, FILTER
4 - Verficar se eles usaram map. filter, e se não refatorar o 3 e usar
CALLBACK
5 - Corrigir as duas últimas linhas para mostrar a lista corretamente
///////////////////////
var list = []
const databaseInsert = function (data, callback) {
    setTimeout(function () {
        list.push(data);
        if (callback) {
            callback();
        }
    }, 0);
};
///////////////////////
databaseInsert({meuobjeto: "a"});
console.log("lista: ", list);