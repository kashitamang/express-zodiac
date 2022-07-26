const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      'id': '1',
      'name': 'aquarius',
      'dates': 'Jan 21 - Feb 19',
      'symbol': 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
