package guru.springframework;


import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class FooTest {

	@Test
	void getBar() {
		Foo foo = new Foo();
		
		String result = foo.getBar();
		
		assertEquals("FooBar", result);
	}
}
