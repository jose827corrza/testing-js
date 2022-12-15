// Importa la herramienta suppertest
const request = require('supertest');

// Empezar a mockear
const mockGetAll = jest.fn();
// Importa el punto de acceso a nuestra api
const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: {},
})));
describe('Test for retrieving the books in the app', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list of books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app) // Importante este return jaja
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // console.log(body);
          expect(body.length).toEqual(4);
        });
    });
  });
});
