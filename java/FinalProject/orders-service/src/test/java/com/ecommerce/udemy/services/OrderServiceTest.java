package com.ecommerce.udemy.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ecommerce.udemy.model.Order;
import com.ecommerce.udemy.repositories.OrderRepository;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {

	@Mock
    OrderRepository orderRepository;

    @InjectMocks
    OrderService service;
	
	@Test
	void createOrderTest() {
		
		/*CartDto cart = new CartDto(1L, 1L, 1L, "java web", 100f, true);
		List<CartDto> carts = new ArrayList<CartDto>();
		carts.add(cart);
		CartListDto cartList = new CartListDto();
		cartList.setCartList(carts);
		OrderMessage orderMessage = new OrderMessage(cartList, 100);*/
		
		Set<Order> orders = new HashSet<>();
		Order order = new Order(1L, 1L, 1L, "java web", 100f, null, 100);
		
		orders.add(order);
		
		List<Order> orderSaved = orderRepository.saveAll(orders);
				
		assertThat(orderSaved).isNotNull();
	
		verify(orderRepository).saveAll(orders);
		
	}
}
