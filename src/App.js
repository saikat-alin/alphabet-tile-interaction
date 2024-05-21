import React, { useState } from 'react';
import './App.css';

function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    setOutputString(prevString => {
      // Append the clicked letter to the outputString
      const newString = prevString + letter;
      
      // Check for consecutive letters and replace them with a single underscore
      let finalString = newString.replace(/([A-Z])\1{2,}/g, '_');
      
      return finalString;
    });
  };

  // Function to render alphabet tiles
  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('').map(letter => (
      <div key={letter} className="tile" onClick={() => handleClick(letter)}>
        {letter}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1 className='heading'>Alphabet Tile Interaction</h1>
      <div className="container">
        <div className="grid">
          {renderTiles()}
        </div>
      </div>
      <div className="output">
        <h2>Output:</h2>
        <p id="outputString">{outputString}</p>
      </div>
    </div>
  );
}

export default App;
