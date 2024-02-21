package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.udemy.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{
	
	Course findByName(String name);
	
	List<Course> findByOrderByPriceAsc();
	
	List<Course> findByOrderByPriceDesc();
	
	List<Course> findByDomainDomain(String domain);

}
