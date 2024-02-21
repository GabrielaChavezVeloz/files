package com.gchavezveloz.jms.reservation;

import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.Queue;
import javax.naming.InitialContext;

import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

import com.gchavezveloz.reservation.listener.ReservationSystemListener;

public class ReservationSystemApp {

	public static void main(String[] args) throws Exception {
		InitialContext ctx = new InitialContext();
		Queue passengerRequestQueue = (Queue)
		ctx.lookup("queue/passengerRequestQueue");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext()) {
			
			JMSConsumer consumer = jmsContext.createConsumer(passengerRequestQueue);
			consumer.setMessageListener(new ReservationSystemListener());
			Thread.sleep(15000);
			
			// load balancing
			JMSConsumer consumer1 = jmsContext.createConsumer(passengerRequestQueue);
			JMSConsumer consumer2 = jmsContext.createConsumer(passengerRequestQueue);
			
			for(int i=1; i<=10; i+=2) {
				System.out.println("Consumer 1 : " + consumer1.receive());
				System.out.println("Consumer 1 : " + consumer2.receive());
			}
			
		}
	}

}
