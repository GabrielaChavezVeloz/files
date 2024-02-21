package com.ecommerce.udemy.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.ecommerce.udemy.dto.CourseDto;
import com.ecommerce.udemy.model.Course;


@Mapper(componentModel = "Spring", uses = {ReviewMapper.class})
public interface CourseMapper {

	CourseMapper INSTANCE = Mappers.getMapper(CourseMapper.class);

	
	//Course to CourseDTO
	@Mapping(target = "review", ignore = true)
	CourseDto courseToCourseDto(Course course);
	
	//List<Course> to List<CourseDto>
	List<CourseDto> courseToCourseDtos(List<Course> courses);
	
}
