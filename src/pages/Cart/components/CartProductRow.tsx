import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";

// Components
import { Table } from "@/components/Table";

// Types
import { ProductInCart } from "@/@types/application";

// Helpers
import { formatPrice } from "@/helpers/formatPrice";

import {
  InputContainer,
  SubTotalContainer,
  ImageAndTitle,
  ActionButton,
} from "./styles";

type CartProviderProps = {
  product: ProductInCart;
  handleProductDecrement: (product: ProductInCart) => void;
  handleProductIncrement: (product: ProductInCart) => void;
  handleRemoveProduct: (productId: string) => void;
  isLoading: boolean;
};

export function CartProductRow({
  product,
  handleProductDecrement,
  handleProductIncrement,
  handleRemoveProduct,
  isLoading,
}: CartProviderProps) {
  return (
    <Table.Row key={product.id}>
      <ImageAndTitle>
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          data-cy={`product-image-${product.id}`} // Add data-cy here for the image
        />
        <div>
          <strong>{product.title}</strong>
          <span data-cy={`product-price-${product.id}`}>{formatPrice(product.price)}</span> // And here for the price
        </div>
      </ImageAndTitle>
      <InputContainer>
        <ActionButton
          type="button"
          data-cy={`decrement-product-${product.id}`} // Add data-cy for decrement action
          disabled={isLoading || product.quantity <= 1}
          onClick={() => handleProductDecrement(product)}
        >
          <MdRemoveCircleOutline size={20} />
        </ActionButton>
        <input
          type="text"
          data-cy={`product-quantity-${product.id}`} // Add data-cy for product quantity input
          readOnly
          value={product.quantity}
        />
        <ActionButton
          type="button"
          data-cy={`increment-product-${product.id}`} // Add data-cy for increment action
          onClick={() => handleProductIncrement(product)}
          disabled={isLoading}
        >
          <MdAddCircleOutline size={20} />
        </ActionButton>
      </InputContainer>
      <SubTotalContainer>
        <span>SUBTOTAL</span>
        <strong data-cy={`product-subtotal-${product.id}`}>{formatPrice(product.amount)}</strong> // Add data-cy for subtotal
      </SubTotalContainer>
      <ActionButton
        type="button"
        data-cy={`remove-product-${product.id}`} // Add data-cy for remove action
        onClick={() => handleRemoveProduct(product.id)}
        disabled={isLoading}
      >
        <MdDelete size={20} />
      </ActionButton>
    </Table.Row>
  );
}
