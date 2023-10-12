import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null); // Clicked the same button again, reset active button
    } else {
      setActiveButton(button); // Clicked a different button, set it as the active button
    }
  };

  const isButtonActive = (button) => button === activeButton;

  return (
    <div className='window'>
      <div className="options">
        <button className={`button ${isButtonActive('CheckSum') ? 'clicked' : ''}`} onClick={() => handleButtonClick('CheckSum')}>Checksum</button>
        <button className={`button ${isButtonActive('ParityCheck') ? 'clicked' : ''}`} onClick={() => handleButtonClick('ParityCheck')}>Parity Check</button>
        <button className={`button ${isButtonActive('CyclicRedundancyCheck') ? 'clicked' : ''}`} onClick={() => handleButtonClick('CyclicRedundancyCheck')}>Cyclic Redundancy Check</button>
      </div>
      <div className='viewSpace'>
        <div className='viewWindow'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
