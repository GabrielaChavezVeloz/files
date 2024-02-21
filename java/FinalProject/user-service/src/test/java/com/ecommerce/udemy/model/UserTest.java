package com.ecommerce.udemy.model;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

public class UserTest {

	@Test
	void userTest() {
		
		User user = new User(1L,"Gaby", "Chavez Veloz","GabyChavezVeloz","a person", new ArrayList<AreaInterest>(),
				"java developer", "Software development", new Role(1L, "developer"), new Type(1L, "student"),
				"C://Documents/photo.img");


		
		assertAll("User Test",
                        () -> assertEquals("Gaby", user.getFirstName(), "Wrong First Name"),
                        () -> assertEquals("Chavez Veloz", user.getLastName(), "Wrong Last Name"),
                        () -> assertEquals("GabyChavezVeloz", user.getDisplayName(), "Wrong DisplayName"),
                        () -> assertEquals("a person", user.getAboutYourself(), "Wrong AboutYourself"),
                        () -> assertNotNull(user.getAreaInterest(), "Wrong Areas Interest"),
                        () -> assertEquals("Software development", user.getDomainExpertise(), "Wrong DomainExpertise"),
                        () -> assertNotNull(user.getProfilePicture(), "Wrong Profile Picture"),                       
                        () -> assertEquals("developer", user.getRole().getRole(), "Wrong Role"),
                        () -> assertEquals("student", user.getType().getType(), "Wrong Type"),
                        () -> assertEquals("C://Documents/photo.img", user.getProfilePicture(), "Wrong Path of Profile Picture")
                        
                );
	}
}
