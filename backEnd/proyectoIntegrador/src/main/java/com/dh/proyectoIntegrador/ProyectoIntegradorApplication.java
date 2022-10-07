package com.dh.proyectoIntegrador;

import com.dh.proyectoIntegrador.controllers.CategoryController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com/dh/proyectoIntegrador/controllers/ CategoryController.java")
@ComponentScan(basePackages = "com/dh/proyectoIntegrador/controllers/CityController.java")
@ComponentScan(basePackages = "com/dh/proyectoIntegrador/controllers/ProductController.java")
@ComponentScan(basePackages = "com/dh/proyectoIntegrador/controllers/UserController.java")
@ComponentScan(basePackages = "com/dh/proyectoIntegrador/controllers/ReservationController.java")
@ComponentScan(basePackages = "com/dh/proyectoIntegrador/Security/SecurityConfiguration.java")


@SpringBootApplication
public class ProyectoIntegradorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoIntegradorApplication.class, args);
	}

}
