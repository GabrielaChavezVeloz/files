package online.store.services;

import online.store.model.Product;
import online.store.repositories.ProductCategoryRepository;
import online.store.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductsServiceTest {

    @Mock(lenient = true)
    ProductRepository productRepository;

    @Mock(lenient = true)
    ProductCategoryRepository categoryRepository;

    @InjectMocks
    ProductsService service;
    @Test
    void getAllSupportedCategories() {
        List<String> categories = new ArrayList<>();
        categories.add("Toys");
        categories.add("Art");
        categories.add("Music");

        when(service.getAllSupportedCategories()).thenReturn(categories);
    }

    @Test
    void getDealsOfTheDay() {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel"));
        products.add(new Product("T-shirt", "Gray shirt, cotton", "t-shirt.png", 60,"Apparel"));

        when(service.getDealsOfTheDay(2)).thenReturn(products);
    }

    @Test
    void getProductsByCategory() {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel"));
        products.add(new Product("T-shirt", "Gray shirt, cotton", "t-shirt.png", 60,"Apparel"));

        when(productRepository.findByCategory("Apparel")).thenReturn(products);

        when(service.getProductsByCategory("Apparel")).thenReturn(products);

    }

    @Test
    void getAllProducts() {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel"));
        products.add(new Product("T-shirt", "Gray shirt, cotton", "t-shirt.png", 60,"Apparel"));

        when(productRepository.findAll()).thenReturn(products);

        when(service.getAllProducts()).thenReturn(products);
    }

    @Test
    void getProductById() {
        Product product = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        Product productFound = service.getProductById(1L);

        assertThat(productFound).isNotNull();

        verify(productRepository).findById(anyLong());
    }
}