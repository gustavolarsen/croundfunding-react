import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.cards}>
        <div>
          <div className={styles.value}>$89,914</div>
          <span>of $100,000 backed</span>
        </div>
        <div>
          <div className={styles.value}>5,007</div>
          <span>total backers</span>
        </div>
        <div>
          <div className={styles.value}>56</div>
          <span>days left</span>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={styles.progress}></div>
      </div>
    </section>
  );
};

export default Stats;
