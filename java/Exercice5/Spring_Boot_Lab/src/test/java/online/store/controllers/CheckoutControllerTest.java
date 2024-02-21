package online.store.controllers;

import com.google.gson.Gson;
import online.store.model.CheckoutRequest;
import online.store.model.Order;
import online.store.model.Product;
import online.store.repositories.OrderRepository;
import online.store.repositories.ProductRepository;
import online.store.services.OrdersService;
import online.store.services.ProductsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.*;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CheckoutControllerTest {

    @Autowired
    CheckoutController controller;
    @MockBean
    ProductRepository productRepository;

    @Autowired
    ProductsService productsService;
    @MockBean
    OrderRepository orderRepository;

    @MockBean
    OrdersService ordersService;

    @Autowired
    MockMvc mockMvc;

    List<CheckoutRequest.ProductInfo> products;
    CheckoutRequest checkoutRequest;
    Set<Order> orders;
    Product product;


    @BeforeEach
    void setUp() {
        orders = new HashSet<>(2);
        products = new ArrayList<>();
        products.add(new CheckoutRequest.ProductInfo(1L, 1L));
        checkoutRequest = new CheckoutRequest("Gabriela", "Chavez", "gaby@test.com", "Street 123", products, "1234123412341234");
        product = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");


    }


    @Test
    void checkout() throws Exception {
        when(productRepository.findById(anyLong())).thenReturn(Optional.of(product));

        mockMvc.perform(post("/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(checkoutRequest)))
                .andExpect(status().isOk())
                .andExpect(content().string("success"));

    }

    @Test
    void testInvalidCreditCard() throws Exception {
        checkoutRequest.setCreditCard("");

        mockMvc.perform(post("/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(checkoutRequest)))
                .andExpect(status().isPaymentRequired())
                .andExpect(content().string("Credit card information is missing"));

    }

    @Test
    void testInvalidFirstName() throws Exception {
        checkoutRequest.setFirstName("");

        mockMvc.perform(post("/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(checkoutRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("First name is missing"));

    }

    @Test
    void testInvalidLastName() throws Exception {
        checkoutRequest.setLastName("");

        mockMvc.perform(post("/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(checkoutRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Last name is missing"));

    }

    @Test
    void handleCreditCardError() throws Exception {
        checkoutRequest.setCreditCard("123123123123");

        mockMvc.perform(post("/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(checkoutRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Credit card is invalid, please use another form of payment"));
    }
}