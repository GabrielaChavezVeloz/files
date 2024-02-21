package com.gchavezveloz.jms.alerts;

import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Topic;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

import com.gchavezveloz.jms.card.Card;

public class AlertsAp {
	public static void main(String[] args) throws NamingException,
	JMSException {
		
		InitialContext context = new InitialContext();
		Topic topic = (Topic)context.lookup("topic/empTopic");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext() ) {
			JMSConsumer consumer = jmsContext.createSharedConsumer(topic,
			"sharedConsumer");
			JMSConsumer consumer2 = jmsContext.createSharedConsumer(topic,
			"sharedConsumer");
			
			for(int i=1; i <= 10; i+=2) {
				Message message = consumer.receive();
				Card card1 = message.getBody(Card.class);
				System.out.println("Alerts consumer1 got: " + card1);
				Message message2 = consumer2.receive();
				Card card2 = message2.getBody(Card.class);
				System.out.println("Alerts consumer2 got: " + card2);
			}
		}
	}
}
