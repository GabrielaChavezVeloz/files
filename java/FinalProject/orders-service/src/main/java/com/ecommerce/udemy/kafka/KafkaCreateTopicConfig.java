package com.ecommerce.udemy.kafka;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.common.config.TopicConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaAdmin;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class KafkaCreateTopicConfig {

	@Bean
	public KafkaAdmin kafkaAdmin() {
		Map<String, Object> configs = new HashMap<>();
		configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
		return new KafkaAdmin(configs);
	}
	
	@Bean
	public NewTopic topicOrder() {
		//return TopicBuilder.name("t-order").partitions(1).replicas(1).build();
		
		NewTopic topic = TopicBuilder.name("t-order").partitions(1).replicas(1)
				.config(TopicConfig.RETENTION_MS_CONFIG, "300000").build();
		
		kafkaAdmin().createOrModifyTopics(topic);
		
		log.info("Topic t-order created ");
		
		return topic;
	}
}
