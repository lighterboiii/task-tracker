import { FC } from 'react';

interface IButton {
  text: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
// доделать компонент
