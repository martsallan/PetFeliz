import styles from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title__line}></div>
      <h3 className={styles.title__heading}>{title}</h3>
      <div className={styles.title__line}></div>
    </div>
  );
};

export default Title;
