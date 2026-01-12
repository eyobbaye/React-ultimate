import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState("currentDate");
  const [time, setTime] = useState("time");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setCount(count + 1);
    setAdvice(data.slip.advice);
    const today = new Date();
    const currentDate = today.toLocaleDateString();
    const time = today.toLocaleTimeString();
    setCurrentDate(currentDate);
    setTime(time);
  }
  useEffect(() => {
    getAdvice();
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <p>
          Time: {time} Date: {currentDate}
        </p>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <Message count={count} />
      </div>
    </>
  );
}

function Message(props) {
  return <p>Advice Count:{props.count}</p>;
}
export default App;
