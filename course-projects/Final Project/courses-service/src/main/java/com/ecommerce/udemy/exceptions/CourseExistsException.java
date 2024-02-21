package com.ecommerce.udemy.exceptions;

public class CourseExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public CourseExistsException(String message) {
		super(message);
	}
}
