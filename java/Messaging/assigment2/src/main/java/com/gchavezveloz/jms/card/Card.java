package com.gchavezveloz.jms.card;

import java.io.Serializable;

public class Card implements Serializable {
	private static final long serialVersionUID = 2668802524807629044L;
	int id;
	String cardHolder;
	String cardNumber;
	int expireMonth;
	int expireYear;
	String cvc;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getCardHolder() {
		return cardHolder;
	}
	
	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}
	
	public String getCardNumber() {
		return cardNumber;
	}
	
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	
	public int getExpireMonth() {
		return expireMonth;
	}
	
	public void setExpireMonth(int expireMonth) {
		this.expireMonth = expireMonth;
	}
	
	public int getExpireYear() {
		return expireYear;
	}
	
	public void setExpireYear(int expireYear) {
		this.expireYear = expireYear;
	}
	
	public String getCvc() {
		return cvc;
	}
	
	public void setCvc(String cvc) {
		this.cvc = cvc;
	}
	
	@Override
	public String toString() {
		return "Card [cardHolder=" + cardHolder + ", cardNumber=" + cardNumber +
		", expireMonth=" + expireMonth
		+ ", expireYear=" + expireYear + ", cvc=" + cvc + "]";
	}
	
}
