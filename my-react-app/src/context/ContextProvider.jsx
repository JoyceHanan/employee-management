import React from 'react'
import { createContext,useState} from 'react'
export const counterContextobj=createContext()
function ContextProvider({children}) {
    //state
    const [counter,setCounter]=useState(10)
    const [counter1,setCounter1]=useState(20)
    //function to change state
    const changecounter=()=>{
        setCounter(counter+1)
    }
     const changecounter1=()=>{
        setCounter1(counter1+1)
    }
  return (
    <counterContextobj.Provider value={{counter, counter1, changecounter,changecounter1}}>
      {children}
    </counterContextobj.Provider>
  )
}

export default ContextProvider
