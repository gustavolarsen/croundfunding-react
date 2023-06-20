import styles from './Bookmark.module.scss';
import bookmark_img from '../../assets/icon-bookmark.svg';

const Bookmark = () => {
  return (
    <div className={styles.bookmark}>
      <img src={bookmark_img} alt="Bookmark" />
      <span>Bookmark</span>
    </div>
  );
};
export { Bookmark };
