package com.gchavezveloz.jms.claim;

import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.JMSProducer;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory;

public class ClaimManagement {
	
	public static void main(String[] args) throws NamingException, JMSException {
		
		InitialContext initialContext = new InitialContext();
		Queue claimQueue = (Queue) initialContext.lookup("queue/claimQueue");
		
		try(ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory();
				JMSContext jmsContext = cf.createContext() ) {
		
			JMSProducer producer = jmsContext.createProducer();
			JMSConsumer consumer = jmsContext.createConsumer(claimQueue,"insuranceProvider in ('blue cross','american united') AND doctorName LIKE 'H%' AND claimAmount % 10 = 0");
			ObjectMessage objectMessage = jmsContext.createObjectMessage();
			
			objectMessage.setDoubleProperty("claimAmount", 1010);
			objectMessage.setStringProperty("doctorName", "Holcer");
			objectMessage.setStringProperty("insuranceProvider", "blue cross");
			objectMessage.setStringProperty("doctorType", "gyna");
			
			Claim claim = new Claim();
			claim.setHospitalId(1);
			claim.setClaimAmount(1000);
			claim.setDoctorName("Hanna");
			claim.setDoctorType("gyna");
			claim.setInsuranceProvider("blue cross");
			objectMessage.setObject(claim);
			producer.send(claimQueue, objectMessage);
			
			Claim receiveBody = consumer.receiveBody(Claim.class);
			System.out.println(receiveBody.getClaimAmount());
		}
	}
}
