const { Kafka } = require('kafkajs');

// Configuración de Kafka
const kafka = new Kafka({
  clientId: 'my-consumer',
  
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'my-consumer-group' });

const runConsumer = async () => {
  await consumer.connect();
  console.log('Consumer conectado');

  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

runConsumer().catch(console.error);
