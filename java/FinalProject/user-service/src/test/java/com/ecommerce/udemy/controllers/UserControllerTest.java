package com.ecommerce.udemy.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
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
import com.ecommerce.udemy.dto.UserCourseDto;
import com.ecommerce.udemy.exceptions.UserNotFoundException;
import com.ecommerce.udemy.mappers.UserMapper;
import com.ecommerce.udemy.model.AreaInterest;
import com.ecommerce.udemy.model.Role;
import com.ecommerce.udemy.model.Type;
import com.ecommerce.udemy.model.User;
import com.ecommerce.udemy.repositories.UserRepository;
import com.ecommerce.udemy.services.UserService;
import com.google.gson.Gson;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class UserControllerTest {

	@Autowired
	UserController userController;
	
	@MockBean
	UserRepository userRepository;
	
	@MockBean
    UserService userService;

    @Autowired
    MockMvc mockMvc;
    
    List<AreaInterest> areasInterest;
    
    @BeforeEach
    void setUp() {
    	areasInterest = new ArrayList<>();
		AreaInterest area1 = new AreaInterest(1L, "Development");
		AreaInterest area2 = new AreaInterest(2L, "Desing");
		areasInterest.add(area1);
		areasInterest.add(area2);
    }
    
    @Test
    void getAllUsersTest() throws Exception {
    	List<User> users = new ArrayList<>();
    	
    	User user1 = new User(1L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
    	
    	User user2 = new User(2L,"Jose", "Perez","PepitoPerez","a person", areasInterest,
				"tester", "Software development", new Role(2L, "tester"), new Type(2L, "professional"),
				"C://Documents/photo.img");
		
		users.add(user1);
		users.add(user2);
		
		Mockito.when(userService.getAllUsers()).thenReturn(users);
		
		mockMvc.perform(get("/users").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)))
		.andExpect(jsonPath("$.[0].displayName", is("GabyChavezVeloz")))
		.andExpect(jsonPath("$.[1].displayName", is("PepitoPerez")));

	
    }
    
    @Test
    void createUserOkTest() throws Exception {
    			
		User user = new User(1L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
		
		Mockito.when(userService.createUser(Mockito.any(User.class))).thenReturn(user);
		
		mockMvc.perform(post("/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(user)))
		.andExpect(status().is2xxSuccessful());
		
    }
    
    @Test
    void createUserFailedTest() throws Exception {
    			
		User user = new User(1L,"", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
		
		Mockito.when(userService.createUser(Mockito.any(User.class))).thenReturn(user);
		
		mockMvc.perform(post("/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(user)))
		.andExpect(status().is4xxClientError());
		
    }
    
    @Test
    void updateUserOkTest() throws Exception {
    			
		User user = new User(1L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
		
		Mockito.when(userService.updateUserById(Mockito.anyLong(), Mockito.any(User.class))).thenReturn(user);
				
		MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.put("/users/" + 1)
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8")
	                                    .content(new Gson().toJson(user));
		mockMvc.perform(builder)
        		.andExpect(MockMvcResultMatchers.status().isOk())
        		.andExpect(jsonPath("$.firstName", is("Gaby")))
        		.andDo(MockMvcResultHandlers.print());
		
    }
    
    @Test
    void updateUserFailedTest() throws Exception {
    			
		User user = new User(3L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
		
		Mockito.when(userService.updateUserById(Mockito.anyLong(), Mockito.any(User.class))).thenThrow(UserNotFoundException.class);
				
		MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.put("/users/" + 3)
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8")
	                                    .content(new Gson().toJson(user));
		mockMvc.perform(builder)
        		.andExpect(MockMvcResultMatchers.status().isBadRequest())
        		
        		.andDo(MockMvcResultHandlers.print());
		
    }
    
    @Test
    void getEnrollmentCoursesTest() throws Exception {
    	User user = new User(1L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", areasInterest,
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");
    	
    	List<CourseDto> courses = new ArrayList<>();
		
    	CourseDto course1 = new CourseDto(1L,"java fundaments", new DomainDto(1L, "development"), "java for beginners",
    			"Jose Perez", 100f, "3 horas", null);
		CourseDto course2 = new CourseDto(2L,"selenium", new DomainDto(2L, "testing"), "selenium for beginners",
    			"Maria Lopez", 100f, "4 horas", null);
				
		courses.add(course1);
		courses.add(course2);
    	
    	UserCourseDto dto = UserMapper.INSTANCE.userToUserCourseDto(user);
		dto.setCourses(courses);

		Mockito.when(userService.findUserCourses(Mockito.anyLong())).thenReturn(dto);
		
		MockHttpServletRequestBuilder builder =
	              MockMvcRequestBuilders.get("/users/enrollment/1")
	                                    .contentType(MediaType.APPLICATION_JSON_VALUE)
	                                    .accept(MediaType.APPLICATION_JSON)
	                                    .characterEncoding("UTF-8");
		mockMvc.perform(builder)
      		.andExpect(MockMvcResultMatchers.status().isOk())
      		.andExpect(jsonPath("$.firstName", is("Gaby")))
      		.andDo(MockMvcResultHandlers.print());
		
    }
	
}
