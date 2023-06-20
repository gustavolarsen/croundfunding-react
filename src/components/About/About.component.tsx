import { Button } from '../Button/Button.component';
import styles from './About.module.scss';

const rewards = [
  {
    title: 'Bamboo Stand',
    pladge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotiona campaign, and you’ll be added to a special Backer member list.`,
    left: 101,
  },
  {
    title: 'Black Edition Stand',
    pladge: 75,
    description: `You get a Black Special Edition computer stand and a personal thank
    you. You’ll be added to our Backer member list. Shipping is included.`,
    left: 64,
  },

  {
    title: 'Mahogany Special Edition',
    pladge: 200,
    description: `YYou get two Special Edition Mahogany stands, a Backer T-Shirt, and a
    personal thank you. You’ll be added to our Backer member list.
    Shipping is included.`,
    left: 0,
  },
];

const RewardsList = () => {
  return (
    <div className={styles.rewards}>
      {rewards.map((reward) => {
        return (
          <div
            className={`${styles.rewardsCard} ${
              reward.left === 0 && styles.disabled
            } `}
          >
            <div className={styles.cardHeader}>
              <h2>{reward.title}</h2>
              <span className={styles.pledge}>Pledge ${reward.pladge} or more</span>
            </div>
            <p>{reward.description}</p>
            <div className={styles.cardFooter}>
              <span>
                <span className={styles.left}>{reward.left}</span> left
              </span>
              <Button title={`Select Reward`} disabled={reward.left === 0} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const About = () => {
  return (
    <section className={styles.about}>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
        elevates your screen to a more comfortable viewing height. Placing your
        monitor at eye level has the potential to improve your posture and make you
        more comfortable while at work, helping you stay focused on the task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk
        space below your computer to allow notepads, pens, and USB sticks to be
        stored under the stand.
      </p>
      <RewardsList />
    </section>
  );
};
export default About;
