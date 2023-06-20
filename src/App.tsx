import styles from './styles/App.module.scss';

import Header from './components/Header/Header.component';
import Title from './components/Title/Title.component';
import Stats from './components/Stats/Stats.component';
import About from './components/About/About.component';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Title />
        <Stats />
        <About />
      </div>
    </>
  );
}

export default App;
