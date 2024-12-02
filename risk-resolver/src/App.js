import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerForm from './Components/PlayerForm';
import PlayerList from './Components/PlayerList';
import GameBoard from './Components/GameBoard';
import PlayerDashboard from './Components/PlayerDashboard';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [assigningTurns, setAssigningTurns] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [weeks] = useState(10);

  const addPlayer = (name, level) => {
    const handicap = calculateHandicap(level);
    setPlayers([...players, { name, level, handicap, turn: players.length + 1, position: 0, winner: false }]);
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

  const assignTurns = () => {
    setAssigningTurns(true);
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    setTimeout(() => {
      const updatedPlayers = shuffledPlayers.map((player, index) => ({
        ...player,
        turn: index + 1,
      }));
      setPlayers(updatedPlayers);
      setAssigningTurns(false);
    }, 2000);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const movePlayerForward = (index) => {
    setPlayers(players.map((player, i) => {
      if (i === index) {
        const newPosition = player.position + 10;
        const isWinner = newPosition >= 100;
        return { ...player, position: newPosition, winner: isWinner };
      }
      return player;
    }));
  };

  const movePlayerBackward = (index) => {
    setPlayers(players.map((player, i) => {
      if (i === index) {
        const newPosition = Math.max(player.position - 10, 0);
        return { ...player, position: newPosition };
      }
      return player;
    }));
  };

  return (
    <div className="App">
      <header className="bg-dark text-white p-3 text-center">
        <h1>Risk Resolver</h1>
      </header>
      <main className="container my-4">
        <div className="row">
          <div className="col-12">
            {gameStarted ? (
              <>
                <GameBoard players={players} weeks={weeks} />
                <PlayerDashboard players={players} movePlayerForward={movePlayerForward} movePlayerBackward={movePlayerBackward} />
              </>
            ) : (
              <div className="player-input mt-4">
                <PlayerForm addPlayer={addPlayer} />
                <div className="text-center">
                  <button className="btn btn-success mt-3" onClick={assignTurns} disabled={assigningTurns}>
                    {assigningTurns ? 'Assigning Turns...' : 'Assign Turns'}
                  </button>
                  <button className="btn btn-primary mt-3 ml-2" onClick={startGame} disabled={players.length === 0}>
                    Start Game
                  </button>
                </div>
              </div>
            )}
            {!gameStarted && <PlayerList players={players} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;