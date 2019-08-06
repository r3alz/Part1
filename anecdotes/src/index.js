import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  );
  const votesCopy = [...votes];
  const indexOfMaxValue = votesCopy.indexOf(Math.max(...votesCopy));

  const anecdoteGenerator = () => {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    return () => {
      setSelected(getRandomInt(6));
    };
  };

  const increaseVotes = () => {
    votesCopy[selected] += 1;
    return () => {
      setVotes(votesCopy);
    };
  };

  console.log("this is votesCopy: " + votesCopy);
  console.log("this is selected: " + selected);
  console.log("this is votes[selected]: " + votes[selected]);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={increaseVotes()}>vote</button>
      <button onClick={anecdoteGenerator()}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[indexOfMaxValue]}</p>
      <p>has {votes[indexOfMaxValue]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
