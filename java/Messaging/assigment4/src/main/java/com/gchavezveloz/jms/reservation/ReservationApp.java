package com.gchavezveloz.jms.reservation;

import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.jms.TextMessage;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

import com.gchavezveloz.jms.checkin.FlightCheckin;

public class ReservationApp {
	
	public static void main(String[] args) throws NamingException {
		
		InitialContext initialContext = new InitialContext();
		Queue requestQueue = (Queue) initialContext.lookup("queue/requestQueue");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext(JMSContext.SESSION_TRANSACTED)) {
			JMSConsumer consumer = jmsContext.createConsumer(requestQueue);
			ObjectMessage message = (ObjectMessage) consumer.receive();
			FlightCheckin checkinData = message.getBody(FlightCheckin.class);
			System.out.println(checkinData);
			
			jmsContext.commit();
		
		} catch (JMSException e) {
			e.printStackTrace();
		};
		
	}
}
