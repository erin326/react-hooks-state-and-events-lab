import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isLightOn, setLight] = useState("App light");

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);
  function handleDarkModeClick() {
  setLight(isLightOn => !isLightOn);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLightOn ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
