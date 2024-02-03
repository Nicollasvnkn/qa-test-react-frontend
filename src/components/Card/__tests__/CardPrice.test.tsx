import { render } from '@testing-library/react';
import { CardPrice } from '../CardPrice';
import '@testing-library/jest-dom'


describe('CardPrice', () => {
  it('renders the price correctly formatted', () => {
    const price = 29.99;
    const { getByText } = render(<CardPrice price={price} />);

    // Assuming formatPrice function turns 29.99 into "R$ 29,99"
    expect(getByText('R$ 29,99')).toBeInTheDocument();
  });
});
