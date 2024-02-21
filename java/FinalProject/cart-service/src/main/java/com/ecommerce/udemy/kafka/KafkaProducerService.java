package com.ecommerce.udemy.kafka;

import java.util.UUID;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

import com.ecommerce.udemy.model.OrderMessage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaProducerService {

	private final KafkaTemplate<String, OrderMessage> kafkaTemplate;

    public void sendMessage(OrderMessage orderMessage) {
        ListenableFuture<SendResult<String, OrderMessage>> future = kafkaTemplate.send("t-cart", UUID.randomUUID().toString(), orderMessage);
        future.addCallback(new ListenableFutureCallback<SendResult<String, OrderMessage>>() {

			@Override
			public void onFailure(Throwable ex) {
				log.error("Error trying to send Order Message: " + ex.getMessage());
			}

			@Override
			public void onSuccess(SendResult<String, OrderMessage> result) {
				log.info("Order message sent");
			}
		});
    }
}
