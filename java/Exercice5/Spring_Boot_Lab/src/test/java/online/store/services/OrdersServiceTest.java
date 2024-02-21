package online.store.services;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import online.store.model.Order;
import online.store.model.Product;
import online.store.repositories.OrderRepository;

@ExtendWith(MockitoExtension.class)
class OrdersServiceTest {

    @Mock
    OrderRepository orderRepository;

    @InjectMocks
    OrdersService service;

    @Test
    void placeOrders() {
        Set<Order> orders = new HashSet<>();

        Product product = new Product("Jeans", "Fashionable and comfortable jeans", "jeans.png", 40,"Apparel");
        Order order = new Order("Gabriela", "Chavez", "test@test,com", "Street 123", 2L, product, "123123123");

        orders.add(order);

        List<Order> orderSaved = orderRepository.saveAll(orders);
        assertThat(orderSaved).isNotNull();

        verify(orderRepository).saveAll(orders);

    }
}