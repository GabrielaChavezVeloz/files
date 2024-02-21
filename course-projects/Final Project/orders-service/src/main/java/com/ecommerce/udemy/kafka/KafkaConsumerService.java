package com.ecommerce.udemy.kafka;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.ecommerce.udemy.model.Order;
import com.ecommerce.udemy.model.OrderMessage;
import com.ecommerce.udemy.services.OrderService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class KafkaConsumerService {

	@Autowired
	OrderService orderService;
	
	@Autowired
	private KafkaProducerService kafkaProducerService;
	
	@KafkaListener(topics = "t-cart", containerFactory = "cartKafkaListenerContainerFactory")
    public void checkoutListener(OrderMessage orderMessage) throws Exception {
        log.info("Message received from cart service: " + orderMessage);
        List<Order> orders = orderService.createOrder(orderMessage);
        log.info("Order saved: " + orders.get(0).getOrderNumber());
     
        
        sendMessage(orderMessage);
    }
	
	private void sendMessage(OrderMessage orderMessage) {
		
		//kafka producer		
		kafkaProducerService.sendMessage(orderMessage);
		
	}
}
