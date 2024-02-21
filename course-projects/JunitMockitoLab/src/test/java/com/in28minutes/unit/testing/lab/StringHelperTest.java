package com.in28minutes.unit.testing.lab;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class StringHelperTest {

	StringHelper helper = new StringHelper();

	@Test
	void testReplaceAInFirst2Positions() {
		assertEquals("BCD", helper.replaceAInFirst2Positions("ABCD"));
		assertEquals("CD", helper.replaceAInFirst2Positions("AACD"));
		assertEquals("BCD", helper.replaceAInFirst2Positions("BACD"));
		assertEquals("AA", helper.replaceAInFirst2Positions("AAAA"));
		assertEquals("MNAA", helper.replaceAInFirst2Positions("MNAA"));

		//edge cases
		assertEquals("", helper.replaceAInFirst2Positions(""));
		assertEquals("", helper.replaceAInFirst2Positions("A"));
		assertEquals("", helper.replaceAInFirst2Positions("AA"));
		assertEquals("B", helper.replaceAInFirst2Positions("B"));
		assertEquals("BC", helper.replaceAInFirst2Positions("BC"));
	}

	@Test
	void testAreFirstTwoAndLastTwoCharsTheSame() {
		assertTrue(helper.areFirstTwoAndLastTwoCharsTheSame("ABCAB"));
		assertFalse(helper.areFirstTwoAndLastTwoCharsTheSame("ABCDEBA"));
		assertTrue(helper.areFirstTwoAndLastTwoCharsTheSame("AAA"));

		//edge cases
		assertFalse(helper.areFirstTwoAndLastTwoCharsTheSame(""));
		assertFalse(helper.areFirstTwoAndLastTwoCharsTheSame("A"));
		assertTrue(helper.areFirstTwoAndLastTwoCharsTheSame("AB"));
	}
}