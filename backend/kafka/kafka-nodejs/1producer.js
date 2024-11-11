const { Kafka } = require('kafkajs');

// Configuración de Kafka
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'], // Asegúrate de que coincida con tu configuración
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  console.log('Producer conectado');

  // Envía un mensaje
  await producer.send({
    topic: 'my-topic', // Cambia esto al topic que desees
    messages: [
      { value: 'Mensaje desde el producer' },
    ],
  });

  console.log('Mensaje enviado');
  await producer.disconnect();
};

runProducer().catch(console.error);
