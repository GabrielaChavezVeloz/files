package com.gchavezveloz.reservation.listener;

import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.JMSProducer;
import javax.jms.MapMessage;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

import com.gchavezveloz.jms.model.Passenger;

public class ReservationSystemListener implements MessageListener {
	
	public void onMessage(Message message) {
		
		if (message instanceof ObjectMessage) {
			ObjectMessage objMsg = (ObjectMessage) message;
			try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
			JMSContext jmsContext = cf.createContext()) {
			InitialContext ctx = new InitialContext();
			
			//Queue passengerReplyQueue = (Queue)
			ctx.lookup("queue/passengerReplyQueue");
			MapMessage mapMessage = jmsContext.createMapMessage();
			Passenger passenger = (Passenger) objMsg.getObject();
			
			System.out.println("ReservationSystemListener :: " + passenger);
			
			if (passenger != null) {
				mapMessage.setBoolean("isReserved", true);
			} else {
				mapMessage.setBoolean("isReserved", false);
			}
			
			mapMessage.setJMSCorrelationID(objMsg.getJMSMessageID());
			JMSProducer producer = jmsContext.createProducer();
			producer.send(objMsg.getJMSReplyTo(), mapMessage);
			
			} catch (JMSException e) {
				e.printStackTrace();
			} catch (NamingException e) {
				e.printStackTrace();
			}
		}
	}
}

