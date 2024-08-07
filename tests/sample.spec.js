const { spec, request } = require('pactum');

describe('ReqRes', () => {

  before(() => {
    request.setBaseUrl('https://reqres.in');
  });

  it('create a new user', async () => {
    await spec()
      .post('/api/users')
      .withJson({
        "name": "morpheus",
        "job": "leader"
      })
      .expectStatus(201)
      .expectJsonMatch({
        "name": "morpheus",
        "job": "leader"
      });
  });

  it('fetch user with id', async () => {
    await spec()
      .get('/api/users/2')
      .expectStatus(200)
      .expectJsonLike({
        "data": {
          "id": 2,
          "email": "janet.weaver@reqres.in",
          "first_name": "Janet",
          "last_name": "Weaver",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }
      });
  })

});