package com.gchavezveloz.jms.checkin;

import java.io.Serializable;
import java.util.Date;

public class FlightCheckin implements Serializable {
	
	private static final long serialVersionUID = -5064692268410211449L;
	private int id;
	private String flightRoute;
	private String passengerName;
	private String passengerDocumentType;
	private String passengerDocumentNumber;
	private Date checkinTime;
	
	public FlightCheckin() {
		this.checkinTime = new Date();
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getFlightRoute() {
		return flightRoute;
	}
	
	public void setFlightRoute(String flightRoute) {
		this.flightRoute = flightRoute;
	}
	
	public String getPassengerName() {
		return passengerName;
	}
	
	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}
	
	public String getPassengerDocumentType() {
		return passengerDocumentType;
	}
	
	public void setPassengerDocumentType(String passengerDocumentType) {
		this.passengerDocumentType = passengerDocumentType;
	}
	
	public String getPassengerDocumentNumber() {
		return passengerDocumentNumber;
	}
	
	public void setPassengerDocumentNumber(String passengerDocumentNumber) {
		this.passengerDocumentNumber = passengerDocumentNumber;
	}
	
	public Date getCheckinTime() {
		return checkinTime;
	}
	
	@Override
	public String toString() {
		return "FlightCheckin [id=" + id + ", flightRoute=" + flightRoute + ",passengerName=" + passengerName + ", passengerDocumentType=" + passengerDocumentType + ",passengerDocumentNumber=" + passengerDocumentNumber + ", checkinTime=" + checkinTime + "]";
	}
	
}

