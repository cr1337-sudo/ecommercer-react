import "./item.scss";
import React from "react";
import ItemCount from "../itemCount/ItemCount.jsx";

const Item = ({ title, pictureUrl, price, stock, initial, onAdd }) => {
  return (
    <div class="item-card">
      <section class="card-top">
        <img src={pictureUrl} alt="" />
      </section>
      <section class="card-center">
        <p class="name">{title}</p>
        <p class="price">${price}</p>
        <p class="stock">stock {stock}</p>
      </section>
      <ItemCount title={title} initial={initial} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default Item;
