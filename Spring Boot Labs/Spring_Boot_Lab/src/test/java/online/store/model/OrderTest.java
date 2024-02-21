package online.store.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {

    Order order;
    Product product;

    @BeforeEach
    void setUp() {
        product = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");

        order = new Order("Gabriela", "Chavez", "gchavezveloz@deloitte.com", "Street 123", 2, product, "123412341234");
    }

    @Test
    void testExistingOrder(){
        assertAll("Order Test",
                ()-> assertEquals("Gabriela", order.getFirstName(), "Wrong first name"),
                ()-> assertEquals("Chavez", order.getLastName(), "Wrong last name"),
                ()-> assertEquals("gchavezveloz@deloitte.com", order.getEmail(), "Wrong email"),
                ()-> assertEquals("Street 123", order.getShippingAddress(), "Wrong shipping address"),
                ()-> assertEquals(2, order.getQuantity(), "Wrong quantity"),
                ()-> assertEquals(product, order.getProduct(), "Wrong product"),
                ()-> assertEquals("123412341234", order.getCreditCard(), "Wrong credit card")
                );
    }

    @Test
    void testNotExistingOrder(){
        assertAll("Order Test",
                ()-> assertNotEquals("Maria", order.getFirstName(), "Wrong first name"),
                ()-> assertNotEquals("Perez", order.getLastName(), "Wrong last name"),
                ()-> assertNotEquals("maria@deloitte.com", order.getEmail(), "Wrong email"),
                ()-> assertNotEquals("Street 12345", order.getShippingAddress(), "Wrong shipping address"),
                ()-> assertNotEquals(4, order.getQuantity(), "Wrong quantity"),
                ()-> assertEquals(product, order.getProduct(), "Wrong product"),
                ()-> assertNotEquals("12341234", order.getCreditCard(), "Wrong credit card")
        );
    }
}