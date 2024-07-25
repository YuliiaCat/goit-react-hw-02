import { useEffect, useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

function App() {
  const [rate, setRate] = useState(() => {
    const savedRate = window.localStorage.getItem('savedRate');

    if (savedRate) {
      return JSON.parse(savedRate);
    }
    
    return (
      {
        good: 0,
        neutral: 0,
        bad: 0
      }
    );
  });

  useEffect(() => {
    window.localStorage.setItem('savedRate', JSON.stringify(rate));
  }, [rate])

  const updateFeedback = feedbackType => {
    setRate(prevRate => ({
      ...prevRate,
      [feedbackType]: rate[feedbackType] + 1,
    }));
  };

    const onReset = () => {
    setRate({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = rate.good + rate.neutral + rate.bad;
  const positiveFeedback = Math.round(((rate.good + rate.neutral) / totalFeedback) * 100)

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          good={rate.good}
          neutral={rate.neutral}
          bad={rate.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback} />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App
