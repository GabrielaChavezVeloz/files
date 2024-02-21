package com.ecommerce.udemy.model;

import com.ecommerce.udemy.dto.CartListDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderMessage {
	private CartListDto cartList;
	private Integer orderNumber;
}
