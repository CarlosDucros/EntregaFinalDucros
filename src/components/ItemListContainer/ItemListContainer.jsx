import "./styles.css"
import ItemList from "../ItemList/ItemList"
import { Flex, Loader } from "@mantine/core"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function ItemListContainer({}) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoria } = useParams()

  const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }
  const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((prod) => prod.categoria === categoria))
      }, 2000)
    })
  }
  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response)
        setCargando(false)
      })
      .catch(
        (error) => {
          console.error(error)
        },
        [productos],
      )
  })

  useEffect(() => {
    const mostrarProductosPorCategoria = categoria ? getProductosPorCategoria : getProductos
    mostrarProductosPorCategoria(categoria)
      .then((response) => {
        setProductos(response)
      })
      .catch(
        (error) => {
          console.error(error)
        },
        [categoria],
      )
  })

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
