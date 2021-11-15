import CartWidget from "../cartWidget/CartWidget";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import "./navBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <section className="brand">React</section>
        <ul className="items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Section</a>
          </li>
          <li>
            <a href="#">Etc</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
