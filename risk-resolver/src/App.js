import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerForm from './Components/PlayerForm';
import PlayerList from './Components/PlayerList';
import GameBoard from './Components/GameBoard';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [weeks] = useState(10);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const gameBoardRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const addPlayer = (name, level) => {
    const handicap = calculateHandicap(level);
    setPlayers([...players, { name, level, handicap, turn: players.length + 1, position: 0, winner: false }]);
  };

  const removePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const calculateHandicap = (level) => {
    switch (level) {
      case 'L2':
        return 1;
      case 'L3':
        return 2;
      case 'L4':
      case 'L5':
        return 3;
      default:
        return 0;
    }
  };

  const startGame = () => {
    const assignTurns = () => {
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
      const updatedPlayers = shuffledPlayers.map((player, index) => ({
        ...player,
        turn: index + 1,
      }));
      setPlayers(updatedPlayers);
    };
  
    assignTurns();
    setGameStarted(true);
    setLoading(true);
  
    if (gameBoardRef.current) {
      gameBoardRef.current.pickScenario();
    }
  
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const toggleInstructions = () => {
    setInstructionsOpen(!instructionsOpen);
  };

  return (
    <div className="App">
      <header className="siteHeader text-white p-3 text-center">
        <h1>Risk Resolver</h1>
        <button className="hamburger" onClick={toggleInstructions}>
          &#9776;
        </button>
      </header>
      <div className={`instructions ${instructionsOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleInstructions}>
          &times;
        </button>
        <h2>How to Play</h2>
        <div className="instructionList">
          <h4>Game Setup</h4>
          <ol>
            <li>Add player name and select their respective level. This will impose a handicap on that player. If you wish to see the handicap, click the information
              icon to the right of the player's name.
            </li>
            <li>Click "Start Game" to begin.</li>
          </ol>
          <h4>Gameplay</h4>
          <ol>
            <li>The player who's turn it is will have their name colored green.</li>
            <li>The player will read the prompt and be given a short time to give a response.</li>
            <li>After the player gives their risk management strategy, the other players will attempt to point out flaws in the proposed solution.</li>
            <li>After conversing, the likelihood of success will be chosen by the group and the player will drag the slider to the corresponding number. Note that your handicap
              may limit the max success value that can be chosen.
            </li>
            <li>The player will then click "Roll" to randomly choose a number between 1 and 10. If the number is green, the player will move forward by one week. If the number is red, the player will move back by one week.
            </li>
            <li>The player will then click "Next Round" to start the next round.</li>
            <li>When a player reaches week 10, they have won the game.</li>
          </ol>
          <h4>Surprise Events</h4>
          <ol>
            <li>Each round, a surprise event may be triggered. These will be shown by a popup that blocks gameplay.</li>
            <li>The players will receive a short time to read the prompt and choose their response A or B.</li>
            <li>Once all players have answered, the "Submit" button will be chosen. Players that chose the correct response will not move. Players that chose the incorrect response will go backward by one week.</li>
          </ol>
        </div>
      </div>
      <main className="container my-4">
        <div className="row">
          <div className="col-12">
            {gameStarted ? (
              <>
                {loading ? (
                  <div className="loading-screen">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                  </div>
                ) : (
                  <>
                    <GameBoard ref={gameBoardRef} players={players} setPlayers={setPlayers} weeks={weeks} />
                  </>
                )}
              </>
            ) : (
              <div className="player-input mt-4">
                <PlayerForm addPlayer={addPlayer} />
                <div className="text-center">
                  <button className="btn btn-primary mt-3 ml-2" onClick={startGame} disabled={players.length === 0}>
                    Start Game
                  </button>
                </div>
              </div>
            )}
            {!gameStarted && (
              <div className="player-list-container">
                <PlayerList players={players} removePlayer={removePlayer} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;