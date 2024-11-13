// Importa a classe CarrinhoDeCompras do arquivo correspondente
const CarrinhoDeCompras = require('./CarrinhoDeCompras');

// Teste para verificar se um produto e adicionado corretamente ao carrinho
test('Adicionar produtos ao carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    // Adiciona um produto Maçã com preço 1.5 e quantidade 10
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    // Verifica se o produto foi adicionado corretamente ao carrinho
    expect(carrinho.listarProdutos()).toEqual([{ nome: 'Maçã', preco: 1.5, quantidade: 10 }]);
});

// Teste para verificar se a quantidade de um produto existente e incrementada corretamente
test('Incrementar a quantidade de um produto existente no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    // Adiciona o produto "Maçã" com preço 1.5 e quantidade 10
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    // Adiciona mais 5 unidades do mesmo produto "Maçã"
    carrinho.adicionarProduto('Maçã', 1.5, 5);
    // Verifica se a quantidade do produto "Maçã" no carrinho é agora 15
    expect(carrinho.listarProdutos()).toEqual([{ nome: 'Maçã', preco: 1.5, quantidade: 15 }]);
});

// Teste para verificar se um produto é removido corretamente do carrinho
test('Remover produtos do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    // Adiciona o produto "Maçã" ao carrinho
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    // Remove o produto "Maçã" do carrinho
    carrinho.removerProduto('Maçã');
    // Verifica se o carrinho está vazio após a remoção
    expect(carrinho.listarProdutos()).toEqual([]);
});

// Teste para garantir que um erro é lançado ao tentar remover um produto que não existe
test('Lançar erro ao tentar remover um produto que não existe', () => {
    const carrinho = new CarrinhoDeCompras();
    // Verifica se a tentativa de remover o produto "Banana" lança o erro esperado
    expect(() => carrinho.removerProduto('Banana')).toThrowError('Produto Banana não encontrado no carrinho.');
});

// Teste para verificar se o cslculo do total do carrinho esta correto com diferentes produtos e quantidades
test('Calcular o total corretamente com diferentes produtos e quantidades', () => {
    const carrinho = new CarrinhoDeCompras();
    // Adiciona produtos ao carrinho e calcula o total
    carrinho.adicionarProduto('Maçã', 1.5, 10); // Total: 15
    carrinho.adicionarProduto('Banana', 0.5, 10); // Total: 5
    // Verifica se o total do carrinho e igual a 20
    expect(carrinho.calcularTotal()).toBe(20); // Total: 15 + 5 = 20
});

// Teste para verificar se a listagem de produtos retorna as informações corretas
test('Listar produtos retorna os valores corretos', () => {
    const carrinho = new CarrinhoDeCompras();
    // Adiciona dois produtos ao carrinho
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    carrinho.adicionarProduto('Banana', 0.5, 20);
    // Verifica se a listagem de produtos corresponde aos itens adicionados
    expect(carrinho.listarProdutos()).toEqual([
        { nome: 'Maçã', preco: 1.5, quantidade: 10 },
        { nome: 'Banana', preco: 0.5, quantidade: 20 }
    ]);
});
