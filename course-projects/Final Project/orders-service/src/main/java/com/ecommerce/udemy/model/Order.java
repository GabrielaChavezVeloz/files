package com.ecommerce.udemy.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "id_user", nullable = false)
	private Long idUser;
	
	@Column(name = "id_course", nullable = false)
	private Long idCourse;
	
	@Column(name = "course_name", nullable = false)
	private String courseName;
	
	@Column(name = "price", nullable = false)
	private Float price;
	
	@Column(name = "order_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date orderDate;
	
	@Column(name = "order_number")
    private Integer orderNumber;
}
