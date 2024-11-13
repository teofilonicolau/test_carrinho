# Gerenciamento de Carrinho de Compras

Este projeto implementa uma classe `CarrinhoDeCompras` com métodos para adicionar, remover, listar produtos e calcular o total do carrinho de compras. Também inclui testes unitários para verificar a funcionalidade da classe.

## Requisitos

### Adicionar Produto ao Carrinho
- Método: `adicionarProduto(nome, preco, quantidade)`
- Parâmetros:
  - `nome`: Nome do produto (string)
  - `preco`: Preço unitário do produto (número)
  - `quantidade`: Quantidade do produto (número)
- Se o produto já estiver no carrinho, incrementa a quantidade.

### Remover Produto do Carrinho
- Método: `removerProduto(nome)`
- Parâmetro:
  - `nome`: Nome do produto a ser removido
- Lança um erro se o produto não existir no carrinho.

### Calcular o Total
- Método: `calcularTotal()`
- Retorna o preço total de todos os produtos no carrinho.

### Listar Produtos
- Método: `listarProdutos()`
- Retorna uma lista com todos os produtos no carrinho, onde cada produto é representado como um objeto com as propriedades `nome`, `preco` e `quantidade`.

## Cenários de Teste

Os testes unitários cobrem os seguintes cenários:

1. **Adicionar produtos ao carrinho**
   - Verifique se os produtos são adicionados corretamente.
   - Verifique se a quantidade de um produto é incrementada quando ele já existe no carrinho.

2. **Remover produtos do carrinho**
   - Verifique se um produto é removido corretamente.
   - Verifique se um erro é lançado ao tentar remover um produto que não existe.

3. **Calcular o total**
   - Verifique se o total é calculado corretamente com diferentes produtos e quantidades.

4. **Listar produtos**
   - Verifique se a lista de produtos retorna os valores corretos.

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/teofilonicolau/test_carrinho.git
cd test_carrinho
npm install

```
## Uso

```sh
npm test

npm install

