import React from 'react';
import './styles/Keyboard.css';

const Keyboard = ({
  onKeyPress,
  onBackspace,
  onClear,
  onToggleKeyboard,
  enterPressed,
  changeSize,
  changeColor,
  capsLock,
  keyboardLayout,
}) => {
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  const handleBackspace = () => {
    onBackspace();
  };

  const handleClear = () => {
    onClear();
  };

  const handleToggleKeyboard = () => {
    onToggleKeyboard();
  };

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <button onClick={handleBackspace}>✖️</button>
        <button onClick={handleClear}>🗑️</button>
        <button onClick={handleToggleKeyboard}>⌨️</button>
        <button onClick={enterPressed}>⏎</button>
        <button onClick={changeSize}>📏</button>
        <button onClick={changeColor}>🎨</button>
        <button onClick={capsLock}>📋</button>
      </div>
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} onClick={() => handleKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
