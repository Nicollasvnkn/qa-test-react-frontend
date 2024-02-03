import { render } from '@testing-library/react';
import { CardTitle } from '../CardTitle';
import '@testing-library/jest-dom'


describe('CardTitle', () => {
  it('renders the title text', () => {
    const { getByText } = render(<CardTitle text="Sample Title" />);

    expect(getByText('Sample Title')).toBeInTheDocument();
  });
});
