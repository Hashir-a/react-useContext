import React, { useContext } from 'react';
import Valuecontext from './ValueContext';

function Child() {
    let num = useContext(Valuecontext);
  return (
  <div>
      useContext
      <br/>
      Child ... number = {num[0]}
      <br/>
      <button onClick= {()=>num[1](++num[0])}>Increment Num</button>
  </div>
  );
}

export default Child;
