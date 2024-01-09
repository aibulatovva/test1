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
     <input onChange={todo} type="text" />
     <button onClick={click}>CLICK</button>
          
      </div>
     )
     }


export default Todo