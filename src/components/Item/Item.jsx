import { Card, Image, Text, Group, Flex } from "@mantine/core"
import { Link } from "react-router-dom"
const Item = ({ id, nombre, descripcion, imagen, compacto = true }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={compacto ? 200 : 500}>
      <Card.Section>
        <Image src={imagen} height={200} alt={nombre} />
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
      {compacto && (
        <Flex justify="center">
          <Link mt={10} component={Link} to={`/item/${id}`}>
            Ver detalles
          </Link>
        </Flex>
      )}
    </Card>
  )
}

export default Item
