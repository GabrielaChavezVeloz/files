1.Init docker containers
	docker-compose -f docker-compose-final-project.yml up -d

Start the service projects in this order:
1. user-service app http://localhost:8081/swagger-ui/index.html
2. course-service app http://localhost:8082/swagger-ui/index.html
3. cart-service app http://localhost:8083/swagger-ui/index.html
4. order-service app http://localhost:8084/swagger-ui/index.html

