package com.gchavezveloz.jms.model;

import java.io.Serializable;

public class Passenger implements Serializable {
	private static final long serialVersionUID = 1L;
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private Long phoneNo;
	
	public Passenger() {
	}
	
	public Passenger(int id, String firstName, String lastName, String
		email, Long phoneNo) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNo = phoneNo;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Long getPhoneNo() {
		return phoneNo;
	}
	
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	@Override
	public String toString() {
		return "Passenger [id=" + id + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email
				+ ", phoneNo=" + phoneNo + "]";
	}
	
}

