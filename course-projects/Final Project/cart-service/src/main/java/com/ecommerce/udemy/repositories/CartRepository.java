package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.udemy.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

	Cart findByIdCourseAndIdUser(Long idCourse, Long idUser);
	List<Cart> findByIdUserAndIsActive(Long idUser, Boolean isActive);
}
