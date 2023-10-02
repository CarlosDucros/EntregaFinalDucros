import { useState } from "react"

export const useContador = () => {
  const [contador, setContador] = useState(1)
  const incrementar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador > 0 ? contador - 1 : contador)
  const resetear = () => setContador(0)

  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  }
}
