import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Layout from "../components/Layout/Layout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ItemListContainer />
      </Layout>
    ),
  },
  {
    path: "/item/:id",
    element: (
      <Layout>
        <ItemDetailContainer />
      </Layout>
    ),
  },
  {
    path: "/categoria/:categoria",
    element: (
      <Layout>
        <ItemListContainer />
      </Layout>
    ),
  },
])

const Navigation = () => {
  return <RouterProvider router={routes} />
}

export default Navigation
