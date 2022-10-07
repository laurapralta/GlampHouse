package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FeatureDTO {

    private Long id;
    private String name;
    private String icon;
    private List<Product> products;

}
