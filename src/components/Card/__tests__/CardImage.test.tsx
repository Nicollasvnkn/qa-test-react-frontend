import { render } from '@testing-library/react';
import { CardImage } from '../CardImage';
import '@testing-library/jest-dom'


describe('CardImage', () => {
  it('renders the image with the correct src and alt text', () => {
    const { getByAltText } = render(
      <CardImage src="image-src.jpg" alt="Descriptive Text" />
    );

    const image = getByAltText('Descriptive Text');
    expect(image).toHaveAttribute('src', 'image-src.jpg');
    expect(image).toHaveAttribute('alt', 'Descriptive Text');
  });
});
