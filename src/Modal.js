import React, { useState } from 'react';
import './styles/Modal.css'; 

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>'WELCOME TO THE CODIFIER OF TEXTS'</p>
<h3>the safe way to saves your texts</h3>
        <button onClick={onClose}>GO IN</button>
      </div>
    </div>
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleModalClose = () => {
    console.log('cambio de pantalla en Entrada');
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible && <Modal onClose={handleModalClose} />}
     <h3>THE ENIGMA</h3> 
    </div>
  );
};

export default App;
