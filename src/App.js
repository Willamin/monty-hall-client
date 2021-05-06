import './App.css';

import { useState } from 'react';

const App = () => {
  const apiBaseUrl = "http://localhost:4000";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Monty Hall
        </p>
      </header>
      <Game baseUrl={apiBaseUrl}/>
    </div>
  );
}

const Game = ({baseUrl}) => {
  const [firstMessage, setFirstMessage] = useState();

  const startGameHandler = () => {
    fetch(baseUrl + "/start")
      .then(response => response.json())
      .then(data => setFirstMessage(data.message))
  }

  return (
    <>
      <p>{firstMessage}</p>
      <button onClick={startGameHandler}>Start a Game!</button>
    </>
  )
}

export default App;
