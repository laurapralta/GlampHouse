package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ImageDTO {

    private Long id;

    private String titleImage;

    private String descriptionImage;

    private String urlImage;

    private Product product;


}
