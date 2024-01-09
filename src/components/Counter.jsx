import React, { useReducer, useState } from 'react'


const couterR =(state, action)=>{
console.log(action)
if(action.type==="PLUS"){
    return state+1
}
if(action.type==="MINUS"){
    return state-1
}
   return state

}

    const Counter = () => {
    // const [counter, setCounter] = useState(0)

    // const plus = ()=>{
    // setCounter((prev) => prev+ 1)
    // }
    // const minus = ()=>{
    //     if(counter >0 ){
    //       setCounter((prev) => prev - 1)
    //     }
    // }
    // console.log(counter);

    const [counter, dispatchCounter] = useReducer(couterR, 0)

   const plus =()=>{
    dispatchCounter({type: "PLUS"})
   }
     
   const minus =()=>{
    dispatchCounter({type: "MINUS"})
   }
   
     
  return (
    <div>
        <button onClick={plus}>+</button>
        <h1>{counter}</h1>
        <button onClick={minus}>-</button>
    </div>
  )
}

export default Counter