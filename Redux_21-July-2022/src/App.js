
import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from './action';
function App() {
  const [val,setVal]=useState(0);
  {console.log(val)}

    const count=useSelector((state)=>state);
    const disPatch=useDispatch();
  return (
    
    <div>
      <input type='number' onChange={(e)=>{setVal(parseInt(e.target.value))}}/>
  
   <button onClick={()=>disPatch(increment(val))}>Deposite +</button>
        <button onClick={()=>disPatch(decrement(val))}>Withdraw -</button>

     <h1>counter:{count} </h1>
    </div>
  );
}

export default App;
