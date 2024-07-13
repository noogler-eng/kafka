## KAFKA
1. event streaming platform
2. producer -> kafka -> consumers
3. kafka is simmilar to redis, stores the events
4. when backend downs it takes unfilled events from kafka

5. kafka.png
6. why dont do all this in single server as backend ?
7. dont put over burden on single server, async connection to many services or server.

8. email servies -> send grid, resend, emailjs etc
9. kafka stored your data in server down time.
10. on scaling kafka can be scaled distributedly, it handels untils nodes to be scaled or more kafka clusters

## TERMS
1. cluster (many brokers) and broken (single kafka)
2. producers and consumers
3. topics (channel like send to payment channel or topic), like key
4. offsets ( position from where things get wrong )
5. retention ( after 6 month all the stored events gets erased ) expiry
6. 

## Redis queue vs Redis pub-subs
1. queues is used to distributing the load. first come first serve. ( load balancing )
2. pub-subs sends same message to everyone 
3. kafka does both load balancing and sending to all
4. all to given to diff groups but in groups there is load balancing

## Kafka commands - 
1. docker run -p 9092:9092 apache/kafka:3.7.1
2. docker ps
3. docker exec -it container_id /bin/bash
4. cd /opt/kafka/bin
5. ./kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092
6. ./kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
7. ./kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092