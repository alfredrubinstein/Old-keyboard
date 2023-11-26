import React, { useState } from 'react';
import './styles/App.css';
import Panel from './Panel';
import Display from './Display';
import Keyboard from './Keyboard';
import Modal from './Modal';
import TiposDeTeclados, { clasickeyboard, hebrewKeyboard, clasickeyboardCapsLock } from './TiposDeTeclados';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonSelectorKeyboard, setButtonSelectorKeyboard] = useState(null);
  const [textSize, setTextSize] = useState('normal-text');
const[textColor,setTextColor]=useState('negro');
const [enter, setEnter] = useState('');




const saveToLocalStorage = (input) => {
  const existingData = localStorage.getItem('inputValues');

  const existingArray = existingData ? JSON.parse(existingData) : [];

  existingArray.push(input);

  localStorage.setItem('inputValues', JSON.stringify(existingArray));
};

const retrieveFromLocalStorage = () => {
  const existingData = localStorage.getItem('inputValues');

  if (existingData) {
    const existingArray = JSON.parse(existingData);

    const lastInputValue = existingArray.pop();

    localStorage.setItem('inputValues', JSON.stringify(existingArray));

    return lastInputValue;
  }

  return null;
};





  const handleKeyPress = (key) => {
    console.log('estas en App en handleKeyPress');
    setInputValue((text) => text + key);
    saveToLocalStorage(setInputValue);
  };

  const handleBackspace = () => {
    console.log('estas en App en handleBackSpace');
    setInputValue((text) => text.slice(0, -1));
    saveToLocalStorage(setInputValue);
  };

  const handleClear = () => {
    console.log('estas en App en handleClear');
    setInputValue('');
    saveToLocalStorage(setInputValue);
  };

  const handleToggleKeyboard = () => {
    console.log('estas en App en handleToggleKeyboard');
    setButtonSelectorKeyboard((prevValue) => (prevValue === null ? 'hebrew' : null));
  };

  let selectedKeyboard = buttonSelectorKeyboard === null ? clasickeyboard : hebrewKeyboard;



  const handleChangeSize = () => {
    console.log('estas en App en handleChangeSize');
    if (textSize === 'normal-text') {
      setTextSize('large-text');
    } else if (textSize === 'large-text') {
      setTextSize('extra-large-text');
    } else {
      setTextSize('normal-text');
    }
  };


    const handleEnterPresed = (text) => {
      alert('פונקציה לא פעילה');
    }
  //revisar no funcionan
// const handleEnterPresed = (text) => {
//   let resultado = '';
//   for (let i = 0; i < text.length; i++) {
//     let codigoAscii = text.charCodeAt(i);
//     codigoAscii += 10;
//     resultado += String.fromCharCode(codigoAscii);
//   }
//   setEnter(resultado);
//   console.log('Estás en App en handleEnterPressed');
// };


    const handleChangeColor = ()=>{
      console.log('estas en App en handleChengeColor');
      if (textColor === 'negro') {
        setTextSize('rojo');
      } else if (textColor === 'rojo') {
        setTextSize('verde');
      } else {
        setTextSize('negro');
      }
    };
    

const handleCapsLock = () => {
  console.log('estas en App en handleCapsLock');
  const lastInput = retrieveFromLocalStorage(); // Obtener el último valor guardado

  if (lastInput !== null) {
    setInputValue(lastInput); // Asignar el último valor recuperado a inputValue
  }
};


  return (
    <Panel>
      <Modal />
      <Display medida={textSize} color={textColor} value={inputValue}/>
      
      <Keyboard
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
        onClear={handleClear}
        onToggleKeyboard={handleToggleKeyboard}
        keyboardLayout={selectedKeyboard}
        changeSize={handleChangeSize}
        enterPressed={handleEnterPresed}       
        //revisar funciones que no funcionan
        changeColor={handleChangeColor}
        capsLock={handleCapsLock}
      />
    </Panel>
  );
};

export default App;
