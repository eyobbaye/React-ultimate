import { useState } from "react";
import "./App.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);
  const itemCount = items.length;
  console.log(itemCount);

  return (
    <>
      <Logo />
      <Form setItems={setItems} />
      <Packing items={items} setItems={setItems} />
      <Stats items={items} />
    </>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form({ setItems }) {
  // State variavble fot the added items
  // const [submitedValue, setSubmitedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [nextId, setNextId] = useState(1);
  const [description, setDescription] = useState("");

  // event handler on submit
  const handleSubmit = (e) => {
    // prevent the page reload
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: nextId };
    console.log(newItem);

    if (!description) return;
    // set the input fields to the deafualt value
    setDescription("");
    setQuantity(1);
    // Add items using rested operation method.
    setItems((prevItems) => [...prevItems, newItem]);
    setNextId((n) => n + 1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* Generate nuber 1- 15 using Array.from method */}
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="items..."></input>
      <button>Add</button>
    </form>
  );
}

function Packing({ items, setItems }) {
  return (
    <div className="list">
      <ul>
        {/* Rendering the items list using Prop. */}
        {items.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} /> // item Prop.
        ))}
      </ul>
    </div>
  );
}

function Item({ item, setItems }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {item.id}, {item.quantity} {item.description}
      </span>
      <button
        onClick={() =>
          setItems((prev) => prev.filter((it) => it.id !== item.id))
        }>
        ❌
      </button>
    </li>
  );
}
function Stats({ items }) {
  const total = items.length;
  const packed = (items || []).filter((it) => it.packed).length;
  const percent = total ? Math.round((packed / total) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        💼 You have {total} items on your list, and you have alrady packed{" "}
        {packed} ({percent}%)
      </em>
    </footer>
  );
}

export default App;
