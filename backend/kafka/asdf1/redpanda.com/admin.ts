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
const admin = redpanda.admin()

admin.connect().then(() => {
  admin.createTopics({
    topics: [{
      topic: "demo-topic",
      numPartitions: 1,
      replicationFactor: -1
    }]
  })
  .then((resp: any) => {
    resp ? console.log("Created topic") :
      console.log("Failed to create topic")
  })
  .finally(() => admin.disconnect())
})