package com.springcloudgateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@SpringBootApplication
@RestController
@EnableEurekaClient
public class SpringcloudGatewayApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringcloudGatewayApplication.class, args);
	}

	
	@Bean
	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
		
		return builder.routes()
				.route(p -> p
					.path("/**", 
							"/products/**", 
							"/deals_of_the_day/**", 
							"/categories/**",
							"/checkout/**")
					.filters(f -> f
							.circuitBreaker(config -> config
									.setName("mycmd")
									.setFallbackUri("forward:/fallback")))
					.uri("lb://store-service"))
				.build();
		
	}
	
	@RequestMapping("/fallback")
	  public Mono<String> fallback() {
	    return Mono.just("fallback");
	  }
}



