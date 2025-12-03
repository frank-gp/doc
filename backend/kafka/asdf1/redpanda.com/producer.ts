const os = require("os")
const {Kafka, CompressionTypes} = require("kafkajs")

const redpanda = new Kafka({
  brokers: ["ct2kpi0e2nqs140vl0n0.any.us-east-1.mpx.prd.cloud.redpanda.com:9092"],
  ssl: {},
  sasl: {
    mechanism: "<scram-sha-256 or scram-sha-512>",
    username: "<username>",
    password: "<password>"
  }
})
const producer = redpanda.producer()

const sendMessage = (msg: string) => {
  return producer.send({
    topic: "demo-topic",
    compression: CompressionTypes.GZIP,
    messages: [{
      // Messages with the same key are sent to the same topic partition for
      // guaranteed ordering
      key: os.hostname(),
      value: JSON.stringify(msg)
    }]
  })
  .catch((e: { message: any }) => {
    console.error(`Unable to send message: ${e.message}`, e)
  })
}

const run = async () => {
  await producer.connect()
  for (let i = 0; i < 100; i++) {
    sendMessage(`message ${i}`).then((resp) => {
      console.log(`Message sent: ${JSON.stringify(resp)}`)
    })
  }
}

run().catch(console.error)

process.once("SIGINT", async () => {
  try {
    await producer.disconnect()
    console.log("Producer disconnected")
  } finally {
    process.kill(process.pid, "SIGINT")
  }
})