import { FC, useEffect } from 'react';
import ReactDom from 'react-dom';
import PopupOverlay from '../PopupOverlay/PopupOverlay';

interface IModalPopup {
  onClick: () => void;
  children: JSX.Element;
}
const modalContainer = document.querySelector('#modals') as HTMLElement;

const Popup: FC<IModalPopup> = ({ onClick, children }) => {
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
    <div>
      <PopupOverlay onClick={onClick} />
      <div>
        {children}
        <button onClick={onClick} type="button">
          X
        </button>
      </div>
    </div>,
    modalContainer
  );
};

export default Popup;
