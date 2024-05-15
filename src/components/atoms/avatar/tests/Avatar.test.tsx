import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renders component with color and uppercase letter', async () => {
    const { getByText } = render(<Avatar letter="A" color="#000000" />);
    const avatar = getByText('A');
    expect(avatar).toHaveStyle('background-color: #000000');
    expect(avatar).not.toHaveTextContent('a');
  });
});
