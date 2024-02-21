package online.store.services;

import org.springframework.stereotype.Service;

import online.store.model.Messages;
import online.store.repositories.MessageRepository;

@Service
public class MessageService {

	private final MessageRepository messageRepository;

	public MessageService(MessageRepository messageRepository) {
		super();
		this.messageRepository = messageRepository;
	}
	
	public void saveMessage(Messages message) {
		messageRepository.save(message);
	}
}
