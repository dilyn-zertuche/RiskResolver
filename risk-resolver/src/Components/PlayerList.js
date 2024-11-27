import React from 'react';
import PlayerInfo from './PlayerInfo';

function PlayerList({ players }) {
  return (
    <div className="player-list mt-4">
      <h3 className="text-center">Players</h3>
      <div className="row justify-content-center">
        {players.map((player, index) => (
          <div key={index} className="col-md-4 mb-3">
            <PlayerInfo player={player} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerList;