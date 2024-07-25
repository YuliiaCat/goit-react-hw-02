import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positiveFeedback }) => {

  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {`${positiveFeedback}%`}</li>
    </ul>  
  );
};

export default Feedback;