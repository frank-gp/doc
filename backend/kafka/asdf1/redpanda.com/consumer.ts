const {Kafka} = require("kafkajs")

const redpanda = new Kafka({
  brokers: ["ct2kpi0e2nqs140vl0n0.any.us-east-1.mpx.prd.cloud.redpanda.com:9092"],
  ssl: {},
  sasl: {
    mechanism: "<scram-sha-256 or scram-sha-512>",
    username: "<username>",
    password: "<password>"
  }
})
const consumer = redpanda.consumer()

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({
    topic: "demo-topic",
    fromBeginning: true
  })
  await consumer.run({
    eachMessage: async ({topic, partition, message}: {topic:string, partition:number, message:any}) => {
      const topicInfo = `topic: ${topic} (${partition}|${message.offset})`
      const messageInfo = `key: ${message.key}, value: ${message.value}`
      console.log(`Message consumed: ${topicInfo}, ${messageInfo}`)
    },
  })
}

run().catch(console.error)

process.once("SIGINT", async () => {
  try {
    await consumer.disconnect()
    console.log("Consumer disconnected")
  } finally {
    process.kill(process.pid, "SIGINT")
  }
})