package com.dh.proyectoIntegrador.services;

import com.dh.proyectoIntegrador.dto.ActivitiesDTO;
import com.dh.proyectoIntegrador.entities.Activities;

import java.util.List;

public interface IActivitiesService extends ICRUDService<ActivitiesDTO>{

    List<ActivitiesDTO> listActivitiesByCity(Long cityId);
}
