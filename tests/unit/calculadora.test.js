const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deve ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 100 deveria retornar 'Erro", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
