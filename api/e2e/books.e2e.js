// Importa la herramienta suppertest
const request = require('supertest');
// Es muy normal que en e2e se use su propia conexion
const { MongoClient } = require('mongodb');

// Importa el punto de acceso a nuestra api
const createApp = require('../src/app');
const { config } = require('../src/config');

const { generateManyBooks } = require('../src/fakes/book.fake');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for retrieving the books in the app E2E', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET] /api/v1/books e2e', () => {
    test('should return a list of books', async () => {
      // Arrange
      console.log('e2e');
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1996,
        },
        {
          name: 'Book 2',
          year: 2000,
        },
      ]);
      console.log(seedData);
      // Act
      return request(app) // Importante este return jaja
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
