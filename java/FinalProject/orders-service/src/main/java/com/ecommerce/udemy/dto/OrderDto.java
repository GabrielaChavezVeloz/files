package com.ecommerce.udemy.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {

	private Long id;
	private Long idUser;
	private Long idCourse;
	private String courseName;
	private Float price;
    private Date orderDate;
    private String order_number;
}
