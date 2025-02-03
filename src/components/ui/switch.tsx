import React, { useState } from 'react';
import './switch.css';

const Switch = ({toggleDiv, title1, title2}: {toggleDiv: Function, title1: string, title2: string}) => {
  const [isOn, setIsOn] = useState(false);

  const setSwitch = (side: string) => {
    if 
      (side === 'recap') setIsOn(false);
    else 
      setIsOn(true);
    toggleDiv(side);
  }

  return (
    <div className='switchBar'>
      <button className={`switch ${isOn ? 'on' : 'off'}`} style={{borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} onClick={() => setSwitch(title1)}>
        <p className='font-semibold' style={{fontSize: 20}}>{title1}</p>
      </button>
      <button className={`switch ${!isOn ? 'on' : 'off'}`} style={{borderTopRightRadius: 15, borderBottomRightRadius: 15}} onClick={() => setSwitch(title2)}>
        <p className='font-semibold' style={{fontSize: 20}}>{title2}</p>
      </button>
    </div>
  );
};

export default Switch;