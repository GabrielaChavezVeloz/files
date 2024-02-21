package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import com.ecommerce.udemy.dto.CourseDto;
import com.ecommerce.udemy.dto.CourseWrapperDto;

@Repository
public class CourseRepository {
	
	@Autowired
	private RestTemplate restTemplate;

	private final static String COURSES_SERVICE = "http://localhost:8082/courses/enrollment/";
	
	public List<CourseDto> getCoursesByIdUser(Long id){
		String url = COURSES_SERVICE + id;
		CourseWrapperDto courses = restTemplate.getForObject(url, CourseWrapperDto.class);
		
		return courses.getCourses();
	}
}
