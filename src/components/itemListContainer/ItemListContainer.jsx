import "./itemListContainer.scss";
import data from "../../data.js";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de fetch a una API
    //
    const fetchItems = () => {
      //Sé que pedían promesas pero por comodidad prefiero utilizar async/await,
      //y utilizar promesas en casos que una operación asíncrona requiera mucha más lógica
      try {
        setTimeout(() => setItems(data), [2000]);
      } catch (e) {
        console.log("Error al obtener los productos");
      }
    };
    fetchItems();
  }, [items]);

  const onAdd = (value) => {
    setCartItems([
      {
        [value.name]: value.value,
      },
    ]);
  };
  return (
    <div className="item-list-container">
      <ItemList items={items} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
