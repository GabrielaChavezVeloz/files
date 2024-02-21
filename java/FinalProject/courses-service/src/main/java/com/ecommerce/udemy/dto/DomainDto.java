package com.ecommerce.udemy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class DomainDto {

	private Long id;
	private String domain;
}
