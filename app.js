function saludar(nombre) {
  return `Hola, ${nombre}! Bienvenido a DevOps.`;
}

module.exports = { saludar };

if (require.main === module) {
  console.log(saludar("Estudiante"));
}