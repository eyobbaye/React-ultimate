import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const todayDate = new Date()
  todayDate.setDate(todayDate.getDate() + count)

  return (
    <>
      <div className="steps">
        <div className="buttons">
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
        <div className="buttons">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
        <p>
          <span> {count === 0 ? `Today is ` : count >0 ? `${count} days from today is ` : `${count} days ago  was `}</span>
          <span>{todayDate.toDateString()}</span>
        </p>
      </div>
    </>
  );
}

export default App;
