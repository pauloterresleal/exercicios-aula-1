// 7 - converter o exercicio 6 para async await

const list = [];
const databaseInsert = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      list.push(data);      
      resolve(list);
    }, 10);
  })
}

const funcaoAsync = async () => {
  const resolveDaPromise = await databaseInsert({meuobjeto: "a"});
  console.log('resolveDaPromise', resolveDaPromise);
}
funcaoAsync();