import { Card, Image, Text, Button, Group, Flex } from "@mantine/core"
import { Link } from "react-router-dom"

const Item = ({ producto, compacto = true }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={compacto ? 200 : 500}>
      <Card.Section>
        <Image src={producto.imagen} height={160} alt={producto.nombre} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text
          title={producto.nombre}
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
          {producto.nombre}
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
        {producto.descripcion}
      </Text>
      {compacto && (
        <Flex justify="center">
          <Button mt={10} component={Link} to={`/item/${producto.id}`}>
            Ver detalles
          </Button>
        </Flex>
      )}
    </Card>
  )
}

export default Item
