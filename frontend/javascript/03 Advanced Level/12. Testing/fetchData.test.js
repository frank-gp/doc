// fetchData.test.js

import axios from 'axios';
import fetchData from './fetchData';

jest.mock('axios');

test('fetchData fetches successfully data from an API', async () => {
  const data = { data: 'Data' };
  axios.get.mockResolvedValue(data);

  const result = await fetchData();

  expect(result).toEqual(data.data);
});
