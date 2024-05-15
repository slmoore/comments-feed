import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { DisplayComment } from 'models/comments';
import List from '../List';

describe('List', () => {
  afterEach(() => {
    cleanup();
  });

  test('Displays comments', async () => {
    const comments: DisplayComment[] = [
      {
        id: 1,
        name: 'First',
        message: 'Hello World',
        created: new Date().toString(),
      },
      {
        id: 2,
        name: 'Second',
        message: 'Hello World',
        created: new Date().toString(),
      },
      {
        id: 3,
        name: 'Third',
        message: 'Hello World',
        created: new Date().toString(),
      },
    ];
    render(<List comments={comments} isReady={true} />);

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });
});
