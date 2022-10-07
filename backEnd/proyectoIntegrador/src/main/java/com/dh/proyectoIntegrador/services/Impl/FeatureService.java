package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.CategoryDTO;
import com.dh.proyectoIntegrador.dto.FeatureDTO;
import com.dh.proyectoIntegrador.entities.Category;
import com.dh.proyectoIntegrador.entities.Feature;
import com.dh.proyectoIntegrador.repositories.IFeatureRepository;
import com.dh.proyectoIntegrador.services.IFeatureService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class FeatureService implements IFeatureService {

    @Autowired
    private IFeatureRepository featureRepository;

    @Autowired
    private ObjectMapper objectMapper;




    @Override
    public FeatureDTO create(FeatureDTO featureDTO) {
        Feature feature = objectMapper.convertValue(featureDTO, Feature.class);
        return objectMapper.convertValue(featureRepository.save(feature), FeatureDTO.class);
    }

    @Override
    public FeatureDTO update(FeatureDTO featureDTO) {
        Feature feature = objectMapper.convertValue(featureDTO, Feature.class);
        return objectMapper.convertValue(featureRepository.save(feature), FeatureDTO.class);
    }

    @Override
    public FeatureDTO findById(Long id) {
        Optional<Feature> feature = featureRepository.findById(id);
        FeatureDTO featureDTO = null;
        if(feature.isPresent())
            featureDTO =objectMapper.convertValue(feature, FeatureDTO.class);
        return featureDTO;
    }

    @Override
    public Set<FeatureDTO> findAll() {
        List<Feature> features = featureRepository.findAll();
        Set <FeatureDTO> featureDTOS = new HashSet<>();
        for (Feature feature: features){
            featureDTOS.add(objectMapper.convertValue(feature, FeatureDTO.class));
        }
        return featureDTOS;
    }

    @Override
    public void deleteById(Long id) {
        featureRepository.deleteById(id);

    }
}
