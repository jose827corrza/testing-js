const Person = require('./person');

describe('Tests for person class', () => {
  let person;
  beforeEach(() => {
    person = new Person('Jose', 40, 1.70);
  });

  test('should be low', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should be normal', () => {
    person.weight = 65;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
// para ejecutar un archivo puntual de pruebas
// npm run test -- <nombre_archivo>
