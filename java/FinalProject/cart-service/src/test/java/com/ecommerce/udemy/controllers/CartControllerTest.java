package com.ecommerce.udemy.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import com.ecommerce.udemy.model.Cart;
import com.ecommerce.udemy.repositories.CartRepository;
import com.ecommerce.udemy.services.CartService;
import com.google.gson.Gson;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class CartControllerTest {

	@Autowired
	CartController cartController;
	
	@MockBean
	CartRepository cartRepository;
	
	@MockBean
    CartService cartService;

    @Autowired
    MockMvc mockMvc;
    
    @Test
    void getAllCartsTest() throws Exception {
    	List<Cart> carts = new ArrayList<>();
    	
    	Cart cart1 = new Cart(1L, 1L, 1L, "java fundaments", 100f, true);
    	
    	Cart cart2 = new Cart(1L, 3L, 1L, "java web", 200f, true);
		
    	carts.add(cart1);
    	carts.add(cart2);
		
		Mockito.when(cartService.getAllCarts()).thenReturn(carts);
		
		mockMvc.perform(get("/carts").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)))
		.andExpect(jsonPath("$.[0].nameCourse", is("java fundaments")))
		.andExpect(jsonPath("$.[1].nameCourse", is("java web")));

	
    }
    
    @Test
    void createCartOkTest() throws Exception {
    			
    	Cart cart = new Cart(1L, 1L, 1L, "java fundaments", null, true);
		
		Mockito.when(cartService.createCart(Mockito.any(Cart.class))).thenReturn(cart);
		
		mockMvc.perform(post("/carts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new Gson().toJson(cart)))
		.andExpect(status().is2xxSuccessful());
		
    }
    
    @Test
    void deleteCourseByIdTest() throws Exception {    	
    	
    	cartService.deleteCartById(1L);
    	
    	verify(cartService, times(1)).deleteCartById(1l);
		
    }
    
    @Test
    void getCartByIdUserTest() throws Exception {
   
    	List<Cart> carts = new ArrayList<>();
    	
    	Cart cart1 = new Cart(1L, 1L, 1L, "java fundaments", 100f, true);
    	
    	Cart cart2 = new Cart(1L, 3L, 1L, "java web", 200f, true);
		
    	carts.add(cart1);
    	carts.add(cart2);
		
		Mockito.when(cartService.getCartByIdUser(Mockito.anyLong())).thenReturn(carts);
		
		mockMvc.perform(get("/carts/1").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)))
		.andExpect(jsonPath("$.[0].nameCourse", is("java fundaments")))
		.andExpect(jsonPath("$.[1].nameCourse", is("java web")));;

	
    }
}
