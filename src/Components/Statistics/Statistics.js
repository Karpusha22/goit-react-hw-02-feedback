import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li className={styles.statistics}>Good:{good}</li>
        <li className={styles.statistics}>Neutral:{neutral}</li>
        <li className={styles.statistics}>Bad:{bad}</li>
        <li className={styles.statistics}>Total:{total}</li>
        <li className={styles.statistics}>
          Positive feedback:{positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;