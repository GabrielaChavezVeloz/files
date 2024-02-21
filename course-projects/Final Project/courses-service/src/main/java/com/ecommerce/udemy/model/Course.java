package com.ecommerce.udemy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotEmpty(message = "The name must not be empty")
	@Column(name = "name", nullable = false)
	private String name;
	
	@OneToOne
	private Domain domain;
	
	@Column(name = "description", nullable = false)
	private String description;
	
	@Column(name = "author", nullable = false)
	private String author;
	
	@Column(name = "price", nullable = false)
	private Float price;
	
	@Column(name = "duration", nullable = false)
	private String duration;
	
	@OneToMany(mappedBy = "review", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("course")
	//@JsonIgnoreProperties({"review", "hibernateLazyInitializer", "handler"})
	private List<Review> review;
	
}
