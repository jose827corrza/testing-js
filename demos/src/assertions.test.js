test('should strings', () => {
  expect('Josesito').toMatch('sito');
});

test('should boolean', () => {
  expect(true).toEqual(true);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('should list', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(1);
});

test('should object', () => {
  const data = { name: 'jose' };
  data.lastname = 'corredor';
  expect(data).toEqual({ name: 'jose', lastname: 'corredor' });
});

describe('Grupito 1', () => { // permite agrupar pruebas
  beforeAll(() => {
    console.log('Se ejecuta primero');
  });
  // tambien hay ...
  // beforeEach
  // afterEach
  // afterAll
  test('should be first in grupito 1', () => {
    expect(true).toEqual(true);
  });
});
