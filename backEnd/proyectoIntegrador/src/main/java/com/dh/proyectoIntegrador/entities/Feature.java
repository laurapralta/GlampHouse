package com.dh.proyectoIntegrador.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "features")
@Getter
@Setter
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler"})
@NoArgsConstructor
@AllArgsConstructor
public class Feature {

    @Id
    @SequenceGenerator(name = "feature_sequence" , sequenceName = "feature_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    //preguntar a rocio
    private String icon;

    @ManyToMany(mappedBy = "features")
    @JsonIgnore
    private List<Product> products;

}
