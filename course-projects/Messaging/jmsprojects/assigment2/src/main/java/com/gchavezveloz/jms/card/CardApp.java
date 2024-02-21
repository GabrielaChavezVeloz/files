package com.gchavezveloz.jms.card;

import javax.jms.JMSContext;
import javax.jms.Topic;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;


public class CardApp {
	public static void main(String[] args) throws NamingException{
		InitialContext context = new InitialContext();
		Topic topic = (Topic)context.lookup("topic/empTopic");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext() ) {
			
			Card card = new Card();
			
			for(int i=1; i<=10; i++) {
				card.setId(100+i);
				card.setCardHolder("Gabriela Chavez" + i);
				card.setCardNumber("01236753" + i);
				card.setExpireMonth(i);
				card.setExpireYear(2020+i);
				card.setCvc("12"+i);
				jmsContext.createProducer().send(topic, card);
			}
			
			System.out.println("Message sent");
		}
	}
}

