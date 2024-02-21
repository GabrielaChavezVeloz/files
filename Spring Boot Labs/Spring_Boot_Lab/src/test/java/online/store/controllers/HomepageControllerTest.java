package online.store.controllers;

import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import online.store.model.Product;
import online.store.services.ProductsService;

@SpringBootTest
@AutoConfigureMockMvc
class HomepageControllerTest {

    @Autowired
    HomepageController controller;
    @MockBean
    ProductsService service;

    @Autowired
    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getProductCategories() throws Exception {
        List<String> categories = Arrays.asList("Toys", "Electronics", "Art", "Music", "Apparel", "Jewelry");

        when(service.getAllSupportedCategories()).thenReturn(categories);

        mockMvc.perform(get("/categories"))
                .andExpect(status().isOk())
                .andExpect(content().string(categories.stream().collect(Collectors.joining(","))));
    }

    @Test
    void getDealsOfTheDay() throws Exception {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel"));
        products.add(new Product("T-shirt", "Gray shirt, cotton", "t-shirt.png", 60,"Apparel"));

        when(service.getDealsOfTheDay(2)).thenReturn(products);
        //when(service.getProductsByCategory("Apparel")).thenReturn(products);

        mockMvc.perform(get("/deals_of_the_day/{number_of_products}",2))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.products").exists())
                .andExpect(jsonPath("$.products.size()", is(2)));
    }

    @Test
    void getProductsForCategory() throws Exception {
        List<Product> allProducts = new ArrayList<>();
        List<Product> categoryProducts = new ArrayList<>();
        Product product1 = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");
        Product product2 = new Product("T-shirt", "Gray shirt, cotton", "t-shirt.png", 60,"Apparel");
        Product product3 = new Product("Doll", "Beautiful doll", "doll.png", 80,"Toy");
        allProducts.add(product1);
        allProducts.add(product2);
        allProducts.add(product3);
        categoryProducts.add(product1);
        categoryProducts.add(product2);

        when(service.getProductsByCategory("Apparel")).thenReturn(categoryProducts);
        when(service.getAllProducts()).thenReturn(allProducts);

        MvcResult result = mockMvc.perform(get("/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.products").exists())
                .andExpect(jsonPath("$.products[0].category", is("Apparel")))
                .andReturn();

        assertNotNull(result);
    }
}