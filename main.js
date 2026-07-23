// Banco de dados em memória (simulado)
const database = {
  produtos: [],
  categorias: [],
  marcas: []
};

// Função para adicionar produto
function addProduto(nome, preco, categoria, marca) {
  const produto = {
    id: database.produtos.length + 1,
    nome: nome,
    preco: preco,
    categoria: categoria,
    marca: marca,
    dataCriacao: new Date()
  };
  
  database.produtos.push(produto);
  console.log("Produto adicionado com sucesso!", produto);
  return produto;
}

// Função para listar produtos
function listProdutos() {
  console.log("Lista de produtos:");
  return database.produtos;
}

// Função para buscar produto por ID
function getProduto(id) {
  return database.produtos.find(p => p.id === id);
}

// Função para remover produto
function removeProduto(id) {
  const index = database.produtos.findIndex(p => p.id === id);
  if (index > -1) {
    const removido = database.produtos.splice(index, 1);
    console.log("Produto removido:", removido[0]);
    return true;
  }
  return false;
}

module.exports = {
  addProduto,
  listProdutos,
  getProduto,
  removeProduto,
  database
};