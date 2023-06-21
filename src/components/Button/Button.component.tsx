import { useModal } from '../../hooks/useModal';
import styles from './Button.module.scss';

interface Props {
  title: string;
  disabled?: boolean;
}

const Button = ({ title, disabled }: Props) => {
  const { toggleModal } = useModal();
  return (
    <button
      className={`${styles.primary} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={toggleModal}
    >
      {disabled ? `Out of stock` : title}
    </button>
  );
};

export { Button };
