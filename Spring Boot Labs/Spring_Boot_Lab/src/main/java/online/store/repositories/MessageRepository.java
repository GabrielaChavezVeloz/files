package online.store.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import online.store.model.Messages;

public interface MessageRepository extends JpaRepository<Messages, Integer>{

}
