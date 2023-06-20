interface Props {
  children: React.ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: Props) => {
  return (
    <div>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default Modal;
