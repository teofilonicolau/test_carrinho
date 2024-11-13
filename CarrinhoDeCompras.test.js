const CarrinhoDeCompras = require('./CarrinhoDeCompras');

test('Adicionar produtos ao carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    expect(carrinho.listarProdutos()).toEqual([{ nome: 'Maçã', preco: 1.5, quantidade: 10 }]);
});

test('Incrementar a quantidade de um produto existente no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    carrinho.adicionarProduto('Maçã', 1.5, 5);
    expect(carrinho.listarProdutos()).toEqual([{ nome: 'Maçã', preco: 1.5, quantidade: 15 }]);
});

test('Remover produtos do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    carrinho.removerProduto('Maçã');
    expect(carrinho.listarProdutos()).toEqual([]);
});

test('Lançar erro ao tentar remover um produto que não existe', () => {
    const carrinho = new CarrinhoDeCompras();
    expect(() => carrinho.removerProduto('Banana')).toThrowError('Produto Banana não encontrado no carrinho.');
});

test('Calcular o total corretamente com diferentes produtos e quantidades', () => {
    const carrinho = new CarrinhoDeCompras();
    carrinho.adicionarProduto('Maçã', 1.5, 10); // Total: 15
    carrinho.adicionarProduto('Banana', 0.5, 10); // Total: 5
    expect(carrinho.calcularTotal()).toBe(20); // Total: 15 + 5 = 20
});

test('Listar produtos retorna os valores corretos', () => {
    const carrinho = new CarrinhoDeCompras();
    carrinho.adicionarProduto('Maçã', 1.5, 10);
    carrinho.adicionarProduto('Banana', 0.5, 20);
    expect(carrinho.listarProdutos()).toEqual([
        { nome: 'Maçã', preco: 1.5, quantidade: 10 },
        { nome: 'Banana', preco: 0.5, quantidade: 20 }
    ]);
});
