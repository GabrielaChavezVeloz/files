package com.gchavezveloz.springjms.senders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Component;

@Component
public class MessageSender {
	
	@Autowired
	private JmsTemplate jmsTemplate;
	
	@Value("${springjms.myQueue}")
	private String queue;
	
	public void send(String message) {
		MessageCreator mc = s -> s.createTextMessage("hello spring jms");
		jmsTemplate.send(queue, mc);
	}

}
