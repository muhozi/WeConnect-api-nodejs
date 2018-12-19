import request from 'supertest';
import app from '../src';

const req = request(app);

describe('Test API endpoints', () => {
  it('Test index end point', done =>
    req
      .get('/')
      .expect(200)
      .then(res => {
        expect(typeof res.body.message).toBe('string');
        expect(res.body.message).toBe('Hello world');
        done();
      }));
});
