import { collection, getDocs } from "firebase/firestore"
import { useState } from "react"
import { db } from "../db/db"
import { esperaSimulada } from "../utils/esperaSimulada"
export const useGetProductos = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const fetchProductos = async (categoria) => {
    setCargando(true)
    await esperaSimulada(2000)
    const productRef = collection(db, "productos")

    try {
      const response = await getDocs(productRef)
      const productsFirebase = response.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }))
      if (categoria) {
        const filteredProductos = productsFirebase.filter(
          (producto) => producto.categoria === categoria,
        )
        setProductos(filteredProductos)
      } else {
        setProductos(productsFirebase)
      }

      setCargando(false)
    } catch (error) {
      console.error("Error al obtener los productos de Firebase:", error)
      setCargando(false)
    }
  }
  return { fetchProductos, cargando, productos }
}
