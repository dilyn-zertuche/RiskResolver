import React from 'react';
import PlayerInfo from './PlayerInfo';
import "./Component_Styling/PlayerList.css";

function PlayerList({ players, removePlayer }) {
  return (
    <div className="player-list mt-4">
      <header className="playerListHeader">
        <h3 className="playerList text-center">Players</h3>
      </header>
      
      <div className="playerListContent row justify-content-center">
        {players.map((player, index) => (
          <div key={index} className="col-md-4 mb-3">
            <PlayerInfo player={player} removePlayer={() => removePlayer(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerList;