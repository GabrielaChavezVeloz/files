package online.store.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CheckoutRequestTest {

    @Test
    void testCheckoutRequest(){
        List<CheckoutRequest.ProductInfo> products = new ArrayList<>();
        products.add(new CheckoutRequest.ProductInfo(1L, 2L));
        products.add(new CheckoutRequest.ProductInfo(2L, 5L));
        CheckoutRequest request = new CheckoutRequest("Gabriela", "Chavez", "gaby@test.com", "Street 123", products, "123123123");

        assertAll("Checkout Request Test",
                ()->assertEquals("Gabriela", request.getFirstName(), "Wrong first name"),
                ()->assertEquals("Chavez", request.getLastName(), "Wrong last name"),
                ()->assertEquals("gaby@test.com", request.getEmail(), "Wrong email"),
                ()->assertEquals("Street 123", request.getShippingAddress(), "Wrong address"),
                ()->assertEquals(products, request.getProducts(), "Wrong products"),
                ()->assertEquals("123123123", request.getCreditCard(), "Wrong credit card")
        );

    }

}