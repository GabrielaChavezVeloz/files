package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.udemy.model.Order;


public interface OrderRepository extends JpaRepository<Order, Long>{

	List<Order> findAllByIdUser(Long idUser);
}
