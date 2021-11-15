import "./itemListContainer.scss";
import ItemCount from "../itemCount/ItemCount.jsx";
import data from "../../data.js";
import {useState} from "react";

const ItemListContainer = () => {
  const [cartItems, setCartItems] = useState([])
  const onAdd = (value)=>{
    setCartItems([
      {
        [value.name]:value.value
      }
    ])
  }
  console.log(cartItems)
  return (
    <div className="items-container">
      {data.map((item) => (
        <ItemCount name={item.name} pic={item.pic} price={item.price} stock={item.stock} initial={item.initial} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ItemListContainer;
