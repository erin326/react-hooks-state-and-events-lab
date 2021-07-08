import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setCart] = useState("");

  function handleAddToCartClick() {
    setCart(isInCart => !isInCart);
  }

  const appClass = isInCart ? "in-cart" : ""


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick}  className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
