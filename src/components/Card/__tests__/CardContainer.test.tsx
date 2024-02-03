import { render } from '@testing-library/react';
import { CardContainer } from '../CardContainer';
import '@testing-library/jest-dom'


describe('CardContainer', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <CardContainer>
        <div>Child Component</div>
      </CardContainer>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });
});
