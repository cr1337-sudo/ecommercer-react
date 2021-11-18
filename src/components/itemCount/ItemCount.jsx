import "./itemCount.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import { useRef } from "react";

const ItemCount = ({ title, stock, initial, onAdd }) => {
  const value = useRef(initial);

  const handleChange = (type) => {
    if (type === "+") {
      if (parseInt(value.current.value) < stock)
        value.current.value = parseInt(value.current.value) + 1;
    }
    if (type === "-") {
      if (parseInt(value.current.value) > 1)
        value.current.value = parseInt(value.current.value - 1);
    }
    console.log(value.current.value == stock - 1)
  };

  return (
    <div class="item-count-container">
      <section class="item-count">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ height: "40px", width: "40px" }}
          disabled={value.current.value == stock-1 ? true : false}
          onClick={() => handleChange("+")}
        >
          <AddIcon />
        </Fab>

        <input
          type="number"
          name={title}
          ref={value}
          value={initial}
          max={stock}
          disabled
        />
        <Fab
          color="primary"
          aria-label="remove"
          sx={{ height: "40px", width: "40px" }}
          onClick={() => handleChange("-")}
        >
          <RemoveIcon />
        </Fab>
      </section>
      <section class="submit">
        <Button
          variant="contained"
          disabled={value?.current.value == "0" || stock === 0}
          onClick={(e) => {
            e.preventDefault();
            onAdd(value.current);
          }}
        >
          Add to Cart
        </Button>
      </section>
    </div>
  );
};

export default ItemCount;
