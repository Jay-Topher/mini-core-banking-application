import app from '../src/app';
import request from 'supertest';

describe('User Routes', () => {
  test('Should get to the user endpoint', async () => {
    const response = await request(app).get('/api/v1/users');
    console.log(response);
    expect(response.status).toBe(200);
  });
});
