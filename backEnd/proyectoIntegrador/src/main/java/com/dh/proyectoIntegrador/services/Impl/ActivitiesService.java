package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.ActivitiesDTO;
import com.dh.proyectoIntegrador.entities.Activities;
import com.dh.proyectoIntegrador.repositories.IActivitiesRepository;
import com.dh.proyectoIntegrador.services.IActivitiesService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ActivitiesService implements IActivitiesService {

    @Autowired
    private IActivitiesRepository activitiesRepository;

    @Autowired
    private ObjectMapper objectMapper;





    @Override
    public ActivitiesDTO create(ActivitiesDTO activitiesDTO) {
        Activities activities=objectMapper.convertValue(activitiesDTO, Activities.class);
        return objectMapper.convertValue(activitiesRepository.save(activities),ActivitiesDTO.class);

    }

    @Override
    public ActivitiesDTO update(ActivitiesDTO activitiesDTO) {
        Activities activities=objectMapper.convertValue(activitiesDTO, Activities.class);
        return objectMapper.convertValue(activitiesRepository.save(activities),ActivitiesDTO.class);
    }

    @Override
    public ActivitiesDTO findById(Long id) {
        Optional<Activities> product=activitiesRepository.findById(id);
        ActivitiesDTO productDTO = null;
        if(product.isPresent())
            productDTO= objectMapper.convertValue(product,ActivitiesDTO.class);
        return productDTO;
    }

    @Override
    public Set<ActivitiesDTO> findAll() {
        List<Activities>activitiesList=activitiesRepository.findAll();
        Set<ActivitiesDTO>activitiesDTOS=new HashSet<>();
        for (Activities activities:activitiesList){
            activitiesDTOS.add(objectMapper.convertValue(activities,ActivitiesDTO.class));
        }
        return activitiesDTOS;
    }

    @Override
    public void deleteById(Long id) {
        activitiesRepository.deleteById(id);

    }

    @Override
    public List<ActivitiesDTO> listActivitiesByCity(Long cityId) {
        List<Activities> activitiesList = activitiesRepository.listActivitiesByCity(cityId);
        List<ActivitiesDTO> activitiesDTOS = new ArrayList<>();
        for (Activities activities : activitiesList) {
            activitiesDTOS.add(objectMapper.convertValue(activities, ActivitiesDTO.class));
        }
        return activitiesDTOS;
    }
}
