import React, { useState } from 'react';
import './Component_Styling/GameBoard.css';
import scenarios from '../scenarios';
import surpriseList from '../surprises'; // Import your surprise events
import SurprisePopup from './SurprisePopup'; // Import the SurprisePopup component

function GameBoard({ players, weeks }) {
  const [currentTurn, setCurrentTurn] = useState(1);
  const [currentScenario, setCurrentScenario] = useState('');
  const [sliderValue, setSliderValue] = useState(5);
  const [randomNumber, setRandomNumber] = useState(null);
  const [resultColor, setResultColor] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentSurprise, setCurrentSurprise] = useState(null);
  const [correctOption, setCorrectOption] = useState('');
  const [playerChoices, setPlayerChoices] = useState({});

  const pickScenario = () => {
    setCurrentScenario(scenarios[Math.floor(Math.random() * scenarios.length)]);
  }

  const nextRound = () => {
    if (Math.random() < 0.25) { // 25% chance to trigger a surprise event
      const surprise = surpriseList[Math.floor(Math.random() * surpriseList.length)];
      setCurrentSurprise(surprise);
      setCorrectOption(Math.random() < 0.5 ? 'A' : 'B');
      setShowPopup(true);
    } else {
      setCurrentTurn((prevTurn) => (prevTurn % players.length) + 1);
      setRandomNumber(null); // Reset random number for the new round
      setResultColor(''); // Reset result color for the new round
    }
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const spinNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(randomNum);
    if (randomNum > sliderValue) {
      setResultColor('red');
    } else {
      setResultColor('green');
    }
  };

  const handleChoiceChange = (player, choice) => {
    setPlayerChoices((prevChoices) => ({
      ...prevChoices,
      [player.name]: choice
    }));
  };

  const handleSubmitChoices = () => {
    players.forEach(player => {
      if (playerChoices[player.name] !== correctOption) {
        player.position = Math.max(0, player.position - (100 / weeks)); // Move back one week, but not below 0
      }
    });
    setShowPopup(false);
    setPlayerChoices({});
    setCurrentTurn((prevTurn) => (prevTurn % players.length) + 1);
  };

  const currentPlayer = players.find(player => player.turn === currentTurn);
  const maxSliderValue = 10 - (currentPlayer ? currentPlayer.handicap : 0);

  return (
    <div className="game-board">
      <div className="gantt-chart-container">
        <div className="timeline">
          {Array.from({ length: weeks }, (_, i) => (
            <div key={i} className="timeline-week">Week {i + 1}</div>
          ))}
        </div>
        <div className="gantt-chart">
          {players.map((player, index) => (
            <div key={index} className="gantt-row">
              <div className={`player-name ${player.turn === currentTurn ? 'current-turn' : ''}`}>
                {player.name}
              </div>
              <div className="gantt-bar-container">
                <div className="gantt-bar" style={{ width: `${player.position}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentScenario && <div className="scenario">{currentScenario}</div>}
      <input
        type="range"
        min="1"
        max={maxSliderValue}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="slider-value">Selected Value: {sliderValue}</div>
      <div className="button-group">
        <button className="btn btn-primary spin-btn" onClick={pickScenario}>Scenario</button>
        <button className="btn btn-primary spin-btn" onClick={spinNumber}>Roll</button>
        <button className="btn btn-primary next-round-btn" onClick={nextRound}>Next Round</button>
      </div>
      {randomNumber !== null && (
        <div className={`random-number ${resultColor}`}>{randomNumber}</div>
      )}
      {showPopup && currentSurprise && (
        <SurprisePopup
          surprise={currentSurprise}
          players={players}
          onChoiceChange={handleChoiceChange}
          onSubmit={handleSubmitChoices}
        />
      )}
    </div>
  );
}

export default GameBoard;