import { useParams } from "react-router-dom"
import { productos } from "../../mockups/productos"
import Item from "../Item/Item"
import { Text } from "@mantine/core"
const ItemDetailContainer = () => {
  const { id } = useParams()
  const buscarProducto = productos.find((producto) => producto.id === parseInt(id))

  if (!buscarProducto) {
    return <Text>No se ha encontrado el producto</Text>
  }
  return (
    <>
      <Item producto={buscarProducto} compacto={false} />
    </>
  )
}

export default ItemDetailContainer
