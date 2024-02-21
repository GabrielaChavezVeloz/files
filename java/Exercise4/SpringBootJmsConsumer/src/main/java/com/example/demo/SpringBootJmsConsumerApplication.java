package com.example.demo;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootJmsConsumerApplication {

	public static void main(String[] args) {
		//SpringApplication.run(SpringBootJmsConsumerApplication.class, args);
		
		SpringApplication app = new SpringApplication(SpringBootJmsConsumerApplication.class);
        app.setDefaultProperties(Collections
          .singletonMap("server.port", "8090"));
        app.run(args);
	}
}
