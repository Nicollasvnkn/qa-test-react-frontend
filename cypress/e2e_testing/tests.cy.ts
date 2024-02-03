

describe('Página do Catálogo de Filmes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    it('carregar a URL correta', () => {
      cy.url().should('eq', 'http://localhost:3001/');
    });
  
    it('exibir itens de filme', () => {
      cy.get('[data-cy^="movie-item-"]').should('have.length.at.least', 1);
    });
  
    it('verificar produto Viúva Negra e adicionar ao carrinho', () => {
      cy.get('img[src*="viuva-negra.png"]').should('be.visible');
      cy.contains('R$ 9,99').should('be.visible');
      cy.get('[data-cy="add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('verificar produto do Homem Aranha e adicionar ao carrinho', () => {
      cy.get('img[src*="spider-man.png"]').should('be.visible');
      cy.contains('R$ 29,90').should('be.visible');
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('verificar produto do Shang Chi e adicionar ao carrinho', () => {
      cy.get('img[src*="shang-chi.png"]').should('be.visible');
      cy.contains('R$ 30,99').should('be.visible');
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('verificar produto do Morbius e adicionar ao carrinho', () => {
      cy.get('img[src*="morbius-1.png"]').should('be.visible');
      cy.contains('R$ 9,99').should('be.visible');
      cy.get('[data-cy="add-to-cart-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('verificar produto do Batman e adicionar ao carrinho', () => {
      cy.get('img[src*="the-batman.png"]').should('be.visible'); 
      cy.contains('R$ 30,99').should('be.visible');
      cy.get('[data-cy="add-to-cart-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
     it('verificar produto dos Eternos e adicionar ao carrinho', () => {
      cy.get('img[src*="eternals.png"]').should('be.visible');
      cy.contains('R$ 29,99').should('be.visible');
      cy.get('[data-cy="add-to-cart-6d083db4-df7d-426e-85a9-57455279f49e"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('adicionar dois produtos ao carrinho e verifica ambos', () => {
      cy.get('[data-cy="add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  
    it('adicionar todos os produtos ao carrinho', () => {
      cy.get('[data-cy="add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.get('[data-cy="add-to-cart-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.get('[data-cy="add-to-cart-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.get('[data-cy="add-to-cart-6d083db4-df7d-426e-85a9-57455279f49e"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
    });
  });
  
  describe('Adicionar ao carrinho e navegar', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
    
    it('o usuario clica na pagina de carrinho sem adcionar um produto', () => {
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
      cy.contains('Parece que não há nada por aqui :(').should('be.visible');
  
      cy.contains('button', 'Voltar').click();
      cy.url().should('eq', 'http://localhost:3001/');
    });
  
    it('adicionar um produto ao carrinho e navegar para a página do carrinho', () => {
      cy.get('[data-cy="add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
    });
  
    it('adicionar um produto ao carrinho e verificar os detalhes do produto Viúva Negra', () => {
      cy.get('[data-cy="add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
      cy.get('[data-cy="product-price-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
      cy.get('[data-cy="product-quantity-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
      cy.get('[data-cy="decrement-product-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
      cy.get('[data-cy="increment-product-fb2606eb-6e17-492e-a7e0-c1ea629f16d0"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  
    it('adicionar um produto ao carrinho e verificar os detalhes do produto o Homem Aranha', () => {
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="product-price-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="product-quantity-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="decrement-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="increment-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
    
    it('adicionar um produto ao carrinho e verificar os detalhes do produto Shang-Chi', () => {
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
      cy.get('[data-cy="product-price-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
      cy.get('[data-cy="product-quantity-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
      cy.get('[data-cy="decrement-product-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
      cy.get('[data-cy="increment-product-633e4320-8c35-41dc-9840-8d13c9ba6416"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });    
  
    it('adicionar um produto ao carrinho e verificar os detalhes do produto Morbius', () => {
      cy.get('[data-cy="add-to-cart-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
      cy.get('[data-cy="product-price-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
      cy.get('[data-cy="product-quantity-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
      cy.get('[data-cy="decrement-product-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
      cy.get('[data-cy="increment-product-400845f4-d3bb-40f7-8af4-5b1a53abe0a5"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
  
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  
    it('adicionar um produto ao carrinho e verificar os detalhes do produto Batman', () => {
      cy.get('[data-cy="add-to-cart-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
      cy.get('[data-cy="product-price-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
      cy.get('[data-cy="product-quantity-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
      cy.get('[data-cy="decrement-product-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
      cy.get('[data-cy="increment-product-5b66e004-f78b-4b09-b35d-d6c7461f48b9"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
  
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  
    it('adicionar um produto ao carrinho e verificar os detalhes do produto Eternos', () => {
      cy.get('[data-cy="add-to-cart-6d083db4-df7d-426e-85a9-57455279f49e"]').click();
  
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
  
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.url().should('include', '/cart'); 
  
      cy.get('[data-cy="product-image-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      cy.get('[data-cy="product-price-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      cy.get('[data-cy="product-quantity-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      cy.get('[data-cy="product-subtotal-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
  
      cy.get('[data-cy="remove-product-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      cy.get('[data-cy="decrement-product-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      cy.get('[data-cy="increment-product-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
  
      cy.get('[data-cy="finish-purchase"]').click();
  
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  });
  
  describe('Adicionar multiplos produtos ao carrinho e finalizar pedido', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    it('adicionar dois produtos diferentes ao carrinho e finalizar o pedido', () => {
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
      
      cy.wait(2000);
      cy.get('[data-cy="add-to-cart-6d083db4-df7d-426e-85a9-57455279f49e"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
      cy.contains('strong', 'Meu Carrinho').click();
      cy.url().should('include', '/cart');
      
      cy.get('[data-cy="product-image-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      cy.get('[data-cy="product-image-6d083db4-df7d-426e-85a9-57455279f49e"]').should('be.visible');
      
      cy.get('[data-cy="finish-purchase"]').click();
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  
    it('adicionar todos os seis produtos ao carrinho e finalizar o pedido', () => {
      const produtosParaAdicionar = [
        'adb5d66e-ad97-4439-b9ca-3d2576f697b2', // Homem Aranha
        '6d083db4-df7d-426e-85a9-57455279f49e', // Eternos
        '400845f4-d3bb-40f7-8af4-5b1a53abe0a5', // Morbius
        '5b66e004-f78b-4b09-b35d-d6c7461f48b9', // Batman
        'fb2606eb-6e17-492e-a7e0-c1ea629f16d0', // Viuva Negra
        '633e4320-8c35-41dc-9840-8d13c9ba6416'  // Shang Chi
      ];
  
      produtosParaAdicionar.forEach(produtoId => {
        cy.get(`[data-cy="add-to-cart-${produtoId}"]`).click();
        cy.contains('Produto adicionado com sucesso').should('be.visible');
        cy.wait(2000);
      });
      
      cy.contains('strong', 'Meu Carrinho').click();
      cy.url().should('include', '/cart');
  
      produtosParaAdicionar.forEach(produtoId => {
        cy.get(`[data-cy="product-image-${produtoId}"]`).should('be.visible');
      });
      
      cy.get('[data-cy="finish-purchase"]').click();
      cy.url().should('include', '/cart/success'); 
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  
    it('completar uma compra, voltar para a página inicial e completar outra compra', () => {
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(2000);
      cy.contains('strong', 'Meu Carrinho').click();
      cy.get('[data-cy="finish-purchase"]').click();
      cy.contains('Compra realizada com sucesso!').should('be.visible');
      cy.contains('button', 'Voltar').click();
      
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
  
      cy.wait(1000);
      cy.contains('strong', 'Meu Carrinho').click();
      cy.get('[data-cy="finish-purchase"]').click();
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  });
  
  describe('Completar pedidos para múltiplos produtos', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    const productCyTags = [
      'add-to-cart-fb2606eb-6e17-492e-a7e0-c1ea629f16d0', // Viuva Negra
      'add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2', // Homem Aranha
      'add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416', // Shang Chi
      'add-to-cart-400845f4-d3bb-40f7-8af4-5b1a53abe0a5', // Morbius
      'add-to-cart-5b66e004-f78b-4b09-b35d-d6c7461f48b9', // Batman
      'add-to-cart-6d083db4-df7d-426e-85a9-57455279f49e', // Eternos
    ];
  
    productCyTags.forEach(cyTag => {
  
      it(`completar um pedido, voltar e completar outro pedido, com os seis produtos`, () => {
        cy.get(`[data-cy="${cyTag}"]`).click();
        cy.contains('Produto adicionado com sucesso').should('be.visible');
  
        cy.wait(3000);
        cy.contains('strong', 'Meu Carrinho').click();
        cy.get('[data-cy="finish-purchase"]').click();
        cy.contains('Compra realizada com sucesso!').should('be.visible');
        
        cy.contains('button', 'Voltar').click(); 
        cy.url().should('eq', 'http://localhost:3001/');
      });
    });
  });
  
  describe('Adicionar o mesmo produto várias vezes e completar o pedido', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    const addButtonCyTag = 'add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
    const quantityInputCyTag = 'product-quantity-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
  
    it('adiciona o mesmo produto várias vezes ao carrinho e completa o pedido', () => {
      const timesToAdd = 3; 
  
      for (let i = 0; i < timesToAdd; i++) {
        cy.get(`[data-cy="${addButtonCyTag}"]`).click();
        cy.contains('Produto adicionado com sucesso').should('be.visible');
        cy.wait(2000); 
      }
  
      cy.wait(3000); 
      cy.contains('strong', 'Meu Carrinho').click(); 
  
      cy.get(`[data-cy="${quantityInputCyTag}"]`).invoke('val').should('eq', timesToAdd.toString());
  
      cy.get('[data-cy="finish-purchase"]').click();
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  });
  
  describe('Adicionar um produto e aumentar sua quantidade no carrinho', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    it('o usuario deve adicionar um produto ao carrinho e aumentar sua quantidade', () => {
      cy.get('[data-cy="add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
      cy.contains('Produto adicionado com sucesso').should('be.visible'); 
  
      cy.wait(3000); 
      cy.contains('strong', 'Meu Carrinho').click(); 
    
      cy.get('[data-cy="product-image-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').should('be.visible');
      
      const quantityToAdd = 10; 
  
      for (let i = 1; i < quantityToAdd; i++) {
        cy.get('[data-cy="increment-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2"]').click();
        cy.contains('Quantidade do produto alterada com successo.').should('be.visible');
      }
      
      cy.get('[data-cy="finish-purchase"]').click();
  
      cy.contains('Compra realizada com sucesso!').should('be.visible');
  
      cy.contains('button', 'Voltar').click();
    });
  });
  
  describe('Adiciona produto várias vezes e depois reduz a quantidade no carrinho', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    const productCyTag = 'add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
    const decrementButtonCyTag = 'decrement-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
    const quantityInputCyTag = 'product-quantity-adb5d66e-ad97-4439-b9ca-3d2576f697b2';
  
    it('reduzir a quantidade de produtos no carrinho', () => {
      const timesToAdd = 5;
      for (let i = 0; i < timesToAdd; i++) {
        cy.get(`[data-cy="${productCyTag}"]`).click();
        cy.contains('Produto adicionado com sucesso').should('be.visible');
        cy.wait(2000);
      }
  
      cy.wait(3000);
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.get(`[data-cy="${quantityInputCyTag}"]`).then(($input) => {
        const currentValue = parseInt($input.val() as string);
        const timesToDecrement = currentValue - 1; 
        for (let i = 0; i < timesToDecrement; i++) {
          cy.get(`[data-cy="${decrementButtonCyTag}"]`).click();
          cy.contains('Quantidade do produto alterada com successo.').should('be.visible');
          cy.wait(1000);
        }
      });
  
      cy.get(`[data-cy="${quantityInputCyTag}"]`).should('have.value', '1');
  
      cy.get('[data-cy="finish-purchase"]').click();
      cy.contains('Compra realizada com sucesso!').should('be.visible');
    });
  });
  
  describe('Adicionar e depois remover um produto do carrinho', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    const productCyTag = 'add-to-cart-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
    const removeButtonCyTag = 'remove-product-adb5d66e-ad97-4439-b9ca-3d2576f697b2'; 
    
    it('adiciona um produto ao carrinho, depois o remove e verifica a mensagem de carrinho vazio', () => {
      cy.get(`[data-cy="${productCyTag}"]`).click();
      cy.contains('Produto adicionado com sucesso').should('be.visible');
      
      cy.wait(2000);
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.get(`[data-cy="${removeButtonCyTag}"]`).click();
  
      cy.contains('Parece que não há nada por aqui :(').should('be.visible');
    });
  });
  
  describe('Tratamento de erros no carrinho', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    it('deve exibir uma mensagem de erro quando a compra falhar', () => {
      cy.intercept('POST', '/order/buy', {
        statusCode: 500,
        body: { message: 'Internal Server Error' },
      }).as('finalizarCompra');
  
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').first().click();
  
      cy.wait(3000);
      cy.contains('strong', 'Meu Carrinho').click();
      
      cy.get('[data-cy="finish-purchase"]').click();
  
      cy.wait('@finalizarCompra');
  
      cy.contains('Erro na finalização do seu pedido').should('be.visible');
    });
  
    it('deve exibir uma mensagem de erro ao falhar na remoção do produto do carrinho', () => {
      const productRemoveCyTag = 'remove-product-633e4320-8c35-41dc-9840-8d13c9ba6416'; 
  
      cy.intercept('DELETE', '/order/item/*', {
        statusCode: 500,
        body: { message: 'Error removing product from cart' },
      }).as('removeProduct');
  
      cy.get('[data-cy="add-to-cart-633e4320-8c35-41dc-9840-8d13c9ba6416"]').first().click();
      cy.wait(3000);
      cy.contains('strong', 'Meu Carrinho').click();
  
      cy.get(`[data-cy="${productRemoveCyTag}"]`).click();
  
      cy.wait('@removeProduct');
    
      cy.contains('Error ao remover o produto ao carrinho.').should('be.visible');
    });
  });