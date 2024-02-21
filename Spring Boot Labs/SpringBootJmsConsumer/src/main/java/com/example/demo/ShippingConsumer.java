package com.example.demo;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class ShippingConsumer {

	@JmsListener(destination = "store_online_queue.topic")
	public void receiveMessage(String message) {
		System.out.println("Shipping message: " + message);
	}
}
