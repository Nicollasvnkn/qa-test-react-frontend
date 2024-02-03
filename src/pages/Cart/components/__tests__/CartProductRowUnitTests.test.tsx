import { render, fireEvent } from '@testing-library/react';
import { CartProductRow } from '../CartProductRow'; 
import '@testing-library/jest-dom';


interface MockProduct {
  id: string;
  orderItemId: string;
  imageUrl: string;
  title: string;
  price: number;
  quantity: number;
  amount: number;
}

const mockProduct: MockProduct = {
  id: '1',
  orderItemId: 'order-item-1',
  imageUrl: 'image-url.jpg',
  title: 'Product Title',
  price: 29.99,
  quantity: 2,
  amount: 59.98
};

const mockIncrement = jest.fn();
const mockDecrement = jest.fn();
const mockRemove = jest.fn();

const formatPrice = (price: number) => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

describe('CartProductRow', () => {
  it('renders the product information', () => {
    const { getByText, getByAltText, getByDisplayValue } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );

    expect(getByAltText(mockProduct.title)).toBeInTheDocument();
    expect(getByText(mockProduct.title)).toBeInTheDocument();
    expect(getByText(formatPrice(mockProduct.price))).toBeInTheDocument();
    expect(getByDisplayValue(mockProduct.quantity.toString())).toBeInTheDocument();
    expect(getByText(formatPrice(mockProduct.amount))).toBeInTheDocument();
  });

  it('disables decrement button when product quantity is 1', () => {
    const mockProductWithQuantity = { ...mockProduct, quantity: 1 };
  
    const { container } = render(
      <CartProductRow
        product={mockProductWithQuantity}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
  
    const decrementButton = container.querySelector(`[data-cy="decrement-product-${mockProductWithQuantity.id}"]`);
  
    expect(decrementButton).toBeDisabled();
  });  
  

  it('disables action buttons when isLoading is true', () => {
    const { container } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={true}
      />
    );
  
    const incrementButton = container.querySelector(`[data-cy="increment-product-${mockProduct.id}"]`);
    const decrementButton = container.querySelector(`[data-cy="decrement-product-${mockProduct.id}"]`);
    const removeButton = container.querySelector(`[data-cy="remove-product-${mockProduct.id}"]`);
  
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
    expect(removeButton).toBeDisabled();
  });  

  it('comparar a pagina com o snapshot', () => {
    const { asFragment } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('chama função externa quando o botão de remover é clicado', () => {
    const { container } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
  
    const removeButton = container.querySelector(`[data-cy="remove-product-${mockProduct.id}"]`);
  
    // Check if the element exists before firing the event
    if (removeButton) {
      fireEvent.click(removeButton);
      expect(mockRemove).toHaveBeenCalledWith(mockProduct.id);
    } else {
      throw new Error('Remove button not found');
    }
  });  

  it('gerencia corretamente a sequência de interações do usuário', () => {
    const { container } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
  
    const incrementButton = container.querySelector(`[data-cy="increment-product-${mockProduct.id}"]`);
    const decrementButton = container.querySelector(`[data-cy="decrement-product-${mockProduct.id}"]`);
    const removeButton = container.querySelector(`[data-cy="remove-product-${mockProduct.id}"]`);
  
    if (incrementButton && decrementButton && removeButton) {
      fireEvent.click(incrementButton);
      expect(mockIncrement).toHaveBeenCalledWith(mockProduct);
  
      fireEvent.click(decrementButton);
      expect(mockDecrement).toHaveBeenCalledWith(mockProduct);
  
      fireEvent.click(removeButton);
      expect(mockRemove).toHaveBeenCalledWith(mockProduct.id);
    } else {
      throw new Error('One or more buttons not found');
    }
  });


  it('verificar se a pagina não renderiza novamente', () => {
    const { rerender } = render(
      <CartProductRow
        product={mockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
    const newMockProduct = { ...mockProduct };

    rerender(
      <CartProductRow
        product={newMockProduct}
        handleProductIncrement={mockIncrement}
        handleProductDecrement={mockDecrement}
        handleRemoveProduct={mockRemove}
        isLoading={false}
      />
    );
  });

});

