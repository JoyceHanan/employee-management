import React from 'react'
import {useContext} from 'react'
import { counterContextobj } from '../context/ContextProvider'
import { useCounterStore } from '../Store/CounterStore'
function Home() {
  //call useCounterstore hook to get state of zustand
  let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter);
    let newCounter1=useCounterStore((state)=>state.newCounter1);
  let incrementCounter1=useCounterStore((state)=>state.incrementCounter1);
  let decrementCounter=useCounterStore((state)=>state.decrementCounter);
  let decrementCounter1=useCounterStore((state)=>state.decrementCounter1);
  let change=useCounterStore(()=>newCounter);
  const { counter, changecounter } = useContext(counterContextobj)
  const{counter1,changecounter1}=useContext(counterContextobj)
  return (
    <div>
    <div>
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changecounter} className='bg-purple-300 p-5 text-3xl'>Increment</button>
    </div>
    <div>
      <h1 className='text-4xl'>Counter: {counter1}</h1>
      <button onClick={changecounter1} className='bg-purple-300 p-5 text-3xl'>Increment</button>
    </div>
     <div>
      <h1 className='text-4xl'>Counter: {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-purple-300 p-5 text-3xl m-1'>Increment</button>
      <button onClick={decrementCounter} className='bg-purple-300 p-5 text-3xl'>Decrement</button>
      <button onClick={change} className='bg-purple-300 p-5 text-3xl'>set</button>
    </div>
    <div>
      <h1 className='text-4xl'>Counter: {newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-purple-300 p-5 text-3xl m-1'>Increment</button>
      <button onClick={decrementCounter1} className='bg-purple-300 p-5 text-3xl'>Decrement</button>
    </div>
    </div>
  )
}

export default Home
