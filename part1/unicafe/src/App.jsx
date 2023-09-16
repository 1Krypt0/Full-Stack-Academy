import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine
          text="average"
          value={(good - bad) / (good + bad + neutral)}
        />
        <StatisticsLine
          text="positive"
          value={(good * 100) / (good + bad + neutral) + "%"}
        />
      </table>
    </>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button type="submit" onClick={handleClick}>
      {text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
