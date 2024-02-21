package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.udemy.model.EnrolledUsers;

public interface EnrolledUsersRepository extends JpaRepository<EnrolledUsers, Long>{

	List<EnrolledUsers> findAllByIdUser(Long id);
}
