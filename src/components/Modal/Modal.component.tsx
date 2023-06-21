import { useModal } from '../../hooks/useModal';

const Modal = () => {
  const { showModal, toggleModal } = useModal();

  return showModal ? (
    <div>
      Aqui é a modal
      <button onClick={toggleModal}>Close</button>
    </div>
  ) : null;
};
export default Modal;
