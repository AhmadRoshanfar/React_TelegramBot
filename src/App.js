import { React, useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

const telegram = window.Telegram.WebApp;

function logMe(message) {
  var sendMessage = `
پیام شما: ${message}
  `;
  telegram.sendData(sendMessage);

  // telegram.close();
}

function App() {
  const inputRef = useRef();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    telegram.ready();
    let main_page = document.querySelector("#main_page");

    telegram.SettingsButton.show();
    telegram.BackButton.show();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    telegram.MainButton.text = "Pay :)";
    telegram.MainButton.show();
    telegram.MainButton.onClick(logMe(inputRef.current.value));
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
      <div>
        <h1>Checkout</h1>
        <input type="text" name="" id="" ref={inputRef} />
        <div className="btn-container">
          <button
            style={{
              width: "100px", // Set desired width
              height: "50px", // Set desired height
              fontSize: "16px", // Adjust font size if needed
            }}
            onClick={() => console.log(inputRef.current.value)}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
