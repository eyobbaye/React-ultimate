import { useState } from "react";
import pizzaData from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2>Pizza</h2>
        <PizzaMenu />
      </div>
    </>
  );
}

// Pizza Menu app component

function PizzaMenu() {
  return (
    <>
      <div>
        <h2>Pizza Menu</h2>
        <ul>
          {pizzaData.map((pizza) => (
            <li>
              {pizza.name} - ${pizza.price}
              <p>Ingredients: {pizza.ingredients}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
