import "./styles.css"
import ItemList from "../ItemList/ItemList"
import { Flex, Loader } from "@mantine/core"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useGetProductos } from "../../hooks/useGetProductos"

const ItemListContainer = () => {
  const { categoria } = useParams()
  const { productos, cargando, fetchProductos } = useGetProductos()

  useEffect(() => {
    fetchProductos(categoria)
  }, [categoria])
  return (
    <>
      <h1>
        {categoria ? (
          <>
            Categoria: <span className="capitalizado">{categoria}</span>
          </>
        ) : (
          <>Productos: </>
        )}
      </h1>
      <Flex wrap="wrap" gap={10} justify="center">
        {cargando ? <Loader color="blue" /> : <ItemList productos={productos} />}
      </Flex>
    </>
  )
}

export default ItemListContainer
