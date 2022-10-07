package com.dh.proyectoIntegrador.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "images")
@Getter
@Setter
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler"})
@AllArgsConstructor
@NoArgsConstructor

public class Image {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titleImage;

    private String descriptionImage;

    private String urlImage;

    //MUCHAS IMAGENES  un producto.
    //@ManyToOne( fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
   // @JoinColumn(name = "product_id")
   // private Product product;

}

