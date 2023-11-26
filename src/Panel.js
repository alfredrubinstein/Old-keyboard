import React from 'react';
import './styles/Panel.css'


//da lugar para lo que App.js quiera poner en el, tanto el panel mismo como el cartel de inicio
const Panel = ({ children }) => (
     <div className="virtual-keyboard">
    {children} 
     </div> 
     );
  export default Panel; 