import { createContext, useState } from "react"
import { db } from "../db/db"
import { addDoc, collection } from "firebase/firestore"
export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])
  console.log(db)

  const postOrden = async (orden, precioTotal) => {
    const ordersCollection = collection(db, "ordenes")
    try {
      const docRef = await addDoc(ordersCollection, { productos: orden, precioTotal })
      console.log("Document written with ID: ", docRef.id)
      return docRef
    } catch (error) {
      console.log("Error")
    }
  }
  const eliminarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== productoId)
    setCarrito(nuevoCarrito)
  }

  const agregarACarrito = (producto) => {
    const buscarCarrito = carrito.find((productoCarrito) => productoCarrito.id === producto.id)
    if (buscarCarrito) {
      setCarrito(
        carrito.map((productoCarrito) => {
          if (productoCarrito.id === producto.id) {
            return { ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad }
          }
          return productoCarrito
        }),
      )
    } else {
      setCarrito([...carrito, producto])
    }
  }
  const limpiarCarrito = () => {
    setCarrito([])
  }
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarACarrito,
        limpiarCarrito,
        eliminarDelCarrito,
        postOrden,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
