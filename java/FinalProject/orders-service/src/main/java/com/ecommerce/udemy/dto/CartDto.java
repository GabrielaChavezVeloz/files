package com.ecommerce.udemy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartDto {

	private Long id;
	private Long idUser;
	private Long idCourse;
	private String nameCourse;
	private Float price;
	private Boolean isActive;
}
