import { Card, Image, Text, Group, Button, Flex, Textarea } from "@mantine/core"
import { useContador } from "../../hooks/useContador"
const ItemDetail = ({ nombre, descripcion, imagen, precio, compacto = false }) => {
  const { contador, incrementar, decrementar, resetear } = useContador()
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
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "2",
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
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": "2",
                overflow: "hidden",
              }
            : undefined
        }
      >
        {descripcion}
      </Text>
      <Text size="xl" fw={700} ta="center">
        {`$` + precio}
      </Text>
      <Text size="xl" fw={700} ta="center">
        {contador}
      </Text>
      <Flex gap={10} mt={20} justify="center">
        <Button onClick={decrementar} variant="filled">
          -
        </Button>
        <Button onClick={incrementar} variant="filled">
          +
        </Button>
        <Button onClick={resetear} variant="filled">
          Añadir al carrito
        </Button>
      </Flex>
    </Card>
  )
}

export default ItemDetail
