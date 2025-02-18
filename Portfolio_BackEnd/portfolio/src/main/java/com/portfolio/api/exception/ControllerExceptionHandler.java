package com.portfolio.api.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(EmailException.class)
	private ResponseEntity<Object> handleEmailException(EmailException ex) {
		return ResponseEntity.unprocessableEntity().body(ex.getMessage());
	}

	@ExceptionHandler(PasswordException.class)
	private ResponseEntity<Object> handleSenhaException(PasswordException ex) {
		return ResponseEntity.unprocessableEntity().body(ex.getMessage());
	}
	@ExceptionHandler(NotFoundException.class)
	private ResponseEntity<Object> handleNotFoundException(NotFoundException ex) {
		return ResponseEntity.unprocessableEntity().body(ex.getMessage());
	}

	
}
