// asyncExample.test.js

const fetchData = require('./asyncExample');

test('fetchData resolves with the correct data', () => {
  return fetchData().then(data => {
    expect(data).toBe('Data');
  });
});
