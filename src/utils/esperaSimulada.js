export const esperaSimulada = async (tiempo) => {
  return await new Promise((resolve) => setTimeout(() => resolve("Exito"), 0))
}
