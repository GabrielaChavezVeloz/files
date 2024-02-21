package com.springcloudgateway;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.contract.wiremock.AutoConfigureWireMock;
import org.springframework.test.web.reactive.server.WebTestClient;



@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
properties = {"httpbin=http://localhost:${wiremock.server.port}"})
@AutoConfigureWireMock(port = 0)
class SpringcloudGatewayApplicationTests {
	
	@Autowired
	private WebTestClient webClient;

	@Test
	void categoriesTest() {
		
		String categories = "toys,electronics,art,music,apparel,jewelry";
        
        webClient.get()
        .uri("/categories")
        .exchange()
        .expectBody()
        .consumeWith((result) -> {
            String body = new String(result.getResponseBody());
            assertEquals(categories, body);
        });
	
        
	}
	
	@Test
	void dealsOfDayTest() {
		
		String product = "{\"products\":[{\"id\":7,\"name\":\"Toy Car\",\"description\":\"Great toy for boys 1-10 years old. Fun and educational\",\"imageFileName\":\"toy-car.jpeg\",\"priceUSD\":1.0,\"category\":\"toys\"}]}";
		
		
		webClient.get()
        .uri("/deals_of_the_day/1")
        .exchange()
        .expectBody()
        .consumeWith((result) -> {
            String body = new String(result.getResponseBody());
            assertEquals(product, body);
        });
	
	}
	
	@Test
	void productByCategoryTest() {
		
		String product = "{\"products\":[{\"id\":13,\"name\":\"CD Collection\",\"description\":\"Best of the 80s music collection\",\"imageFileName\":\"music_640x426.jpeg\",\"priceUSD\":49.99,\"category\":\"music\"}]}";
		
		
		webClient.get()
        .uri("/products?category=music")
        .exchange()
        .expectBody()
        .consumeWith((result) -> {
            String body = new String(result.getResponseBody());
            assertEquals(product, body);
        });
	
	}

}
