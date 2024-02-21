package com.in28minutes.unit.testing.lab;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import com.in28minutes.unit.testing.lab.others.SomeDataService;

public class SomeBusinessServiceStubTest {
		
	@Test
	public void testCalculateSum() {

		SomeDataService dataServiceStub = new SomeDataService() {
			public int[] retrieveData() {
				return new int[] {10,20};
			}
		};

		SomeBusinessService businessService =
				new SomeBusinessService(dataServiceStub);

		assertEquals(30,businessService.calculateSum());
	}

	@Test
	public void testCalculateSum_empty() {
		SomeDataService dataServiceStub = new SomeDataService() {
			public int[] retrieveData() {
				return new int[] {};
			}
		};
		SomeBusinessService businessService = new SomeBusinessService(dataServiceStub);
		assertEquals(0,businessService.calculateSum());
	}
	
}
