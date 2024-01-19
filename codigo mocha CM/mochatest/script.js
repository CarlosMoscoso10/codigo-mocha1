const assert = require('assert');

function suma(a, b) {
  return a + b;
}

describe('Función de suma', function () {
  describe('Pruebas de números enteros', function () {
    it('Debería sumar dos números enteros correctamente', function () {
      const resultado = suma(2, 3);
      assert.strictEqual(resultado, 5, `Esperado 5, pero obtuve ${resultado}`);
    });

    it('Debería sumar números negativos correctamente', function () {
      const resultado = suma(-2, -3);
      assert.strictEqual(resultado, -5, `Esperado -5, pero obtuve ${resultado}`);
    });
  });

  describe('Pruebas de números decimales', function () {
    it('Debería manejar números decimales correctamente', function () {
      const resultado = suma(1.5, 2.5);
      assert.strictEqual(resultado, 4, `Esperado 4, pero obtuve ${resultado}`);
    });
  });
});
