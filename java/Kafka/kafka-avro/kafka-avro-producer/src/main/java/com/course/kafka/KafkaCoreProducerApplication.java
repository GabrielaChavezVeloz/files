package com.course.kafka;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.course.avro.data.Avro02;
import com.course.kafka.broker.producer.Avro02Producer;

@SpringBootApplication
@EnableScheduling
public class KafkaCoreProducerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(KafkaCoreProducerApplication.class, args);
	}
	
	//@Autowired
	//private Avro01Producer producer;
	
	//@Autowired
	//private Avro02Producer producer;

	@Override
	public void run(String... args) throws Exception {
		/*var data = Avro01.newBuilder().setActive(false)
				.setFullName("Full name " + ThreadLocalRandom.current().nextInt()).setMaritalStatus("SINGLE").build();
		producer.send(data);
		
		
		var data = Avro02.newBuilder().setMyDate(LocalDate.of(2021, 12, 25))
				.setMyDecimal(new BigDecimal(10472.281474693).setScale(5, RoundingMode.HALF_UP))
				.setMyTimeMillis(LocalTime.now()).setMyTimestampMillis(Instant.now())
				.setMyUUID(UUID.randomUUID().toString()).build();
		
		producer.send(data);*/
		
	}

}
