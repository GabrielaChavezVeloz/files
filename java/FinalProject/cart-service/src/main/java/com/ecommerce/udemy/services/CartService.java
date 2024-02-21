package com.ecommerce.udemy.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ecommerce.udemy.dto.CartListDto;
import com.ecommerce.udemy.exceptions.CartNotFoundException;
import com.ecommerce.udemy.exceptions.CourseExistsException;
import com.ecommerce.udemy.mappers.CartMapper;
import com.ecommerce.udemy.model.Cart;
import com.ecommerce.udemy.repositories.CartRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CartService {

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartMapper cartMapper;
	
	//get all carts
	public List<Cart> getAllCarts(){
		return cartRepository.findAll();
	}
	
	//CreateCart Method
	public Cart createCart(Cart cart) throws CourseExistsException {
		//if course exist in the current cart
		Cart existingCourse = cartRepository.findByIdCourseAndIdUser(cart.getIdCourse(), cart.getIdUser());
		
		//if exists throw CourseExistsException
		if(existingCourse != null) {
			throw new CourseExistsException("Course already exists in the cart");	
		}
		
		return cartRepository.save(cart);
	}
	
	//deleteCartById
	public void deleteCartById(Long id) {
		Optional<Cart> optionalCart = cartRepository.findById(id);
		
		if(!optionalCart.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course Not found in cart Repository, provide the correct course id");
		}
		
		cartRepository.deleteById(id);
	}
	
	//getCartByIdUser
	public List<Cart> getCartByIdUser(Long idUser) throws CartNotFoundException{
		List<Cart> cart = cartRepository.findByIdUserAndIsActive(idUser, true);
		
		return cart;
	}
	
	//inactiveCart 
	public void inactiveCart(Long id) {
		Optional<Cart> optionalCart = cartRepository.findById(id);
	
		if(!optionalCart.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course Not found in cart Repository, provide the correct course id");
		}
		
		optionalCart.get().setIsActive(false);
		cartRepository.save(optionalCart.get());
	}
	
	public CartListDto getCartContent(Long idUser) {
		List<Cart> carts = cartRepository.findByIdUserAndIsActive(idUser, true);
		
		CartListDto cartListDto = new CartListDto();
		
		if(!carts.isEmpty()) {
			cartListDto.setCartList(cartMapper.cartsToCartDtos(carts));
		}
		
		return cartListDto;
	}
}
