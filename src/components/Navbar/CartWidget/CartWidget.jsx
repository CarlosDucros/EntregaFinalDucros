import Cart from "../../../assets/icons/cart.png";
import "./styles.css";

function CartWidget() {
  return (
    <div>
      <img src={Cart} alt="cart" className="cart" />
    </div>
  );
}

export default CartWidget;
