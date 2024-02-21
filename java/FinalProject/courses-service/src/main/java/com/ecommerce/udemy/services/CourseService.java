package com.ecommerce.udemy.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ecommerce.udemy.dto.CartDto;
import com.ecommerce.udemy.dto.CourseDto;
import com.ecommerce.udemy.dto.ReviewDto;
import com.ecommerce.udemy.exceptions.CourseExistsException;
import com.ecommerce.udemy.exceptions.CourseNotFoundException;
import com.ecommerce.udemy.mappers.CourseMapper;
import com.ecommerce.udemy.mappers.ReviewMapper;
import com.ecommerce.udemy.model.Course;
import com.ecommerce.udemy.model.EnrolledUsers;
import com.ecommerce.udemy.model.OrderMessage;
import com.ecommerce.udemy.model.Review;
import com.ecommerce.udemy.repositories.CourseRepository;
import com.ecommerce.udemy.repositories.EnrolledUsersRepository;
import com.ecommerce.udemy.repositories.ReviewRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private EnrolledUsersRepository enrolledUsersRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	//get all users
	public List<Course> getAllCourses(){
		List<Course> courses = courseRepository.findAll();
		
		if(!courses.isEmpty()) {
			
			for(Course course : courses) {
				List<Review> reviews = reviewRepository.findAllByCourseIdAndIsAnonymous(course.getId(), false);
				course.setReview(reviews);
			}
		}
		
		return courses;
	}
	
	//CreateCourse Method
	public Course createCourse(Course course) throws CourseExistsException {
		//if course exist using name
		Course existingCourse = courseRepository.findByName(course.getName());
		
		//if not exists throw CourseExistsException
		if(existingCourse != null) {
			throw new CourseExistsException("Course already exists in repository");	
		}
		
		return courseRepository.save(course);
	}
	
	//getCourseById
	public Course getCourseById(Long id) throws CourseNotFoundException{
		Course course;
		Optional<Course> optionalCourse = courseRepository.findById(id);
		
		
		if(optionalCourse.isPresent()) {
			course = optionalCourse.get();
			List<Review> reviews = reviewRepository.findAllByCourseIdAndIsAnonymous(course.getId(), false);
			//
			course.setReview(reviews);
		} else {
			throw new CourseNotFoundException("User Not found in user Repository");
		}
		
	
		return course;
	}
	
	//getCourseByName
	public Course getCourseByName(String name) throws CourseNotFoundException{
		Course course = courseRepository.findByName(name);
		
		if(course == null) {
			throw new CourseNotFoundException("Course Not found in course Repository");
		}
		
		List<Review> reviews = reviewRepository.findAllByCourseIdAndIsAnonymous(course.getId(), false);
		//
		course.setReview(reviews);
		
		return course;
	}
	
	//deleteCoruseById
	public void deleteCourseById(Long id) {
		Optional<Course> optionalCourse = courseRepository.findById(id);
		
		if(!optionalCourse.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course Not found in course Repository, provide the correct course id");
		}
		
		courseRepository.deleteById(id);
	}
	
	//get sorted courses method
	public List<Course> getSortedCourses(String order) {
		if(order.equals("asc")) {
			return courseRepository.findByOrderByPriceAsc();
		} else if(order.equals("desc")) {
			return courseRepository.findByOrderByPriceDesc();
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course Not found in course Repository, provide the correct course id");
		}
		
	}
	
	//get enrolled courses by id user
	public List<CourseDto> getEnrolledCoursesByIdUser(Long id) {
		List<CourseDto> dtos = null;
		List<EnrolledUsers> enrolledUsers = enrolledUsersRepository.findAllByIdUser(id);
		List<Course> courses = new ArrayList<Course>();
		
		if(!enrolledUsers.isEmpty()) {
			
			for(EnrolledUsers user : enrolledUsers) {
				courses.add(user.getCourse());
			}
			
			dtos = CourseMapper.INSTANCE.courseToCourseDtos(courses);
			
			for(CourseDto dto : dtos) {
				List<ReviewDto> review = ReviewMapper.INSTANCE.convertList(reviewRepository.findAllByCourseIdAndIsAnonymous(dto.getId(), false));
				//
				dto.setReview(review);
			}
		}
		
		return dtos;
	}
	
	//addReview Method
	public Review addReviewByIdCourse(Review review, Long idCourse) throws CourseNotFoundException {
		Optional<Course> existingCourse = courseRepository.findById(idCourse);
		
		//if not exists throw CourseNotFoundException
		if(existingCourse.isPresent()) {
			return reviewRepository.save(review);
		} else {
			throw new CourseNotFoundException("Course Not found in user Repository");
		}
		
	}
	
	
	//get above avg courses Method
	public HashSet<Course> getCoursesByAvgRating() {
		
		Double avg = reviewRepository.avg();
		
		List<Review> reviews = reviewRepository.findAllByRatingGreaterThan(avg);
		HashSet<Course> courses = new HashSet<Course>();
		
		if(!reviews.isEmpty()) {
			
			for(Review review : reviews) {
				courses.add(review.getCourse());
			}
			
			for(Course course : courses) {
				List<Review> r = reviewRepository.findAllByCourseIdAndIsAnonymous(course.getId(), false);
				course.setReview(r);
			}
		}
		
		return courses;
		
	}
	
	//get courses by domain recommendation Method
	public List<Course> getCoursesByDomainRecommendation(String areaInterest) throws CourseNotFoundException {
		List<Course> courses = courseRepository.findByDomainDomain(areaInterest);
		
		if(courses.isEmpty()) {
			throw new CourseNotFoundException("Coruse Not found in course Repository");
		}
		
		return courses;
	}
	
	//add enrollment user
	public void addEnrollementUser(OrderMessage orderMessage) {
		
		List<CartDto> cartList = orderMessage.getCartList().getCartList();
		
		for(CartDto cart : cartList) {
			EnrolledUsers enrolled = new EnrolledUsers();
			enrolled.setCourse(courseRepository.findById(cart.getIdCourse()).get());
			enrolled.setIdUser(cart.getIdUser());
			
			enrolledUsersRepository.save(enrolled);
		}
	}
}
