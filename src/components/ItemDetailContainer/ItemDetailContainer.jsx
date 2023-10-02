import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { productos } from "../../mockups/productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Flex, Loader } from "@mantine/core"
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState()
  const { id } = useParams()
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const buscarProducto = productos.find((prod) => prod.id === parseInt(id))
      setProducto(buscarProducto)
      setCargando(false)
    }, 2000)
  })

  return (
    <Flex wrap="wrap" gap={10} justify="center" mt={30}>
      {cargando ? <Loader color="blue" /> : <ItemDetail {...producto} compacto={false} />}
    </Flex>
  )
}

export default ItemDetailContainer
