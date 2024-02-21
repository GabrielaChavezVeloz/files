package com.ecommerce.udemy.controllers;

import java.util.List;
import java.util.Random;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.ecommerce.udemy.exceptions.CartNotFoundException;
import com.ecommerce.udemy.exceptions.CourseExistsException;
import com.ecommerce.udemy.kafka.KafkaProducerService;
import com.ecommerce.udemy.model.Cart;
import com.ecommerce.udemy.model.OrderMessage;
import com.ecommerce.udemy.services.CartService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/carts")
@AllArgsConstructor
@Validated
@Slf4j
@Tag(name = "Cart Controller Service", description = "Controller for udemy carts")
public class CartController {

	public CartService cartService;	
	private final KafkaProducerService kafkaProducerService;
	
	//get all carts method
	@Operation(summary = "Get all carts", description = "get all carts")
	@GetMapping()
	public List<Cart> getAllCartss() {
		return cartService.getAllCarts();
	}

	//Create Cart Method
	@Operation(summary = "Create a new cart", description = "create and save a new cart to DB")
	@PostMapping
	public ResponseEntity<Void> createCart(@Parameter( description = "Cart information for a new cart to be created.") @RequestBody Cart cart, UriComponentsBuilder builder) {
		
		try {
			cartService.createCart(cart);
			log.info("Course added to the cart");
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(builder.path("/cart/{id}").buildAndExpand(cart.getId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		} catch(CourseExistsException ex) {
			log.error("Error trying to add course "+ ex.getMessage());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
		}	
	}
	
	//deleteCartById
	@Operation(summary = "Delete an existing course in cart", description = "delete a course in the cart")
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteCartById(@PathVariable("id") Long id) throws CartNotFoundException {
		
		cartService.deleteCartById(id);
		log.info("Course deleted of the cart");
		return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);
		
	}
	
	//getCarteByIdUser
	@Operation(summary = "Get a cart by id user", description = "get a cart by id user")
	@GetMapping("/{idUser}")
	public ResponseEntity<List<Cart>> getCartByIdUser(@PathVariable("idUser") Long id){
		
		try {
			List<Cart> cart = cartService.getCartByIdUser(id);
			
			if(!cart.isEmpty()) {
				log.info("Content cart found.");
				return new ResponseEntity<>(cart, HttpStatus.OK);
			} else {
				log.info("Content cart not found");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		} catch (CartNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		
	}
	
	//Checkout Method
	@Operation(summary = "Checkout courses in the cart", description = "Checkout current courses in the cart")
	@PostMapping("/checkout/{idUser}")
	public ResponseEntity<String> checkoutCart(@PathVariable("idUser") Long idUser, UriComponentsBuilder builder) {
		 
		 
		 try {
			 List<Cart> carts = cartService.getCartByIdUser(idUser);
			 
			 if(!carts.isEmpty()) {
				 			 
				 OrderMessage message = new OrderMessage();
				 
				 message.setCartList(cartService.getCartContent(idUser));
				 
				 Random rand = new Random(); 
				 
				 message.setOrderNumber(rand.nextInt(10000));
				 
				 //generar order number
				 for(Cart cart : carts) {
					 cartService.inactiveCart(cart.getId());
				 }
				 
				 //send kafka message
				
				 kafkaProducerService.sendMessage(message);
				 
			 }
			 			 
			 
		 } catch (CartNotFoundException e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		
		
		 return new ResponseEntity<>("success", HttpStatus.OK);
		
	}
}
