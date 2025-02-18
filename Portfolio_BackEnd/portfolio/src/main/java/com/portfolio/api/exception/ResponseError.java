package com.portfolio.api.exception;

import java.time.LocalDateTime;
import java.util.List;

public class ResponseError {

	private Integer status;
	private String title;
	private LocalDateTime DateTime;
	private List<String> errors;

	public ResponseError(Integer status, String title, LocalDateTime dateTime, List<String> errors) {
		super();
		this.status = status;
		this.title = title;
		DateTime = dateTime;
		this.errors = errors;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getTitulo() {
		return title;
	}

	public void setTitulo(String title) {
		this.title = title;
	}

	public LocalDateTime getDataHora() {
		return DateTime;
	}

	public void setDataHora(LocalDateTime DateTime) {
		this.DateTime = DateTime;
	}

	public List<String> getErros() {
		return errors;
	}

	public void setErros(List<String> errors) {
		this.errors = errors;
	}

}
