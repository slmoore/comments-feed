import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import CardHeader from '../CardHeader';

describe('CardHeader', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renders with formatted date', async () => {
    const date = new Date();
    render(<CardHeader name="Steve Martin" date={date} isTemp />);
    expect(
      screen.getByText(
        date.toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
        }),
        { exact: false }
      )
    ).toBeInTheDocument();
  });
});
