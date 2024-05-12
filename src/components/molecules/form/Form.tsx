import type { FormEventHandler, SyntheticEvent } from 'react';
import { StyledForm } from './styles';

const strings = {
  comment: 'Comment',
  name: 'Name',
  message: 'Message',
};

const Form = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('post comment');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">
        {strings.name}
        <input type="text" name="name" />
      </label>

      <label htmlFor="message">
        {strings.message}
        <textarea name="message" id="message"></textarea>
      </label>
      <button type="submit">{strings.comment}</button>
    </StyledForm>
  );
};

export default Form;
