package com.ecommerce.udemy.dto;

import java.util.List;

import com.ecommerce.udemy.model.AreaInterest;
import com.ecommerce.udemy.model.Role;
import com.ecommerce.udemy.model.Type;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class UserCourseDto {

	private Long id;
	private String firstName;
	private String lastName;
	private String displayName;
	private String aboutYourself;
	private List <AreaInterest> areaInterest;
	private String experience;
	private String domainExpertise;
	private Role role;
	private Type type;
	private String profilePicture;
	private List<CourseDto> courses;
}
