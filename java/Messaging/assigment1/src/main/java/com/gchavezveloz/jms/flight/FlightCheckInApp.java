package com.gchavezveloz.jms.flight;

import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSProducer;
import javax.jms.MapMessage;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.jms.TemporaryQueue;
import javax.naming.InitialContext;

import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

import com.gchavezveloz.jms.model.Passenger;

public class FlightCheckInApp {
	public static void main(String[] args) throws Exception {
		InitialContext ctx = new InitialContext();
		Queue passengerRequestQueue = (Queue)
		ctx.lookup("queue/passengerRequestQueue");
		
		//Queue passengerReplyQueue = (Queue)
		ctx.lookup("queue/passengerReplyQueue");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext()) {
			JMSProducer producer = jmsContext.createProducer();
			TemporaryQueue temporaryQueue = jmsContext.createTemporaryQueue();
			ObjectMessage objectMessage = jmsContext.createObjectMessage();
			
			Passenger passenger = new Passenger();
			passenger.setId(1);
			passenger.setFirstName("Jane");
			passenger.setLastName("Dark");
			passenger.setEmail("janedark555@aol.com");
			passenger.setPhoneNo(4444444444L);
			objectMessage.setObject(passenger);
			objectMessage.setJMSReplyTo(temporaryQueue);
			producer.send(passengerRequestQueue, passenger);
			
			System.out.println("Successfully published message to Reservation systemApp");
			System.out.println("FlightCheckInApp :: MessageID :: " +
			objectMessage.getJMSMessageID());
			
			// consume from reply queue
			JMSConsumer consumer =
			jmsContext.createConsumer(objectMessage.getJMSReplyTo());
			MapMessage mapMessage = (MapMessage) consumer.receive(25000);
			
			System.out.println("Is passenger ticker reserved: " +
			mapMessage.getBoolean("isReserved"));
			
			// load balancing
			for(int i=0; i<=10; i++) {
				producer.send(passengerRequestQueue, passenger);
			}
			
		}
		
	}


}
