import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import './Component_Styling/GameBoard.css';
import scenarios from '../scenarios';
import surpriseList from '../surprises'; // Import your surprise events
import SurprisePopup from './SurprisePopup'; // Import the SurprisePopup component

const GameBoard = forwardRef(({ players, setPlayers, weeks }, ref) => {
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
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    console.log('Picked scenario:', scenario); // Add logging
    setCurrentScenario(scenario);
  };

  useImperativeHandle(ref, () => ({
    pickScenario
  }));

  useEffect(() => {
    pickScenario();
  }, []);

  const nextRound = () => {
    pickScenario();
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
    const numberElement = document.querySelector('.random-number');
    if (numberElement) {
      numberElement.classList.add('rolling');
    }
  
    // Simulate the rolling animation by changing numbers rapidly
    let rollInterval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      setRandomNumber(randomNum);
    }, 100); // Change number every 100ms
  
    // Stop the rolling animation after 2 seconds
    setTimeout(() => {
      clearInterval(rollInterval);
      const finalNumber = Math.floor(Math.random() * 10) + 1;
      setRandomNumber(finalNumber);
      if (finalNumber > sliderValue) {
        setResultColor('red');
        movePlayerBackward(currentTurn - 1); // Move the current player backward
      } else {
        setResultColor('green');
        movePlayerForward(currentTurn - 1); // Move the current player forward
      }
  
      // Remove the rolling class to stop the animation
      if (numberElement) {
        numberElement.classList.remove('rolling');
      }
    }, 2000); // Duration of the animation
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
});

export default GameBoard;