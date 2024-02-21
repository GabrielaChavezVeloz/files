package com.stacksimplify.restservices.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.stacksimplify.restservices.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

}
