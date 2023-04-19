
import { useState } from "react";

const Counter = () =>{
    let [count , setCount] = useState(0)
    const increment =() =>{
        setCount((prev) => {
            console.log(prev);
            return count +1
        })
    }
  return (
    <>
   
    <h2 >My Counter</h2>
    <h4>{count}</h4>
    <button className="btn btn-success" onClick={increment}> increment</button>
    </>
  )
}

export default Counter