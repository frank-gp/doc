import { createClient } from 'redis';

async function testConnection() {
  const client = createClient({ url: 'redis://172.28.178.219:6379' });

  client.on('error', (err) => console.error('Redis Client Error', err));

  await client.connect();

  const pong = await client.ping();
  console.log('Respuesta Redis:', pong);

  await client.disconnect();
}

testConnection();
