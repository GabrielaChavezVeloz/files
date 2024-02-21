package com.ecommerce.udemy.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.udemy.dto.CartDto;
import com.ecommerce.udemy.model.Order;
import com.ecommerce.udemy.model.OrderMessage;
import com.ecommerce.udemy.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	public List<Order> getAllOrdersByUserId(Long idUser) {
		return orderRepository.findAllByIdUser(idUser);
	}
	
	public List<Order> createOrder(OrderMessage orderMessage){
		List<Order> orders = new ArrayList<Order>();
		
		List<CartDto> cartList = orderMessage.getCartList().getCartList();

		if(!cartList.isEmpty()) {
			for(CartDto cart: cartList) {
				Order order = new Order();
				
				order.setCourseName(cart.getNameCourse());
				order.setIdCourse(cart.getIdCourse());
				order.setIdUser(cart.getIdUser());
				order.setOrderNumber(orderMessage.getOrderNumber());
				order.setPrice(cart.getPrice());
				order.setOrderDate(new Date());
				
				orders.add(order);
			}
			
			orderRepository.saveAll(orders);
		}
				

		return orders;
	}
	
	
}
