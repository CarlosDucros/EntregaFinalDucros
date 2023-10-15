import { MantineProvider } from "@mantine/core"
import "./App.css"
import { CartProvider } from "./context/CartContext"
import Navigation from "./routes/Navigation"
function App() {
  return (
    <MantineProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </MantineProvider>
  )
}

export default App
