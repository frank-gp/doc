const { Kafka } = require('kafkajs');

// Configuración de Kafka para el segundo productor
const kafka = new Kafka({
  clientId: 'my-producer-2',
  brokers: ['localhost:9092'], // Usando el broker en localhost:9092
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  console.log('Producer 2 conectado');

  // Envía un mensaje al mismo topic
  await producer.send({
    topic: 'my-topic', // Asegúrate de que sea el mismo topic para ambos productores
    messages: [
      { value: 'Mensaje desde producer 2222222' },
    ],
  });

  console.log('Mensaje enviado desde producer 2');
  await producer.disconnect();
};

runProducer().catch(console.error);
