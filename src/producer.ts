import kafka from ".";
const producer = kafka.producer();

const run = async () => {
  // producer to connect
  await producer.connect();
  await producer.send({
    topic: "payments",
    messages: [
      { value: "this is message produced by consumer" },
      { value: "this is message 2 produced by consumer" },
      { value: "this is message 3 produced by consumer" },
    ],
  });
};

run().catch(console.error);
