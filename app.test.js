const { saludar } = require('./app');

test('debe retornar el saludo correcto con el nombre provisto', () => {
  const resultado = saludar("Carlos");
  expect(resultado).toBe("Hola, Carlos! Bienvenido a DevOps.");
});