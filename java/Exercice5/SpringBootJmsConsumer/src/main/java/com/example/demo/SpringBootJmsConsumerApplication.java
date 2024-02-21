package com.example.demo;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jms.annotation.EnableJms;

@SpringBootApplication
@EnableJms
public class SpringBootJmsConsumerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJmsConsumerApplication.class, args);
		
		/*SpringApplication app = new SpringApplication(SpringBootJmsConsumerApplication.class);
        app.setDefaultProperties(Collections
          .singletonMap("server.port", "8095"));
        app.run(args);*/
	}
}
