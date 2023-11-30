import CSS from './index.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={CSS.statName}>Good: {good}</p>
      <p className={CSS.statName}>Neutral: {neutral}</p>
      <p className={CSS.statName}>Bad: {bad}</p>
      <p className={CSS.statName}>Total: {total}</p>
      <p className={CSS.statName}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
