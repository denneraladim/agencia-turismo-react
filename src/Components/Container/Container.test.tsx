
import { render, screen } from '@testing-library/react';
import Container from './index';

describe('Container Component', () => {
  it('should render children correctly', () => {
    render(
      <Container>
        <p>Conteúdo de teste</p>
      </Container>
    );

    expect(screen.getByText(/Conteúdo de teste/i)).toBeInTheDocument();
  });
});
