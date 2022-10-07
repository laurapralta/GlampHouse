 package com.dh.proyectoIntegrador.entities;

 import com.fasterxml.jackson.annotation.JsonIgnore;
 import lombok.AllArgsConstructor;
 import lombok.Getter;
 import lombok.NoArgsConstructor;
 import lombok.Setter;

 import javax.persistence.*;

 @Entity
 @AllArgsConstructor
 @NoArgsConstructor
 @Getter
 @Setter
 @Table
public class Rating {

    @Id
    @SequenceGenerator(name = "stars_sequence", sequenceName = "stars_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double score;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id")
    @JsonIgnore
    private Product product;



}

