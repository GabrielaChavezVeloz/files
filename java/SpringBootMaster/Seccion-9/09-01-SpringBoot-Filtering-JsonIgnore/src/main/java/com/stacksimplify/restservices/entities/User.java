package com.stacksimplify.restservices.entities;

import java.util.List;

import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;


//Entity
//@Entity(name = "User")
@Entity
@Table(name = "user_test")
@JsonIgnoreProperties({"firstname", "lastname"})
public class User extends RepresentationModel {

	@Id
	@GeneratedValue
	private Long userid;
	
	@NotEmpty(message = "Username is Mandatory field. Please provide username")
	@Size(min=2, message="FirstName should have atleast 2 characters")    
	@Column(name = "USER_NAME", length=50, nullable=false, unique=true)
	private String username;
	
	@Column(name = "FIRST_NAME", length=50, nullable=false)
	private String firstname;
	
	@Column(name = "LAST_NAME", length=50, nullable=false)
	private String lastname;
	
	@Column(name = "EMAIL_ADDRESS", length=50, nullable=false)
	private String email;
	
	@Column(name = "ROLE", length=50, nullable=false)
	private String role;
	
	@Column(name = "SSN", length=50, nullable=false, unique=true)
	@JsonIgnore
	private String ssn;
	
	@OneToMany(mappedBy="user")
	private List<Order> orders;

	//No Argument Constructor
	public User() {
	}
	
	//Fields Constructor
	public User(Long userid, String username, String firstname, String lastname, String email, String role, String ssn) {
		this.userid = userid;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.role = role;
		this.ssn = ssn;
	}

	//Getters and Setters
	public Long getUserId() {
		return userid;
	}

	public void setUserId(Long id) {
		this.userid = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	
	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	//To String - (Optional required for bean logging)
	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", role=" + role + ", ssn=" + ssn + "]";
	}
	
	
}
