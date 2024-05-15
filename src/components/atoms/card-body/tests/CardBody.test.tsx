import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import CardBody from '../CardBody';

const longText = 'test '.repeat(30);

describe('CardBody', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renders with long text', async () => {
    render(<CardBody text={longText} />);
    expect(screen.getByText(/test/i)).toHaveStyle('overflow: hidden');
  });
});
