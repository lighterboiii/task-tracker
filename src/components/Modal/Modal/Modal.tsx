import { FC, useEffect } from 'react';
import ReactDom from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

interface IModalPopup {
  onClick: () => void;
  children: JSX.Element;
}
const modalContainer = document.querySelector('#modals') as HTMLElement;

const Modal: FC<IModalPopup> = ({ onClick, children }) => {
  useEffect(() => {
    function closeEscModal(evt: KeyboardEvent) {
      if (evt.key === 'Escape') onClick();
    }

    document.addEventListener('keydown', closeEscModal);

    return () => {
      document.removeEventListener('keydown', closeEscModal);
    };
  }, [onClick]);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        {children}
        <button onClick={onClick} type="button">
          X
        </button>
      </div>
      <ModalOverlay onClick={onClick} />
    </div>,
    modalContainer
  );
};

export default Modal;
