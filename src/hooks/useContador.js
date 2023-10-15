import { useState } from "react"

export const useContador = () => {
  const [contador, setContador] = useState(1)

  const resetear = () => setContador(0)

  return {
    contador,
    resetear,
    setContador,
  }
}
