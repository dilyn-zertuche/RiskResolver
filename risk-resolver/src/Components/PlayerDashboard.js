import React from 'react';
import './Component_Styling/PlayerDashboard.css';

function PlayerDashboard({ players, movePlayerForward, movePlayerBackward }) {
  return (
    <div className="player-dashboard">
      {players.map((player, index) => (
        <div key={index} className="player-controls">
          <div className="player-info">
            <div className={`player-name ${player.winner ? 'winner' : ''}`}>{player.name}</div>
          </div>
          <div className="button-group">
            <button className="btn btn-sm btn-primary move-forward-btn" onClick={() => movePlayerForward(index)} disabled={player.winner}>Move Forward</button>
            <button className="btn btn-sm btn-primary move-backward-btn" onClick={() => movePlayerBackward(index)} disabled={player.position === 0 || player.winner}>Move Backward</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerDashboard;