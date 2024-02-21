package com.ecommerce.udemy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommerce.udemy.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	List<Review> findAllByCourseId(Long courseId); 
	
	List<Review> findAllByCourseIdAndIsAnonymous(Long courseId, Boolean isAnonymous);
	
	List<Review> findAllByRatingGreaterThan(Double rating);
	
	//@Query(value = "SELECT avg(rating) FROM reviews")
	@Query(value = "SELECT AVG(rating) FROM reviews" , nativeQuery = true)
	public Double avg();
}
