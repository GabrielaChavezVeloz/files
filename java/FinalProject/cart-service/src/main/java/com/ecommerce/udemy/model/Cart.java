package com.ecommerce.udemy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="carts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "id_user", nullable = false)
	private Long idUser;
	
	@Column(name = "id_course", nullable = false)
	private Long idCourse;
	
	@NotEmpty(message = "The name must not be empty")
	@Column(name = "name_course", nullable = false)
	private String nameCourse;
	
	@Column(name = "price", nullable = false)
	private Float price;
	
	@Column(name = "is_active", nullable = false)
	private Boolean isActive;
	
	
}
