package com.ecommerce.udemy.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.ecommerce.udemy.dto.UserCourseDto;
import com.ecommerce.udemy.exceptions.UserExistsException;
import com.ecommerce.udemy.exceptions.UserNotFoundException;
import com.ecommerce.udemy.model.User;
import com.ecommerce.udemy.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "/users")
@AllArgsConstructor
@Validated
@Tag(name = "User Controller Service", description = "Controller for users")

public class UserController {

	
	public UserService userService;	
	
	//get all users method
	@Operation(summary = "Get all users of the DB", description = "get all users")
	@GetMapping()
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	//Create User Method
	@Operation(summary = "Create a new user", description = "create and save a new user to DB")
	@PostMapping
	public ResponseEntity<Void> createUser(@Parameter( description = "User information for a new user to be created.") @Valid @RequestBody User user, UriComponentsBuilder builder) {
		
		try {
			userService.createUser(user);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(builder.path("/users/{id}").buildAndExpand(user.getId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		} catch(UserExistsException ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}
		
	}
	
	//updateUserById
	@Operation(summary = "Update existing user", description = "update and save a user to DB")
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUSerById(@PathVariable("id") Long id, @RequestBody User user) {
		
		try {
			User updatedUser = userService.updateUserById(id, user);
			return new ResponseEntity<User>(updatedUser, HttpStatus.OK); 
		} catch(UserNotFoundException ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}
		
	}
	
	//getCourseById
	@Operation(summary = "Get user enrrolled courses", description = "Get user enrrolled courses")
	@GetMapping("/enrollment/{id}")
	public ResponseEntity<UserCourseDto> getEnrollmentCoursesByIdUser(@PathVariable("id") Long id){
		try {
			UserCourseDto userCourses = userService.findUserCourses(id);
			return new ResponseEntity<>(userCourses, HttpStatus.OK);
		} catch (UserNotFoundException e) {
			//log.error("Error updating User: " + e.getMessage());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
	
}
