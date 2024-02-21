package com.gchavezveloz.springjms;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.gchavezveloz.springjms.senders.MessageSender;

@SpringBootTest
class SpringjmsApplicationTests {

	@Autowired
	MessageSender sender;
	
	@Test
	public void testsSendAndReceive() {
		sender.send("Hello Spring JMS!!!");
	}

}
