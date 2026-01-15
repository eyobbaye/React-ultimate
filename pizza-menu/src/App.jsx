import { useState } from "react";
import pizzaData from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

// Pizza Menu app component
// Header
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
// Menu
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <PizzaMenu />
    </div>
  );
}
// Footer
function Footer() {
  return (
    <footer>
      <p>We're currently Open!</p>
    </footer>
  );
}

function PizzaMenu() {
  return (
    <>
      <div>
        {/* <h2>Our Menu</h2> */}
        <ul>
          {pizzaData.map((pizza) => (
            <li>
              <img src= {pizza.photoName} alt={pizza.name} width ="100" />
              <p>{pizza.name} - ${pizza.price}</p>
              <p>Ingredients: {pizza.ingredients}</p>
            </li>
          ))}
        </ul>
        {/* <img src="pizzas/focaccia.jpg" alt="{pizza.name}" width={"100"} />
        <h2>
          {pizzaData[0].name} - ${pizzaData[0].price}
        </h2>
        <p>Ingredients: {pizzaData[0].ingredients}</p> */}
      </div>
    </>
  );
}

export default App;
