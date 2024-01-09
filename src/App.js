
import { useState } from 'react';
import './App.css';
import Todo from './Todo';


function App() {
  const array=[
    {
      name: ""
    }
  ]
  
  const [arr, setArr] = useState(array)
  console.log(arr);


  const data =(data)=>{
  console.log(data);
  setArr((prev) => [...prev,data])
}

  return (
    <div className="App">
    {/* { <Counter/>} */}
    <Todo test={data}/>
    {
     array.map((el) =>{
     <h1>{el.name}</h1>
      })
    } 
    </div>
  );
}

export default App;






