import { FC } from 'react';
// import styles from './button.module.scss';

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
