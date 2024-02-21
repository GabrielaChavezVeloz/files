package com.ecommerce.udemy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.udemy.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByDisplayName(String displayName);
}
