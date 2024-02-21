package com.ecommerce.udemy.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.ecommerce.udemy.dto.CartDto;
import com.ecommerce.udemy.model.Cart;

@Mapper(componentModel = "Spring")
public interface CartMapper {
CartMapper INSTANCE = Mappers.getMapper(CartMapper.class);
	
	//Cart to CartDto
	CartDto cartToCartDto(Cart cart);
	
	//List<Cart> to List<CartDto>
	List<CartDto> cartsToCartDtos(List<Cart> cart);
}
