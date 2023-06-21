import { ModalProvider } from './context/ModalContext';

import Header from './components/Header/Header.component';
import Title from './components/Title/Title.component';
import Stats from './components/Stats/Stats.component';
import About from './components/About/About.component';
import Modal from './components/Modal/Modal.component';

import styles from './styles/App.module.scss';

function App() {
  return (
    <ModalProvider>
      <Header />
      <div className={styles.wrapper}>
        <Title />
        <Stats />
        <About />
      </div>
      <Modal />
    </ModalProvider>
  );
}

export default App;
