const app = require('../app')
const request = require('supertest')

describe(`Hit Spotify API with token`, () => {
  describe(`Success searching with params English`, () => {
    it(`Should show the data as object status code 200`, async () => {
      const res = await request(app).get("/tracks/English");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("tracks");
    });
  });
});