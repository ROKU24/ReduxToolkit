
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  const[amount,setAmount]=useState(0)

  function handleIncrementClick(){
    dispatch(increment())

  }
  function handleDecrementClick(){
    dispatch(decrement())

  }
  function handleResetClick(){
    dispatch(reset())

  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))

  }



  return(
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <p></p>
      <button onClick={handleResetClick}>Reset</button>
      <p></p>
      <input type='number'
      value={amount} 
      placeholder='Enter Amount'
      onChange={(e)=>setAmount(e.target.value)}/>
      <p></p>
      <p></p>
      <button onClick={handleIncAmountClick}>Inc by Amount</button>

    </div>
  )
}

export default App
