import { UseMutateFunction } from '@tanstack/react-query';
import Loader from 'components/atoms/loader';
import { CreateComment, CreateCommentResponse } from 'models/comments';
import {
  ChangeEventHandler,
  FocusEventHandler,
  useCallback,
  useMemo,
  useState,
  type FormEventHandler,
} from 'react';
import { sanitize } from 'utils/sanitize';
import { Button, ErrorMessage, Label, Required, StyledForm, TextArea } from './styles';

const strings = {
  comment: 'Comment',
  name: 'Name',
  message: 'Message',
  nameError: 'Please remove special characters from Name',
  messageError: 'Please remove special characters from Message',
};

interface FormProps {
  createComment: UseMutateFunction<CreateCommentResponse, Error, CreateComment, unknown>;
  isPending: boolean;
}

const Form = ({ createComment, isPending }: FormProps) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  const isDisabled = useMemo(() => isPending || !(name && message), [isPending, name, message]);

  const validate = useCallback(
    (
      name: string,
      message: string
    ): {
      sanitizedName: string;
      sanitizedMessage: string;
    } => {
      const sanitizedName = sanitize(name);
      const sanitizedMessage = sanitize(message);
      if (name && name !== sanitizedName) {
        setIsNameError(true);
      } else {
        setIsNameError(false);
      }

      if (message && message !== sanitizedMessage) {
        setIsMessageError(true);
      } else {
        setIsMessageError(false);
      }

      return {
        sanitizedName,
        sanitizedMessage,
      };
    },
    []
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();
      const { sanitizedName, sanitizedMessage } = validate(name, message);
      if (sanitizedName && sanitizedMessage) {
        createComment({ name: sanitizedName, message: sanitizedMessage });
        setName('');
        setMessage('');
      }
    },
    [validate, name, message, createComment]
  );

  const onBlur: FocusEventHandler = useCallback(() => {
    validate(name, message);
  }, [name, message, validate]);

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
      <Label htmlFor="name">
        {strings.name}
        <Required>*</Required>
      </Label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={onChangeName}
        value={name}
        onBlur={onBlur}
        maxLength={50}
        required
      />
      {isNameError ? <ErrorMessage>{strings.nameError}</ErrorMessage> : null}
      <Label htmlFor="message">
        {strings.message}
        <Required>*</Required>
      </Label>
      <TextArea
        name="message"
        id="message"
        onChange={onChangeMessage}
        value={message}
        onBlur={onBlur}
        maxLength={1000}
        required
      ></TextArea>
      {isMessageError ? <ErrorMessage>{strings.messageError}</ErrorMessage> : null}
      <Button type="submit" disabled={isDisabled}>
        {isPending ? <Loader /> : strings.comment}
      </Button>
    </StyledForm>
  );
};

export default Form;
