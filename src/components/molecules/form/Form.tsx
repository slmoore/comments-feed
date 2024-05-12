import { UseMutateFunction } from '@tanstack/react-query';
import { CreateComment, CreateCommentResponse } from 'models/comments';
import { ChangeEventHandler, useCallback, useMemo, useState, type FormEventHandler } from 'react';
import { StyledForm } from './styles';

const strings = {
  comment: 'Comment',
  name: 'Name',
  message: 'Message',
};

interface FormProps {
  createComment: UseMutateFunction<CreateCommentResponse, Error, CreateComment, unknown>;
  isPending: boolean;
}

const Form = ({ createComment, isPending }: FormProps) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const isDisabled = useMemo(() => isPending || !(name && message), [isPending, name, message]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();
      createComment({ name, message });
    },
    [message, createComment, name]
  );

  const onChangeName: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      setName(e.currentTarget.value);
    },
    [setName]
  );

  const onChangeMessage: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    e => {
      setMessage(e.currentTarget.value);
    },
    [setMessage]
  );

  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="name">
        {strings.name}
        <input type="text" name="name" onChange={onChangeName} value={name} />
      </label>
      <label htmlFor="message">
        {strings.message}
        <textarea name="message" id="message" onChange={onChangeMessage} value={message}></textarea>
      </label>
      <button type="submit" disabled={isDisabled}>
        {isPending ? 'Loading...' : strings.comment}
      </button>
    </StyledForm>
  );
};

export default Form;
