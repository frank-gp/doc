const { Kafka } = require('kafkajs');

// Configuración de Kafka
const kafka = new Kafka({
  clientId: 'my-consumer-2',
  brokers: ['localhost:9092'], // Asegúrate de que coincida con tu configuración
});

const consumer = kafka.consumer({ groupId: 'my-consumer-group-2' }); // Nuevo groupId para recibir los mismos mensajes

const runConsumer = async () => {
  await consumer.connect();
  console.log('Consumer 2 conectado');

  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumer 2 - Mensaje recibido:`, {
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

runConsumer().catch(console.error);
