package online.store.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductCategoryTest {

    @Test
    void getCategory() {
        ProductCategory category = new ProductCategory("Toys");

        assertEquals("Toys", category.getCategory(), "Wrong category");

        assertNotEquals("Art", category.getCategory(), "Wrong category");
    }
}