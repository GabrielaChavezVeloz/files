package com.ecommerce.udemy.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.ecommerce.udemy.dto.UserCourseDto;
import com.ecommerce.udemy.model.User;

@Mapper(componentModel = "Spring")
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
	
	//User To UserCourseDto
	UserCourseDto userToUserCourseDto(User user);
	
	
	//List<User> to List<UserMsDto>
	//sList<UserCourseDto> userToUserDtos(List<User> users);
	
}
