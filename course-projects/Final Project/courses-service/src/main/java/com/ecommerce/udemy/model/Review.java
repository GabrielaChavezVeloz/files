package com.ecommerce.udemy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "review", nullable = true)
	private String review;
	
	@Column(name = "rating", nullable = false)
	private Double rating;
	
	@Column(name = "id_user", nullable = false)
	private Long idUser;
	
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
	@JoinColumn(name = "id_course", nullable = false, updatable = false)
	private Course course;
	
	@Column(name = "is_anonymous", nullable = false)
	private Boolean isAnonymous;
	
	
}
