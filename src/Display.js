import React from 'react';
import './styles/Display.css'


//  da valor para pantalla que App.js le asigna
 const Display = ({ medida,color, value }) => (
     <div className='display'>
    <div className={color}>
     <input className={medida} type="text" value={value} readOnly /> 
     </div>
     </div> );
      export default Display; 



      