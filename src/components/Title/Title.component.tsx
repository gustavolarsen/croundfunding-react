// import { Bookmark } from '@/components/Bookmark/Bookmark.component';
// import { Button } from '@/components/Button/Button.component';
import { Bookmark } from '../Bookmark/Bookmark.component';
import { Button } from '../Button/Button.component';
import styles from './Title.module.scss';

const Title = () => {
  return (
    <section className={styles.title}>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className={styles.buttons}>
        <Button title={'Back this project'} />
        <Bookmark />
      </div>
    </section>
  );
};
export default Title;
