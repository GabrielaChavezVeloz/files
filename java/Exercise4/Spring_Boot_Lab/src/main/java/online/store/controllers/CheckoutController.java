package online.store.controllers;

import java.util.HashSet;
import java.util.Set;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import online.store.exceptions.CreditCardValidationException;
import online.store.model.CheckoutRequest;
import online.store.model.Order;
import online.store.model.Messages;
import online.store.services.CreditCardValidationService;
import online.store.services.MessageService;
import online.store.services.OrdersService;
import online.store.services.ProductsService;

@RestController
public class CheckoutController {
    private final OrdersService ordersService;
    private final ProductsService productsService;
    private final CreditCardValidationService creditCardValidationService;
    private final MessageService messageService;
    
    @Autowired
	JmsTemplate jmsTemplate;
    
    public CheckoutController(OrdersService ordersService, ProductsService productsService,
			CreditCardValidationService creditCardValidationService, MessageService messageService,
			JmsTemplate jmsTemplate) {
		super();
		this.ordersService = ordersService;
		this.productsService = productsService;
		this.creditCardValidationService = creditCardValidationService;
		this.messageService = messageService;
		this.jmsTemplate = jmsTemplate;
	}
    
    private static boolean isNullOrBlank(String input) {
        return input == null || input.isEmpty() || input.trim().length() == 0;
    }
    
    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        Set<Order> orders = new HashSet<>(checkoutRequest.getProducts().size());
        if(isNullOrBlank(checkoutRequest.getCreditCard())) {
            return new ResponseEntity<>("Credit card information is missing",
                                         HttpStatus.PAYMENT_REQUIRED);
        }
        if (isNullOrBlank(checkoutRequest.getFirstName())) {
            return new ResponseEntity<>("First name is missing", HttpStatus.BAD_REQUEST);
        }
        if (isNullOrBlank(checkoutRequest.getLastName())) {
            return new ResponseEntity<>("Last name is missing", HttpStatus.BAD_REQUEST);
        }
        creditCardValidationService.validate(checkoutRequest.getCreditCard());
        
        int totalProducts = 0;
        
        for (CheckoutRequest.ProductInfo productInfo : checkoutRequest.getProducts()) {    
            Order order = new Order(checkoutRequest.getFirstName(),
                    checkoutRequest.getLastName(),
                    checkoutRequest.getEmail(),
                    checkoutRequest.getShippingAddress(),
                    productInfo.getQuantity(),
                    productsService.getProductById(productInfo.getProductId()),
                    checkoutRequest.getCreditCard());
            orders.add(order);
            totalProducts++;
        }
        
        //send message 
        sendMessage("Order completed with " + totalProducts + " products" );
        
        ordersService.placeOrders(orders);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
    
    @ExceptionHandler({CreditCardValidationException.class})
    public ResponseEntity<String> handleCreditCardError(Exception ex) {
        System.out.println(String.format("Request to /checkout path threw an exception %s", ex.getMessage()));
        return new ResponseEntity<>("Credit card is invalid, please use another form of payment",
                HttpStatus.BAD_REQUEST);
    }
    
   
    //Message
    public String sendMessage(String message) {
    	
    	Messages messageObject = new Messages();
    	
    	//send message to queue
    	jmsTemplate.send("store_online_queue", new MessageCreator() {
    		
    		@Override
    		public Message createMessage(Session session) throws JMSException{
    			ObjectMessage object = session.createObjectMessage(message);
    			
    			return object;
    		}
    	});
    	   	
    	
    	//send message to BD
    	messageObject.setMessage(message);
    	messageService.saveMessage(messageObject);
    	
    	return message;
    }
    
}
