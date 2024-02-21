package com.ecommerce.udemy.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

import lombok.extern.slf4j.Slf4j;


@ControllerAdvice
@Slf4j
public class CustomGlobalExceptionHandler{

	@ExceptionHandler(value = {MethodArgumentNotValidException.class,
			ResponseStatusException.class,
			UserNotFoundException.class, 
			UserExistsException.class})
	public ResponseEntity<Object> handleMethodArgumentNotValid(HttpServletRequest request, Exception exception) throws Exception {

		log.error(String.format("Exception in handling request to %s: %s", request.getRequestURI(), exception.getMessage()));
			
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
			
	}
		
		
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<String> defaultErrorHandler(HttpServletRequest request, Exception exception) throws Exception {
		log.error(String.format("Exception in handling request to %s: %s", request.getRequestURI(), exception.getMessage()));
	    exception.printStackTrace();
	    return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
