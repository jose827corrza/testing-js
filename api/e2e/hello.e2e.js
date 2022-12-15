// Importa la herramienta suppertest
const request = require('supertest');

// Importa el punto de acceso a nuestra api
const createApp = require('../src/app');

describe('Test for hello world in the app', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return a "Hello World!"', () => {
      request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World!');
        });
    });
  });
});
