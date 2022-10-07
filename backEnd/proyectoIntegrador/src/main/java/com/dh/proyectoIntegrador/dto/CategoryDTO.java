package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class CategoryDTO {


    private Long id;
    private String title;
    private String description;
    private String imgUrl;
    private Set<Product> products;


}
