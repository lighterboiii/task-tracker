/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ChangeEvent } from 'react';
import styles from './Textarea.module.scss';

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<IInputMessage> = ({
  value,
  placeholder = 'Enter description...',
  onChange,
}) => {
  return (
    <div>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Textarea;
