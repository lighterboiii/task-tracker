/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ChangeEvent } from 'react';
import styles from './textarea.module.scss';

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}

const Textarea: FC<IInputMessage> = ({
  value,
  placeholder = 'Short description...',
  onChange,
  name,
}) => {
  return (
    <div className={styles.textarea}>
      <textarea
        className={styles.textarea__input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Textarea;
