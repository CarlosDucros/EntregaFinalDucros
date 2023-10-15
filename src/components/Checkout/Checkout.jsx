import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Alert, Button, Flex, Loader, Modal, Stack, Table, Text, TextInput } from "@mantine/core"
import { useGetProductos } from "../../hooks/useGetProductos"
import { useDisclosure } from "@mantine/hooks"
import { IconAt, IconPhone } from "@tabler/icons-react"
const Checkout = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [confirmarEmail, setConfirmarEmail] = useState("")
  const [opened, { open, close }] = useDisclosure(false)
  const { carrito, eliminarDelCarrito, postOrden, limpiarCarrito } = useContext(CartContext)
  const { productos, cargando, fetchProductos } = useGetProductos()
  const [ordenId, setOrdenId] = useState()
  const [formState, setFormState] = useState("idle")

  useEffect(() => {
    fetchProductos()
  }, [])
  const carritoFiltrado = carrito
    .map((producto) => {
      const buscarProducto = productos.find((prod) => prod.id === producto.id)
      return buscarProducto ? { ...buscarProducto, ...producto } : null
    })
    .filter((producto) => producto)

  const precioTotal = carritoFiltrado
    .reduce((prev, current) => prev + current.precio * current.cantidad, 0)
    .toFixed(2)
  const filas = carritoFiltrado.map((producto) => {
    return (
      <tr key={producto.id}>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.cantidad}</td>
        <td>
          <img src={producto.imagen} alt={producto.nombre} />
        </td>
        <td>
          <Button color="red" onClick={() => eliminarDelCarrito(producto.id)}>
            X
          </Button>
        </td>
      </tr>
    )
  })
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const limpiarFormulario = () => {
    setNombre("")
    setApellido("")
    setTelefono("")
    setEmail("")
    setConfirmarEmail("")
    setFormState("idle")
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close()
          limpiarFormulario()
        }}
        title="Ingresar datos"
      >
        {formState !== "completed" && (
          <Stack mt="md">
            <TextInput
              name="nombre"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              label="Nombre"
              placeholder="Ingrese su nombre"
              error={!nombre && formState === "error" && "Campo obligatorio"}
              required
            />
            <TextInput
              name="apellido"
              value={apellido}
              onChange={(evento) => setApellido(evento.target.value)}
              label="Apellido"
              placeholder="Ingrese su apellido"
              error={!apellido && formState === "error" && "Campo obligatorio"}
              required
            />
            <TextInput
              name="telefono"
              value={telefono}
              onChange={(evento) => setTelefono(evento.target.value)}
              label="Teléfono"
              placeholder="Ingrese su teléfono"
              icon={<IconPhone size="0.8rem" />}
              error={!telefono && formState === "error" && "Campo obligatorio"}
              required
            />
            <TextInput
              name="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              label="Email"
              placeholder="Ingrese su email"
              icon={<IconAt size="0.8rem" />}
              error={
                !email && formState === "error"
                  ? "Este campo es obligatorio"
                  : !emailPattern.test(email) && formState === "error"
                  ? "Email inválido"
                  : false
              }
              required
            />
            <TextInput
              value={confirmarEmail}
              onChange={(evento) => setConfirmarEmail(evento.target.value)}
              label="Confirmar email"
              placeholder="Confirme su email"
              icon={<IconAt size="0.8rem" />}
              error={
                !confirmarEmail && formState === "error"
                  ? "Este campo es obligatorio"
                  : email !== confirmarEmail && formState === "error"
                  ? "No son iguales"
                  : !emailPattern.test(email) && formState === "error"
                  ? "Email inválido"
                  : false
              }
              required
            />
            <Button
              loading={formState === "submitting"}
              onClick={async () => {
                setFormState("submitting")
                if (
                  !nombre ||
                  !apellido ||
                  !telefono ||
                  !email ||
                  !emailPattern.test(email) ||
                  !confirmarEmail ||
                  email !== confirmarEmail
                ) {
                  setFormState("error")
                  return
                }
                const ordenCreada = await postOrden(carrito, precioTotal)
                setFormState("completed")
                limpiarFormulario()
                limpiarCarrito()
                setOrdenId(ordenCreada.id)
              }}
            >
              Confirmar
            </Button>
          </Stack>
        )}
        {formState === "completed" && (
          <Text>La compra ha sido realizada. Tu ID de compra: {ordenId}</Text>
        )}
      </Modal>
      {carritoFiltrado.length === 0 && !cargando ? (
        <Alert styles={{ root: { textAlign: "center" }, message: { fontSize: 25 } }}>
          El carrito esta vacio.
        </Alert>
      ) : (
        <>
          <Flex wrap="wrap" mt={10} gap={10} justify="center">
            {cargando ? (
              <Loader color="blue" />
            ) : (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Imagen</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>
                  <tbody>{filas}</tbody>
                </Table>
                <Flex gap={15} justify="space-evenly">
                  <div>Precio total: {precioTotal}</div>
                  <Flex gap={15}>
                    <Button onClick={open}>Pagar</Button>
                    <Button color="gray.6">Limpiar carrito</Button>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        </>
      )}
    </>
  )
}

export default Checkout
