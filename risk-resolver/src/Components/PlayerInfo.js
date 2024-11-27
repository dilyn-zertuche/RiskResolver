import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerInfo = ({ player }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title mb-0">{player.name} {player.turn !== null && <span className="badge bg-primary ml-2">Turn: {player.turn}</span>}</h5>
          <FaInfoCircle className="ml-2 text-info" onClick={toggleDetails} style={{ cursor: 'pointer' }} />
        </div>
        {showDetails && (
          <div className="mt-2">
            <p className="card-text mb-1">Level: {player.level}</p>
            <p className="card-text mb-1">Handicap: {player.handicap}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerInfo;