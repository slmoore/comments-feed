import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 600px;

  input,
  textarea {
    font-family: inherit;
    font-size: 16px;
    border: 2px solid #29adb2;
    border-radius: 0.25rem;
    padding: 1rem;
    background-color: #f6f6f8;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const TextArea = styled.textarea`
  height: 10rem;
  resize: none;
`;

export const Required = styled.span`
  color: #ff0033;
  padding-left: 0.25rem;
  font-weight: 300;
`;

export const Button = styled.button`
  height: ${60 / 16}rem;
  color: white;
  font-size: 18px;
  font-weight: 900;
  font-family: inherit;
  background-color: ${({ disabled }) => (disabled ? '#80a5ad' : '#29adb2')};
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 1rem;
  transition: background-color 0.25s;
  cursor: pointer;

  &:hover {
    ${({ disabled }) => (disabled ? '' : 'background-color: #4bcfd4')};
    ${({ disabled }) => (disabled ? 'cursor: not-allowed' : 'background-color: #4bcfd4')};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff204e;
`;
