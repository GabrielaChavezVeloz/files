package com.ecommerce.udemy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ReviewDto {
	
	private Long id;
	private String review;
	private Integer rating;
	private Long idUser;
	private Long idCourse;
	private Boolean isAnonymous;
}
