import kafka from ".";
const consumer = kafka.consumer({ groupId: "group-1" });

const run = async () => {
 
  // consumer to connect
  await consumer.connect();
  await consumer.subscribe({
    topic: "payments",
    fromBeginning: true,
  });

  // data is getting stored in kafka and results are from beggning
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic: topic,
        partition: partition,
        offset: message.offset,
        value: message?.value?.toString(),
      });
    },
  });
};

run().catch(console.error);


