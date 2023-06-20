import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="logo.svg" sizes="{120x20}" alt="Logo crowndfund" />
      <nav>
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </nav>
    </header>
  );
};

export default Header;
