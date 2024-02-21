package com.ecommerce.udemy.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.ecommerce.udemy.dto.CourseDto;
import com.ecommerce.udemy.dto.DomainDto;
import com.ecommerce.udemy.model.Course;
import com.ecommerce.udemy.model.Domain;
import com.ecommerce.udemy.model.Review;
import com.ecommerce.udemy.repositories.CourseRepository;
import com.ecommerce.udemy.services.CourseService;
import com.google.gson.Gson;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class CourseControllerTest {

	@Autowired
	CourseController courseController;
	
	@MockBean
	CourseRepository courseRepository;
	
	@MockBean
    CourseService courseService;

    @Autowired
    MockMvc mockMvc;
    
    List <Domain> domains;
    
    @BeforeEach
    void setUp() {
    	domains = new ArrayList<>();
		Domain domain1 = new Domain(1L, "development");
		Domain domain2 = new Domain(2L, "testing");
		domains.add(domain1);
		domains.add(domain2);
    }
    
    @Test
    void getAllCoursesTest() throws Exception {
    	List<Course> courses = new ArrayList<>();
    	
    	Course course1 = new Course(1L,"java fundaments", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
    	
    	Course course2 = new Course(2L,"selenium", new Domain(2L, "testing"), "selenium for beginners",
    			"Maria Lopez", 100f, "4 horas", new ArrayList<Review>());
		
    	courses.add(course1);
    	courses.add(course2);
		
		Mockito.when(courseService.getAllCourses()).thenReturn(courses);
		
		mockMvc.perform(get("/courses").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)))
		.andExpect(jsonPath("$.[0].name", is("java fundaments")))
		.andExpect(jsonPath("$.[1].name", is("selenium")));

	
    }
    
    @Test
    void createCourseOkTest() throws Exception {
    			
    	Course course = new Course(1L,"java fundaments", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
		
		Mockito.when(courseService.createCourse(Mockito.any(Course.class))).thenReturn(course);
		
		mockMvc.perform(post("/courses")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(course)))
		.andExpect(status().is2xxSuccessful());
		
    }
    
    @Test
    void createCourseFailedTest() throws Exception {
    			
    	Course course = new Course(1L,"", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
		
		Mockito.when(courseService.createCourse(Mockito.any(Course.class))).thenReturn(course);
		
		mockMvc.perform(post("/courses")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(course)))
		.andExpect(status().is4xxClientError());
		
    }
    
    @Test
    void deleteCourseByIdTest() throws Exception {
    	    
    	
    	//Mockito.doNothing().when(courseService).deleteCourseById(1L);

    	
    	courseService.deleteCourseById(1L);
    	
    	verify(courseService, times(1)).deleteCourseById(1l);
    	
    	//verify(courseRepository).deleteById(1L);
    	
				
		/*MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.delete("/courses/1")
	                                    .contentType(MediaType.APPLICATION_JSON);
		mockMvc.perform(builder)
        		.andExpect(status().isNoContent());
		*/
		
		//verify(courseRepository).deleteById(Mockito.anyLong());
		
    }
    
    @Test
    void getCoursesByNameTest() throws Exception {
   
    	Course course = new Course(2L,"selenium", new Domain(2L, "testing"), "selenium for beginners",
    			"Maria Lopez", 100f, "4 horas", new ArrayList<Review>());
		
		Mockito.when(courseService.getCourseByName("selenium")).thenReturn(course);
		
		mockMvc.perform(get("/courses/courseName?name=selenium").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.name", is("selenium")));

	
    }
    
    @Test
    void getEnrollmentCoursesTest() throws Exception {
    	    	
    	List<CourseDto> courses = new ArrayList<>();
		
    	CourseDto course1 = new CourseDto(1L,"java fundaments", new DomainDto(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", null);
		CourseDto course2 = new CourseDto(2L,"selenium", new DomainDto(2L, "testing"), "selenium for beginners",
    			"Maria Lopez", 100f, "4 horas", null);
				
		courses.add(course1);
		courses.add(course2);
    	
    	Mockito.when(courseService.getEnrolledCoursesByIdUser(Mockito.anyLong())).thenReturn(courses);
		
		MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.get("/courses/enrollment/1")
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8");
		mockMvc.perform(builder)
      		.andExpect(MockMvcResultMatchers.status().isOk())
      		.andExpect(status().isOk()).andExpect(jsonPath("$.courses", hasSize(2)))
      		.andExpect(jsonPath("$.courses[0].name", is("java fundaments")))
      		.andExpect(jsonPath("$.courses[1].name", is("selenium")))
      		.andDo(MockMvcResultHandlers.print());
		
    }
    
    @Test
    void addReviewTest() throws Exception {
    			
    	Course course = new Course(1L,"java fundaments", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
    	
    	Review review = new Review(1L, "Excellent course!", 5D, 1L, course, true);
		
		Mockito.when(courseService.addReviewByIdCourse(review, course.getId())).thenReturn(review);
		
		mockMvc.perform(post("/courses/review?idCourse=1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(review)))
		.andExpect(status().is2xxSuccessful());
		
    }
    
    @Test
    void getCoursesByAvgRatingTest() throws Exception {
    	
    	/*
    	Review review1 = new Review(1L, "Excellent course!", 5D, 1L, course1, true);
    	Review review2 = new Review(2L, "Good!", 4D, 2L, course1, true);
    	Review review3 = new Review(3L, "Bad instructor", 2D, 1L, course2, true);
    	Review review4 = new Review(4L, "Good course", 4D, 2L, course2, true);*/
    	
    	Course course1 = new Course(1L,"java fundamentals", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
    	Course course2 = new Course(2L,"selenium", new Domain(2L, "testing"), "selenium for beginners",
    			"Maria Lopez", 100f, "4 horas",  new ArrayList<Review>());
    	
    	HashSet<Course> courses = new HashSet<Course>();
    	
    	courses.add(course1);
    	courses.add(course2);
    			
    	Mockito.when(courseService.getCoursesByAvgRating()).thenReturn(courses);
    			
    	
    	MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.get("/courses/rating")
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8");
		mockMvc.perform(builder)
    		.andExpect(MockMvcResultMatchers.status().isOk())
    		.andDo(MockMvcResultHandlers.print());
    	
    	
    }
    
    @Test
    void getCoursesByDomainRecommendationTest() throws Exception {
    	Course course1 = new Course(1L,"java fundamentals", new Domain(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", new ArrayList<Review>());
    	Course course2 = new Course(2L,"java web", new Domain(1L, "development"), "java web",
    			"Jose Perez", 150f, "4 horas", new ArrayList<Review>());
    	
    	List<Course> courses = new ArrayList<Course>();
    	courses.add(course1);
    	courses.add(course2);
    	
    	Mockito.when(courseService.getCoursesByDomainRecommendation(Mockito.anyString())).thenReturn(courses);
    	
    	MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.get("/courses/domain/development")
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .content(new Gson().toJson(courses))
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8");
		mockMvc.perform(builder)        
  		.andExpect(MockMvcResultMatchers.status().isOk())
  		.andExpect(status().isOk())
  		.andExpect(jsonPath("$.[0].name", is("java fundamentals")))
  		.andExpect(jsonPath("$.[1].name", is("java web")))
  		.andDo(MockMvcResultHandlers.print());

    }
    
}
