package com.firstmicroservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/first")
public class FirstController {
	@GetMapping("/message")
    public String test() {
        return "Hello this is my first microservice";
    }
}
