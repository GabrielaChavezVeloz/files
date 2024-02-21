package online.store.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductTest {

    Product product;

    @BeforeEach
    void setUp(){
        product = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");
    }

    @Test
    void testExistingProduct(){

        assertAll("Person Test",
                ()->assertEquals("Jeans", product.getName(), "Wrong product name"),
                ()->assertEquals("Fashionable and comfortable jeans", product.getDescription(), "Wrong description"),
                ()->assertEquals("jeans.png", product.getImageFileName(), "Wrong file name"),
                ()->assertEquals(40, product.getPriceUSD(), "Wrong price"),
                ()->assertEquals("Apparel", product.getCategory(), "Wrong category name")
                );
    }

    @Test
    void testNotExistingProduct(){
       assertAll("Person Test",
                ()->assertNotEquals("Shirt", product.getName(), "Wrong product name"),
                ()->assertNotEquals("Fashionable and comfortable shirt", product.getDescription(), "Wrong description"),
                ()->assertNotEquals("shirt.png", product.getImageFileName(), "Wrong file name"),
                ()->assertNotEquals(60, product.getPriceUSD(), "Wrong price"),
                ()->assertNotEquals("Toy", product.getCategory(), "Wrong category name")
        );
    }
}