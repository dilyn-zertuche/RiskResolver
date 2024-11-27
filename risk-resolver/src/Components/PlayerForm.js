import React, { useState } from 'react';
import "./Component_Styling/PlayerForm.css"

function PlayerForm({ addPlayer }) {
  const [playerName, setPlayerName] = useState('');
  const [playerLevel, setPlayerLevel] = useState('L1');

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      addPlayer(playerName, playerLevel);
      setPlayerName('');
      setPlayerLevel('L1');
    }
  };

  return (
    <form onSubmit={handleAddPlayer} className="form-inline justify-content-center">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="playerName" className="sr-only">Player Name</label>
        <input
          type="text"
          className="form-control"
          id="playerName"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="playerLevel" className="sr-only">Player Level</label>
        <select
          className="form-control"
          id="playerLevel"
          value={playerLevel}
          onChange={(e) => setPlayerLevel(e.target.value)}
        >
          <option value="L1">L1</option>
          <option value="L2">L2</option>
          <option value="L3">L3</option>
          <option value="L4">L4</option>
          <option value="L5">L5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mb-2">Add Player</button>
    </form>
  );
}

export default PlayerForm;