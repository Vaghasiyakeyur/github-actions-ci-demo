const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 and Hello World!', async () => {
    // Mocking database behavior if needed
    // if (process.env.DATABASE_URL) { ... }
    
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World!');
  });
});

describe('Environment Variables Setup', () => {
  it('should have DATABASE_URL defined in CI', () => {
    // In local development, this might be undefined unless you have a .env file
    // In CI, we expect this to be defined via Github Secrets
    if (process.env.NODE_ENV === 'test' && process.env.CI) {
      expect(process.env.DATABASE_URL).toBeDefined();
      expect(process.env.JWT_SECRET).toBeDefined();
    }
  });
});
