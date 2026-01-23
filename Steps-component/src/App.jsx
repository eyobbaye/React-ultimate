import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Debug code error  ",
];

function App() {
  const [step, setStep] = useState(1);
  // const [currentStep, setCurrentStep]= useState(step)
  const [isOpen, setIsOpen] = useState(false);

  function handlePrvious() {
    step >= messages.length - 2 ? setStep(step - 1) : " ";
  }
  function handleNext() {
    step <= messages.length - 1 ? setStep(step + 1) : "";
  }
  function handleIsOpen(){
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <button className="button" onClick={handlePrvious}>
              <span>Previous</span>
            </button>
            <button className="button" onClick={handleNext}>
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
