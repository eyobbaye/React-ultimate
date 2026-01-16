import { useState } from "react";
import pizzaData from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="">
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
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
// Menu
function Menu() {
  const pizzas = pizzaData;
  // Conditional Rendering
  //  const pizzas = []
  const numPizzas = pizzas.length;
  
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <PizzaMenu key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      )}
      {/* ) */}
      {/* <PizzaMenu
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
      /> */}
    </main>
  );
}
function PizzaMenu(props) {
  console.log(props);
  return (
    <>
      <li className="pizza">
        {/* Using Props */}
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div className="">
          <h3>{props.pizzaObj.name}</h3>
          <p>Ingredients: {props.pizzaObj.ingredients}</p>
          <p>Price: ${props.pizzaObj.price + 3} </p>
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
      </li>
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
        <div className="order">
          <p> {new Date().toLocaleTimeString()}. We're Currently Open!</p>
        </div>
        <button className="btn">Order</button>
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
