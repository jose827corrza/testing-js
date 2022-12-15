const BookService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Harry Potter',
//   },
// ];

const mockGetAll = jest.fn();

// const MongoLibStub = { // Aca se pone los resultados que retorna cada funcion de esta clase
//   getAll: () => [...fakeBooks],
//   // Abajo esta para  hacer pruebas de caja blanca, osea poder ver el comportamiento
//   // getAll: spyGetAll,
//   create: () => {},
// };

// Se reemplaza por el llamado directo
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: {},
})));

describe('Tests for BookService', () => {
  let service;

  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks(); // Limpia todos los mocks creados
  });

  describe('test for getBooks', () => {
    test('should return a book list', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(9);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(9);
    });
  });
});

describe('Test for BookService white box/ SPIES', () => {
  let service;

  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks(); // Limpia todos los mocks creados
  });
  test('should white box', async () => {
    // Arrange
    const fakeBooks = generateManyBooks(20);
    mockGetAll.mockResolvedValue(fakeBooks);
    const books = await service.getBooks({});
    console.log(books);
    expect(books.length).toEqual(20);
    expect(mockGetAll).toHaveBeenCalled();
    expect(mockGetAll).toHaveBeenCalledTimes(1);
    expect(mockGetAll).toHaveBeenCalledWith('books', {});
  });
});
