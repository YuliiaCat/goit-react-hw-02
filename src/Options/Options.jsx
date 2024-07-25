import css from './Options.module.css';

const Options = ({ updateFeedback, onReset, total }) => {
  
  return (
    <div className={css.options}>
      <button 
        type='button' 
        className={css.button}
        onClick={() => updateFeedback('good')}
        >Good</button>
      <button 
        type='button' 
        className={css.button}
        onClick={() => updateFeedback('neutral')}
        >Neutral</button>
      <button 
        type='button' 
        className={css.button}
        onClick={() => updateFeedback('bad')}
        >Bad</button>
      { total > 0 && <button 
          type='button' 
          className={css.button}
          onClick={onReset}
        >
          Reset
        </button>
      }
    </div>
  );
};

export default Options;