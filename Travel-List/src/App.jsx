import { useState } from "react";
import "./App.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: true },
// ];
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [items, setItems] = useState([]);//Lift up the state so we can share items data though the component

  return (
    <>
      <Logo />
      <Form setItems={setItems} />
      <Packing items={items} setItems={setItems} />
      <Stats items={items} />
      <Accordion data={faqs}/>
    </>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
// pass the setState in to the form as props: setItems
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
    // console.log(newItem);

    if (!description) return;
    // set the input fields to the deafualt value
    setDescription("");
    setQuantity(1);
    // Add items using spread operation method.
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
      <button disabled ={items.length === 0} onClick={()=>window.confirm("You shure?")? setItems([]): items }>Clear List</button>
    </div>
  );
}

function Item({ item, setItems }) {
  const handleCheckboxClick = (id, checked) => {
    setItems((prev) =>
      // use Spread opereation method to update the packed state.
      prev.map((item) => (item.id === id ? { ...item, packed: checked } : item)),
    );
  };

  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e)=>handleCheckboxClick(item.id, e.target.checked)}
      />
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

  const total = items.length;// drived state
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
function Accordion ({data}){
  const [curOpen, setIsOpen]= useState(null)
  return (
    <>
    <div className="accordion">
      {
        data.map((el,i)=>(
          <AccordionItem curOpen={curOpen} onOpen={setIsOpen} key={i} title={el.title} text={el.text} num={i+1}/>  
        ))
      }
    </div>
    </>
  )
  function AccordionItem ({title,text,num,curOpen,onOpen}){
    // const [isOpen, setIsOpen]= useState(false);
    const isOpen = num === curOpen;

    const handleToggle= () =>{
      // setIsOpen(!isOpen)
      onOpen(isOpen ? 'open': num)
    }
    return (
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen? '-': '+'}</p>
        { isOpen &&<p className="content-box">{text}</p>}
      </div>
    )
  }

}

export default App;
