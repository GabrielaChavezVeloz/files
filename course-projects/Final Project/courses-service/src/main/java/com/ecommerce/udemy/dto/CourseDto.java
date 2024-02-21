package com.ecommerce.udemy.dto;

import java.util.List;

import org.springframework.hateoas.RepresentationModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseDto extends RepresentationModel<CourseDto>{

private Long id;	
	private String name;
	private DomainDto domain;
	private String description;
	private String author;
	private Float price;
	private String duration;
	private List<ReviewDto> review;
}
