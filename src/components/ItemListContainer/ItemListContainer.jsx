import "./styles.css"
import { productos } from "../../mockups/productos"
import Item from "../Item/Item"
import { Flex } from "@mantine/core"
import { useParams } from "react-router-dom"

function ItemListContainer({}) {
  const { categoryId } = useParams()
  const productosFiltrados = categoryId
    ? productos.filter((producto) => producto.categoria === categoryId)
    : productos
  return (
    <>
      <h1>
        {categoryId ? (
          <>
            Categoria: <span className="capitalizado">{categoryId}</span>
          </>
        ) : (
          <>Productos: </>
        )}
      </h1>
      <Flex wrap="wrap" gap={10} justify="center">
        {productosFiltrados.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </Flex>
    </>
  )
}

export default ItemListContainer
