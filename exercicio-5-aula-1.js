// 5 - Corrigir as duas últimas linhas para mostrar a lista corretamente
///////////////////////
var list = [];

const databaseInsert = function (data, callback) {
  setTimeout(function () {
    list.push(data);
    if (callback) {
      callback();
    }
  }, 10);
};
///////////////////////
databaseInsert({meuobjeto: "a"}, () => (console.log(list)));


/***********************
// first-class functions
// https://developer.mozilla.org/pt-BR/docs/Glossary/First-class_Function

// function teste() {
//   console.log("Roda aqui callback", list);
// }

//const teste = function testFunction() {
//  console.log("Roda aqui callback", list);
//};

// const teste = () => {
//     console.log("Roda aqui callback", list);
// };

//databaseInsert({ meuobjeto: "a" }, teste);
