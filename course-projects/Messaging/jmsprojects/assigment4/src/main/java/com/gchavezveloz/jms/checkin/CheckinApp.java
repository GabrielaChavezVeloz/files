package com.gchavezveloz.jms.checkin;

import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.JMSProducer;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

public class CheckinApp {
	
	public static void main(String[] args) throws NamingException {
		
		InitialContext initialContext = new InitialContext();
		Queue requestQueue = (Queue) initialContext.lookup("queue/requestQueue");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext(JMSContext.SESSION_TRANSACTED)) {
		
			JMSProducer producer = jmsContext.createProducer();
			
			FlightCheckin checkin1 = new FlightCheckin();
			checkin1.setId(12);
			checkin1.setFlightRoute("LHA-VCR");
			checkin1.setPassengerDocumentType("Canadian Passport");
			checkin1.setPassengerDocumentNumber("56756C456GH9");
			checkin1.setPassengerName("Gabriela Chavez");
			
			ObjectMessage msg1 = jmsContext.createObjectMessage();
			msg1.setObject(checkin1);
			
			FlightCheckin checkin2 = new FlightCheckin();
			checkin2.setId(14);
			checkin2.setFlightRoute("LHA-VCR");
			checkin2.setPassengerDocumentType("Canadian Passport");
			checkin2.setPassengerDocumentNumber("59856C456GH9");
			checkin2.setPassengerName("Gabriela Chavez");
			
			ObjectMessage msg2 = jmsContext.createObjectMessage();
			msg2.setObject(checkin2);
			producer.send(requestQueue, msg1);
			producer.send(requestQueue, msg2);
			
			jmsContext.commit();
			
		} catch (JMSException e) {
			e.printStackTrace();
		};
		
	}
}

