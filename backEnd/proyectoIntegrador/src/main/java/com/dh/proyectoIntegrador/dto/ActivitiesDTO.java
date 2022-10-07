package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.City;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ActivitiesDTO {
    private Long id;

    private String title;

    private String description;

    private String image;

    private String webSite;

    private String longitude;

    private String latitude;

    private City city;
}
