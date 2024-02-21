package com.ecommerce.udemy.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.ecommerce.udemy.dto.OrderDto;
import com.ecommerce.udemy.model.Order;

@Mapper(componentModel = "Spring")
public interface OrderMapper {
	OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

	// Order to OrderDto
	OrderDto orderToOrderDto(Order order);

	// List<Order> to List<OrderDto>
	List<OrderDto> ordersToOrderDtos(List<Order> order);
}
