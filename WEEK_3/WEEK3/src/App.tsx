import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const plusOne =  (prev:number) => prev + 1;


  // const handleCounter = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={()=>{
      //goodcase
      setCount((prev) => (prev + 1))
      setCount(plusOne)
      //badcase
      setCount(count + 1) 
    }}>증가</button>
    </>
  );
}

export default App;
