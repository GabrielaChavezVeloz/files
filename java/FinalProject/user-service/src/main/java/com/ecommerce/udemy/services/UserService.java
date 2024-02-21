package com.ecommerce.udemy.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.udemy.dto.UserCourseDto;
import com.ecommerce.udemy.exceptions.UserExistsException;
import com.ecommerce.udemy.exceptions.UserNotFoundException;
import com.ecommerce.udemy.mappers.UserMapper;
import com.ecommerce.udemy.model.User;
import com.ecommerce.udemy.repositories.CourseRepository;
import com.ecommerce.udemy.repositories.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	//get all users
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//CreateUser Method
	public User createUser(User user) throws UserExistsException {
		//if user exist using displayName
		User existingUser = userRepository.findByDisplayName(user.getDisplayName());
		
		//if not exists throw UserExistsException
		if(existingUser != null) {
			throw new UserExistsException("User already exists in repository");	
		}
		
		return userRepository.save(user);
	}
	
	//updateUserById
	public User updateUserById(Long id, User user) throws UserNotFoundException{
		Optional<User> optionalUser = userRepository.findById(id);
		
		if(!optionalUser.isPresent()) {
			throw new UserNotFoundException("User Not found in user Repository, provide the correct user id");
		}
		user.setId(id);
		return userRepository.save(user);
	}
	
	
	public UserCourseDto findUserCourses(Long id) throws UserNotFoundException {
		Optional<User> optionalUser = userRepository.findById(id);
		if (!optionalUser.isPresent()) {
			throw new UserNotFoundException("User Not Found in user Repository, provide correct user id");
		}
		UserCourseDto userDTO = UserMapper.INSTANCE.userToUserCourseDto(optionalUser.get());
		userDTO.setCourses(courseRepository.getCoursesByIdUser(id));
		return userDTO;
	}
}
