// 6 - converter o exercicio 5 (de callback) para promise

const list = [];
const databaseInsert = (data) => {
  // console.log('data', data);

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      list.push(data);
      // if (callback) {
      //  callback();
      // }
      resolve(list);
    }, 10);
  })
}

// USANDO THEN

  const promise = databaseInsert({meuobjeto: "a"});

  // define o que será feito quando a promise for resolvida
  promise.then((valorDoResolveDaPromise) => console.log('valorDoResolveDaPromise', valorDoResolveDaPromise));

  // define o que será feito caso a promise seja rejeitada;
  promise.catch((rejectDaPromise) => console.log('rejectDaPromise', rejectDaPromise))


/*
let promise = new Promise((resolve, reject)=> {
  let resultado = false;
  if (resultado) {
    resolve("deu certo");
  } else {
    reject("deu errado");
  }
});

promise.then((data) => console.log(`${data}`));
promise.catch((data) => console.log(`${data}`));
 

//não alterado
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

const parametro = {meuobjeto: "a"};
const funcaoCallback = () => (console.log(list))

databaseInsert(parametro, funcaoCallback); */



//  EXPLICAÇÃO VICTOR

/* const list = [];
const databaseInsert = (data) => {
  // console.log('data', data);

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      list.push(data);
      // if (callback) {
      //  callback();
      // }
      resolve(list);
    }, 10);
  })
}
 */
// USANDO THEN
/*
  const promise = databaseInsert({meuobjeto: "a"});

  // define o que será feito quando a promise for resolvida
  promise.then((valorDoResolveDaPromise) => console.log('valorDoResolveDaPromise', valorDoResolveDaPromise));

  // define o que será feito caso a promise seja rejeitada;
  promise.catch((rejectDaPromise) => console.log('rejectDaPromise', rejectDaPromise))
*/

// USANDO ASYNC/AWAIT
/* 
const funcaoAsync = async () => {
  // o await faz com que aguardemos o resolve da promise 
  const resolveDaPromise = await databaseInsert({meuobjeto: "a"});
  console.log('resolveDaPromise', resolveDaPromise);
}

funcaoAsync();


/***********************************************************************************
 
 
// tentativas anteriores

var list = [];

const databaseInsert = new dataBaseInsert (resolve, reject) { 
  setTimeout (function () {
   if(resolve){
    resolve = list.push(data);
    if (reject) {
      reject();
   }
    }
  }, 10);
};
///////////////////////
databaseInsert({meuobjeto: "a"}, () => (console.log(list))); 

promise
.then((data) => console.log(`${data}`))
.catch((data) => console.log(`${data}`));

************************************************************

 //curso exemplo

let promise = new Promise((resolve, reject)=> {
  let resultado = false;
  if (resultado) {
    resolve("deu certo");
  } else {
    reject("deu errado");
  }
});

promise.then((data) => console.log(`${data}`));
promise.catch((data) => console.log(`${data}`));  

*/