import styles from './Button.module.scss';

interface Props {
  title: string;
  disabled?: boolean;
}
const Button = ({ title, disabled }: Props) => {
  return (
    <button className={`${styles.primary} ${disabled && styles.disabled} `}>
      {disabled ? `Out of stock` : title}
    </button>
  );
};

export { Button };
