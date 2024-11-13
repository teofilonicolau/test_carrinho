// Define a classe CarrinhoDeCompras para gerenciar um carrinho de compras
class CarrinhoDeCompras {
    constructor() {
        // Inicializa uma lista vazia para armazenar os produtos
        this.produtos = [];
    }

    // Metodo para adicionar um produto ao carrinho
    adicionarProduto(nome, preco, quantidade) {
        // Procura se o produto já existe no carrinho, baseado no nome
        const produtoExistente = this.produtos.find(produto => produto.nome === nome);
        
        // Se o produto js estiver no carrinho, incrementa a quantidade
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            // Caso contrario, adiciona o novo produto com nome, preço e quantidade especificados
            this.produtos.push({ nome, preco, quantidade });
        }
    }

    // Metodo para remover um produto do carrinho pelo nome
    removerProduto(nome) {
        // Encontra o indice do produto no array de produtos
        const index = this.produtos.findIndex(produto => produto.nome === nome);
        
        // Se o produto não for encontrado, lança um erro
        if (index === -1) {
            throw new Error(`Produto ${nome} não encontrado no carrinho.`);
        }
        
        // Remove o produto da lista de produtos
        this.produtos.splice(index, 1);
    }

    // Metodo para calcular o valor total do carrinho
    calcularTotal() {
        // Usa o metodo reduce para somar o preço total de cada produto (preço * quantidade)
        return this.produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    }

    // Metodo para listar todos os produtos no carrinho
    listarProdutos() {
        // Retorna o array de produtos
        return this.produtos;
    }
}

// Exporta a classe CarrinhoDeCompras para que possa ser usada em outros arquivos
module.exports = CarrinhoDeCompras;
