import React, { useState } from 'react';
import './css/switch.css';

const Switch = ({toggleDiv, title1, title2}: {toggleDiv: (side: string) => void, title1: string, title2: string}) => {
  const [isOn, setIsOn] = useState(false);

  const setSwitch = (side: string) => {
    if 
      (side === title1) setIsOn(false);
    else 
      setIsOn(true);
    toggleDiv(side);
  }

  return (
    <div className='switchBar'>
      <button className={`switch ${!isOn ? 'on' : 'off'}`} style={{borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} onClick={() => setSwitch(title1)}>
        <p className='font-semibold' style={{fontSize: 20}}>{title1.charAt(0).toUpperCase() + title1.slice(1)}</p>
      </button>
      <button className={`switch ${isOn ? 'on' : 'off'}`} style={{borderTopRightRadius: 15, borderBottomRightRadius: 15}} onClick={() => setSwitch(title2)}>
        <p className='font-semibold' style={{fontSize: 20}}>{title2.charAt(0).toUpperCase() + title2.slice(1)}</p>
      </button>
    </div>
  );
};

export default Switch;