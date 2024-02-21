package com.ecommerce.udemy.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.ecommerce.udemy.dto.ReviewDto;
import com.ecommerce.udemy.model.Review;

@Mapper(componentModel = "Spring")
public interface ReviewMapper {
	ReviewMapper INSTANCE = Mappers.getMapper(ReviewMapper.class);
	

	@Mapping(source = "course.id", target = "idCourse")
	ReviewDto reviewToReviewDto(Review course);
	
	List<ReviewDto> convertList(List<Review> courses);
}
