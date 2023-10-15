import { Card, Image, Text, Group, Button, Flex, ActionIcon, NumberInput, rem } from "@mantine/core"
import { useContador } from "../../hooks/useContador"
import { CartContext } from "../../context/CartContext"
import { useContext, useRef } from "react"
import { notifications } from "@mantine/notifications"
import { IconX } from "@tabler/icons-react"

const ItemDetail = ({ id, nombre, descripcion, imagen, precio, compacto = false }) => {
  const { contador, resetear, setContador } = useContador()
  const { agregarACarrito } = useContext(CartContext)
  const handlers = useRef()
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={compacto ? 200 : 500}>
      <Card.Section>
        <Image src={imagen} height={160} alt={nombre} />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text
          title={nombre}
          sx={{
            textAlign: "center",
            ...(compacto
              ? {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "2",
                  overflow: "hidden",
                }
              : undefined),
          }}
          w="100%"
        >
          {nombre}
        </Text>
      </Group>
      <Text
        size="sm"
        color="dimmed"
        sx={
          compacto
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                overflow: "hidden",
              }
            : undefined
        }
      >
        {descripcion}
      </Text>
      <Text m={10} size="xl" fw={700} ta="center">
        {`Precio: $` + precio}
      </Text>
      <Flex gap={10} mt={20} justify="center">
        <Group spacing={5}>
          <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
            –
          </ActionIcon>

          <NumberInput
            hideControls
            value={contador}
            onChange={(val) => setContador(val)}
            handlersRef={handlers}
            max={99}
            min={0}
            step={1}
            styles={{ input: { width: rem(54), textAlign: "center" } }}
          />

          <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
            +
          </ActionIcon>
        </Group>
        <Button
          onClick={() => {
            agregarACarrito({ id, cantidad: contador, descripcion, precio })
            resetear()
            if (contador === 0) {
              notifications.show({
                title: "Ingrese una cantidad",
                message: "No ha agregado nada al carrito 🛒",
                icon: <IconX />,
                color: "red",
              })
            } else {
              notifications.show({
                title: "Agregado al carrito",
                message: "El producto fue agregado al carrito! 🛒",
              })
            }
          }}
          variant="filled"
        >
          Añadir al carrito
        </Button>
      </Flex>
    </Card>
  )
}

export default ItemDetail
