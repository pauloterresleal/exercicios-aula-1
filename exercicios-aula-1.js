/* 1 - Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
    Percorrer a lista e mostrar no console só o nome da categoria.
    Percorrer a lista e mostrar no console só a categoria "Eletrônicos". */

    const categoria = [];

    categoria.push({ id: 1, nome: "Higiene" });
    categoria.push({ id: 2, nome: "Saúde" });
    categoria.push({ id: 3, nome: "Ferramentas" });
    categoria.push({ id: 4, nome: "Eletrônicos" });
    categoria.push({ id: 5, nome: "Eletrodomésticos" });
    
    const nomecat = categoria.map((cat) => console.log(cat.nome));
    
    const findCategoria = categoria.find(function(categoria){ 
      return categoria.nome === 'Eletrônicos';
    });

    console.log(findCategoria); 