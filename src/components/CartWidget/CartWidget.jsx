import { Link } from "react-router-dom"
import Cart from "../../assets/icons/cart.png"
import "./styles.css"
import { Anchor, Indicator } from "@mantine/core"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
function CartWidget() {
  const { carrito } = useContext(CartContext)
  const cantidad = carrito.reduce((prev, current) => prev + current.cantidad, 0)
  return (
    <Anchor component={Link} to="/checkout">
      <Indicator inline label={cantidad} size={15}>
        <img src={Cart} alt="cart" className="cart" />
      </Indicator>
    </Anchor>
  )
}

export default CartWidget
