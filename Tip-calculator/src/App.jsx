import { useState } from "react";
function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill]= useState("");
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2]= useState(0);
  const percentage = (percentage1 + percentage2) / 2/100;
  const tip = bill * percentage;
  const total = bill + tip;
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage1={percentage1} onSelect={setPercentage1}> How are you satisfied?</SelectPercentage>
      <SelectPercentage percentage2={percentage2} onSelect={setPercentage2}> How your friend satisfied?</SelectPercentage>

     { bill > 0 && (
      <>
      <OutPut bill={bill} percentage={percentage} tip={tip} total={total} />
      <RestButton onReset={() => {
        setBill(0);
        setPercentage1(0);
        setPercentage2(0);
      }} />
      </>
     )
}
    </div>
  );
}
function BillInput({bill, onSetBill}) {
  return (
    <div>
      <label>
        Your bill amount:
        <input type="number" placeholder="your bill" value={bill} onChange={e=>onSetBill(Number(e.target.value))} />
      </label>
    </div>
  );
}
function SelectPercentage({children, percentage,onSelect }){
  return (
    <div>{children}

    <select value={percentage} onChange={e=>onSelect(Number(e.target.value))}>
      {/* <option value="0">satisfaction level</option> */}
      <option value="5">satisfied 5%</option>
      <option value="10">satisfied 10%</option>
      <option value="20">satisfied 20%</option>
      <option value="100">satisfied 100%</option>
    </select>
    </div>
  )
}
function OutPut({bill, tip, total}) {
  return (
    <div>
      <h3>your pay {total} (${bill} + ${tip} tip)</h3>
    
    </div>
  )
}
function RestButton({onReset}) {
  function handleReset (){
    onReset();
  }
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App;
