package online.store.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "messages")
public class Messages {
	
	@Id
	@GeneratedValue
	private int idMessage;
	
	@Column
	private String message;
	
	public Messages() {
		super();
	}

	public Messages(int idMessage, String message) {
		super();
		this.idMessage = idMessage;
		this.message = message;
	}

	public int getIdMessage() {
		return idMessage;
	}

	public void setIdMessage(int idMessage) {
		this.idMessage = idMessage;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Messages [idMessage=" + idMessage + ", message=" + message + "]";
	}
	
	
}
