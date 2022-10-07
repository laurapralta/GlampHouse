package com.dh.proyectoIntegrador.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "product")
@Getter
@Setter
//investigar
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler"})
@AllArgsConstructor
@NoArgsConstructor

public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence" , sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column
    private String name;


    @Column
    private String description;


    @Column
    private Double longitude;


    @Column
    private Double latitude;


    @Column
    private Integer price;

    @Column (columnDefinition = "LONGTEXT")
    private String rules;

    @Column (columnDefinition = "LONGTEXT")
    private String cancellation;

    @Column (columnDefinition = "LONGTEXT")
    private String security;



    // Muchos productos en una categoria
    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;


    // Muchos prod en una ciudad.
    @ManyToOne
    @JoinColumn(name="city_id")
    private City city;


    //HACER RELACION PRODUCTOS CARACTERISTICAS
    @ManyToMany
    @JoinTable(
            name="product_features",
            joinColumns = @JoinColumn(name="product_id"),
            inverseJoinColumns = @JoinColumn(name="feature_id"))
    private Set<Feature> features;




    //Un producto muchas imagenes
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Set<Image> images;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private List<Policy> policies;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private Set<Reservation> reservations = new HashSet<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Favorite> favorites ;




}
