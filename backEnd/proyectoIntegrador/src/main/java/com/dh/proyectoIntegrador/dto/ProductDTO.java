package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDTO {

private Long id;
private String name;
private String description;
private Double longitude;
private Double latitude;
private String rules;
private String cancellation;
private String security;
private Category category;
private List<Feature>features;
private List<Image> images;
private City city;
private Integer price;
private List<Reservation> reservations = new ArrayList<>();






}
