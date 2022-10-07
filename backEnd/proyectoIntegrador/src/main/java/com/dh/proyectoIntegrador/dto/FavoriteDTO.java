package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Product;
import com.dh.proyectoIntegrador.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteDTO {

    private Long id;
    private Product product;
    private User user;
}
