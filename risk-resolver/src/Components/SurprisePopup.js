import React from 'react';
import './Component_Styling/SurprisePopup.css';

const SurprisePopup = ({ surprise, players, onChoiceChange, onSubmit }) => {
  return (
    <div className="popup popup-flash">
      <div className="popup-content">
        <h3>{surprise.event}</h3>
        <ul>
          {surprise.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        {players.map((player, index) => (
          <div key={index} className="player-choice">
            <span>{player.name}</span>
            <label>
              <input
                type="radio"
                name={`choice-${player.name}`}
                value=" A"
                onChange={() => onChoiceChange(player, 'A')}
              />
              A
            </label>
            <label>
              <input
                type="radio"
                name={`choice-${player.name}`}
                value=" B"
                onChange={() => onChoiceChange(player, 'B')}
              />
              B
            </label>
          </div>
        ))}
        <button className="btn btn-primary submit-btn" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SurprisePopup;