package com.ecommerce.udemy.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.ecommerce.udemy.model.OrderMessage;
import com.ecommerce.udemy.services.CourseService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class KafkaConsumerService {

	@Autowired
	CourseService courseService;
	
	@KafkaListener(topics = "t-order", containerFactory = "courseKafkaListenerContainerFactory")
    public void orderListener(OrderMessage orderMessage) {
        log.info("Message received from order service: " + orderMessage);

        courseService.addEnrollementUser(orderMessage);
		log.info("User enrrolled!");
    }
}
