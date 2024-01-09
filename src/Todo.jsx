import React, { useState } from 'react'

const Todo = (props) => {
        const[state, setState] = useState([{name: "User"}])

        const user ={
            name: state
        }
    
        const todo = (e)=>{
        setState(e.target.value)
        
    }
       const click =()=>{
        props.test(user)

    }    
      console.log(state);
      



     return (
     <div>
        <h1>NEW BRANCH</h1>
        <h1>TEST2-COMP</h1>
     <input onChange={todo} type="text" />
     <button onClick={click}>CLICK</button>
          
      </div>
     )
     }


export default Todo