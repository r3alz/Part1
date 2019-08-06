import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.text}</h1>;
};

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.stats} {props.texto}
      </td>
    </tr>
  );
};

const Statistics = props => {
  if (props.totalclicks === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" stats={props.good} />
        <Statistic text="neutral" stats={props.neutral} />
        <Statistic text="bad" stats={props.bad} />
        <Statistic text="all" stats={props.totalclicks} />
        <Statistic text="average" stats={props.average} />
        <Statistic text="positive" stats={props.positive} texto="%" />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalclicks = good + neutral + bad;
  const goodscore = good;
  const neutralscore = 0 * neutral;
  const badscore = -1 * bad;
  const averagescore = (goodscore + neutralscore + badscore) / totalclicks;
  const positivepct = (good / totalclicks) * 100;
  const goodClicked = () => {
    setGood(good + 1);
  };
  const neutralClicked = () => {
    setNeutral(neutral + 1);
  };
  const badClicked = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" onClick={goodClicked} />
      <Button text="neutral" onClick={neutralClicked} />
      <Button text="bad" onClick={badClicked} />
      <br />
      <Header text="statistics" />
      <Statistics
        totalclicks={totalclicks}
        good={good}
        neutral={neutral}
        bad={bad}
        average={averagescore}
        positive={positivepct}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
