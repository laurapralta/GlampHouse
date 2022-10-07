package com.dh.proyectoIntegrador.configuration;

import org.springframework.http.HttpStatus;

public class GlampingAppException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private HttpStatus httpStatus;
    private String errorMessage;

    public GlampingAppException(HttpStatus httpStatus, String errorMessage) {
        super();
        this.httpStatus = httpStatus;
        this.errorMessage = errorMessage;
    }

    public GlampingAppException(String message) {
        super(message);
    }
}
