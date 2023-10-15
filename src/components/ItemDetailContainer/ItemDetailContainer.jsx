import { Flex, Loader } from "@mantine/core"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../db/db"
import ItemDetail from "../ItemDetail/ItemDetail"
import { esperaSimulada } from "../../utils/esperaSimulada"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState()
  const { id } = useParams()
  const [cargando, setCargando] = useState(true)
  const getProducto = async () => {
    setCargando(true)
    await esperaSimulada(2000)
    const productRef = doc(db, "productos", id)
    getDoc(productRef).then((response) => {
      if (response.exists()) {
        const product = { id: response.id, ...response.data() }
        setProducto(product)
        setCargando(false)
      } else {
        console.log("el producto no existe")
      }
    })
  }
  useEffect(() => {
    async function invocar() {
      getProducto()
    }

    invocar()
  }, [id])

  return (
    <Flex wrap="wrap" gap={10} justify="center" mt={30}>
      {cargando ? <Loader color="blue" /> : <ItemDetail {...producto} compacto={false} />}
    </Flex>
  )
}

export default ItemDetailContainer
