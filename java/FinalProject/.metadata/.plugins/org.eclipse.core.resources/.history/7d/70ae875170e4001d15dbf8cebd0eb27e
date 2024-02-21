package com.ecommerce.udemy.controllers;

import java.util.HashSet;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.ecommerce.udemy.dto.CourseDto;
import com.ecommerce.udemy.dto.CourseWrapperDto;
import com.ecommerce.udemy.exceptions.CourseExistsException;
import com.ecommerce.udemy.exceptions.CourseNotFoundException;
import com.ecommerce.udemy.model.Course;
import com.ecommerce.udemy.model.Review;
import com.ecommerce.udemy.services.CourseService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/courses")
@AllArgsConstructor
@Validated
@Slf4j
@Tag(name = "Course Controller Service", description = "Controller for udemy courses")
public class CourseController {

	public CourseService courseService;	
	
	//get all courses method
	@Operation(summary = "Get all courses", description = "get all courses")
	@GetMapping()
	public List<Course> getAllCourses() {
		return courseService.getAllCourses();
	}

	//Create Course Method
	@Operation(summary = "Create a new course", description = "create and save a new course to DB")
	@PostMapping
	public ResponseEntity<Void> createCourse(@Parameter( description = "Course information for a new course to be created.") @RequestBody Course course, UriComponentsBuilder builder) {
		
		try {
			courseService.createCourse(course);
			log.info("Course added to the DB");
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(builder.path("/courses/{id}").buildAndExpand(course.getId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		} catch(CourseExistsException ex) {
			log.error("Error trying to create course "+ ex.getMessage());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}	
	}
	
	//deleteUserById
	@Operation(summary = "Delete an existing course", description = "delete a course from the DB")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUserById(@PathVariable("id") Long id) {
		
		try {
			Course course = courseService.getCourseById(id);
			
			if(course == null) {
				throw new CourseNotFoundException("Course: '" + id + "' not found in Course repository" );
			} else {
				courseService.deleteCourseById(id);
				log.info("Course " + id + " deleted");
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
		} catch (CourseNotFoundException ex) {
			log.error("Error trying to delete course "+ ex.getMessage());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}
		
	}
	
	//getCourseById
	@Operation(summary = "Get a course by id", description = "get a courses by id")
	@GetMapping("/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id){
		
		try {
			Course course = courseService.getCourseById(id);
			
			if(course == null) {
				throw new CourseNotFoundException("Course: '" + id + "' not found in Course repository" );
			} else {
				return new ResponseEntity<Course>(course, HttpStatus.OK);
			}
		} catch (CourseNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		
	}
	
	//get sorted courses method
	@Operation(summary = "Get sorted courses", description = "get sorted courses")
	@GetMapping("/sorted")
	public List<Course> getSortedCourses(@RequestParam(name = "order", required = true) String order) {
		
		return courseService.getSortedCourses(order);
	}
	
	//getCourseById
	@Operation(summary = "Get a course by name", description = "get a courses by name")
	@GetMapping("/courseName")
	public ResponseEntity<Course> getCourseByName(@RequestParam(name = "name", required = true) String name){
		
		try {
			Course course = courseService.getCourseByName(name);
			
			if(course == null) {
				throw new CourseNotFoundException("Course: '" + name + "' not found in Course repository" );
			} else {
				return new ResponseEntity<Course>(course, HttpStatus.OK);
			}
		} catch (CourseNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		
	}
	
	
	//getCourseById
	@Operation(summary = "Get user enrrolled courses", description = "Get user enrrolled courses")
	@GetMapping("/enrollment/{id}")
	public ResponseEntity<CourseWrapperDto> getEnrolmentCoursesByIdUser(@PathVariable("id") Long id){
		List<CourseDto> found = courseService.getEnrolledCoursesByIdUser(id);
		if (found == null) {
			log.info("User courses Not found!");
			return new ResponseEntity<CourseWrapperDto>(HttpStatus.NOT_FOUND);
		} else {
			CourseWrapperDto wrapper = new CourseWrapperDto();
			wrapper.setCourses(found);
			log.info("User courses found!");
			return new ResponseEntity<CourseWrapperDto>(wrapper, HttpStatus.OK);
		}
	}
	
	//Add Review Method
	@Operation(summary = "Add a new review by Id Course", description = "Add a new review by Id Course")
	@PostMapping("/review")
	public ResponseEntity<Void> AddReview(@Parameter( description = "Id Course to add the new review.") @RequestBody Review review, UriComponentsBuilder builder, @RequestParam(name = "idCourse", required = true) Long idCourse) {
		
		try {
			courseService.addReviewByIdCourse(review, idCourse);
			log.info("Review added to the DB");
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(builder.path("/review/{id}").buildAndExpand(review.getId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		} catch(CourseNotFoundException ex) {
			log.error("Error trying to add review "+ ex.getMessage());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}	
	}
	
	//getCourseByAvg
	@Operation(summary = "Get courses above the AVG", description = "Get courses above the AVG")
	@GetMapping("/rating")
	public ResponseEntity<HashSet<Course>> getCoursesByAvgRating() throws CourseNotFoundException{
		//return courseService.getCoursesByAvgRating();
		
		HashSet<Course> courses = courseService.getCoursesByAvgRating();
		
		if(!courses.isEmpty()) {
			log.info("Courses above the AVG found.");
			return new ResponseEntity<HashSet<Course>>(courses, HttpStatus.OK);
		} else {
			log.info("Courses above the AVG not found");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	//getCourseByAvg
	@Operation(summary = "Get courses by domain recommendation", description = "Get courses by domain recommendation")
	@GetMapping("/domain/{domain}")
	public ResponseEntity<List<Course>> getCoursesByDomainRecommendation(@PathVariable("domain") String domain) throws CourseNotFoundException{
		List<Course> courses = courseService.getCoursesByDomainRecommendation(domain);
		
		if(!courses.isEmpty()) {
			log.info("Courses of domain "+ domain);
			return new ResponseEntity<List<Course>>(courses, HttpStatus.OK);
		} else {
			log.info("Courses above the AVG not found");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	
	
}
