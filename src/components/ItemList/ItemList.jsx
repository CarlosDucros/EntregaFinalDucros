import Item from "../Item/Item"
import { Flex } from "@mantine/core"
const ItemList = ({productos}) => {
    return(
        <Flex wrap="wrap" gap={10} justify="center">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </Flex>
    )

}

export default ItemList