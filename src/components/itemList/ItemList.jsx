import React from "react";
import Item from "../item/Item.jsx";

const ItemList = ({ items, onAdd }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          pictureUrl={item.pictureUrl}
          price={item.price}
          stock={item.stock}
          initial={item.initial}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ItemList;
