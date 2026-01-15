import { useState } from "react";
import pizzaData from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
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
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
// Menu
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <PizzaMenu
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        price={pizzaData[0].price}
        photoName={pizzaData[0].photoName}
      />
      <PizzaMenu
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
        photoName={pizzaData[1].photoName}
      />
    </main>
  );
}
function PizzaMenu(props) {
  console.log(props);
  return (
    <>
      <div className="pizza">
        {/* Using Props */}
        <img src={props.photoName} alt={props.name} />
        <h3>{props.name}</h3>
        <div className="">
          <p>Ingredients: {props.ingredients}</p>
          <p>Price: ${props.price + 3} </p>
        </div>

        {/* .map() method */}
        {/* <ul className="">

          {pizzaData.map((pizza) => (
            <li>
              <img src={pizza.photoName} alt={pizza.name} width="100" />
              <p>
                {pizza.name} - ${pizza.price}
              </p>
              <p>Ingredients: {pizza.ingredients}</p>
            </li>
          ))}
        </ul> */}
        {/* <img src="pizzas/focaccia.jpg" alt="{pizza.name}" width={"100"} />
        <h2>
          {pizzaData[0].name} - ${pizzaData[0].price}
        </h2>
        <p>Ingredients: {pizzaData[0].ingredients}</p> */}
      </div>
    </>
  );
}
// Footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) {
    return (
      <footer className="footer">
        <div>
          <p> {new Date().toLocaleTimeString()}. We're Currently Open!</p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="footer">
        <div>
          <p>{new Date().toLocaleTimeString()}. Sorry We're closed!</p>
        </div>
      </footer>
    );
  }
}

export default App;
