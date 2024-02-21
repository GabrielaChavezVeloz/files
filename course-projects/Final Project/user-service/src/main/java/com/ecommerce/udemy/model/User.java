package com.ecommerce.udemy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotEmpty(message = "The name must not be empty")
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "last_name", nullable = false)
	private String lastName;
	
	@NotEmpty(message = "The display name must not be empty")
	@Column(name = "display_name", nullable = false)
	private String displayName;
	
	@Column(name = "about_yourself", nullable = false)
	private String aboutYourself;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_areas", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "area_id", referencedColumnName = "id"))
	private List <AreaInterest> areaInterest;
	
	@Column(name = "experience", nullable = false)
	private String experience;
	
	@Column(name = "domain_expertise", nullable = false)
	private String domainExpertise;
	
	@ManyToOne(optional = false, fetch = FetchType.EAGER)
	private Role role;
	
	@ManyToOne(optional = false, fetch = FetchType.EAGER)
	private Type type;
	
	@Column(name = "profile_picture", nullable = true)
	private String profilePicture;


	
	
	
}
