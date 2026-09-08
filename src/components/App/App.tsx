import { useState, useEffect } from "react";

export default function App() {
 
  const [count, setCount] = useState(() => {
    const saveCount = window.localStorage.getItem("save-click");

    if (saveCount !== null) {
      return JSON.parse(saveCount);
    }
    return 0;
  })

  useEffect(() => {
    localStorage.setItem("save-click", JSON.stringify(count));
  },[count])
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
