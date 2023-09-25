import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Layout from "../components/Layout/Layout";
export const routes = [
    {
        path: "/",
        element: <Layout><ItemListContainer/></Layout>
    },
    {
        path: "/item/:id",
        element: <Layout><ItemDetailContainer/></Layout>
    },
    {
        path: "/category/:categoryId",
        element: <Layout><ItemListContainer/></Layout>
    }

]