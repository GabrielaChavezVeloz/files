package com.ecommerce.udemy.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class CourseDto {

private Long id;	
	private String name;
	private DomainDto domain;
	private String description;
	private String author;
	private Float price;
	private String duration;
	private List<ReviewDto> review;
}
