import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  afterEach(() => {
    cleanup();
  });

  test('Posts name and message to the API', async () => {
    const testCreate = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Form createComment={testCreate} isPending={false} />
    );
    const name = getByLabelText('Name', { exact: false });
    const message = getByLabelText('Message', { exact: false });
    const commentButton = getByRole('button');
    fireEvent.change(name, { target: { value: 'Steve Martin' } });
    fireEvent.change(message, { target: { value: 'Hello World' } });
    fireEvent.click(commentButton);

    await waitFor(() => {
      expect(testCreate).toHaveBeenCalledWith({ message: 'Hello World', name: 'Steve Martin' });
    });
  });
});
