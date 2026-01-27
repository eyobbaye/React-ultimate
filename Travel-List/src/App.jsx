import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

function App() {
  return (
    <>
      <Logo />
      <Form />
      <Packing />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form() {
  // State variable for the current  input value
  const [inputValue, setInputValue] = useState("");
  // State variavble fot the added items
  const [items, setItems]= useState([])

  // function to handle input change
  const handleCahnge = (e) => {
setInputValue(e.target.value);


  }

  // event handler on submit
  const handleSubmit = (e)=>{
    // prevent the page reload 
    e.preventDefault();
    console.log(e)
// Add new input items to the list
    if(inputValue.trim() === '') return;
    setItems((prevItems)=> [...prevItems, inputValue]);

// clear the input fields
setInputValue(" ")
    
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({length:15}, (_,i) => i + 1).map((num)=> (
          <option value={num} key={num}>{num}</option>
        ))
        }
      </select>
      <input type="text" value={inputValue} onChange={handleCahnge} placeholder="items..."></input>
      <button>Add</button>
    </form>
  );
}
function Packing() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {item.id}, {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list, and you have alrady packed X (X%)
      </em>
    </footer>
  );
}

export default App;
