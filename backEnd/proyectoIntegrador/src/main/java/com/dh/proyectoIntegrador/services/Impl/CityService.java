package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.CityDTO;
import com.dh.proyectoIntegrador.entities.City;
import com.dh.proyectoIntegrador.repositories.ICityRepository;
import com.dh.proyectoIntegrador.services.ICityService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService implements ICityService {

    @Autowired
    private ICityRepository cityRepository;

    @Autowired
    private ObjectMapper objectMapper;


    @Override
    public CityDTO create(CityDTO cityDTO) {

        City city=objectMapper.convertValue(cityDTO, City.class);
        return objectMapper.convertValue(cityRepository.save(city),CityDTO.class);

    }

    @Override
    public CityDTO update(CityDTO cityDTO) {
        City city=objectMapper.convertValue(cityDTO, City.class);
        return objectMapper.convertValue(cityRepository.save(city),CityDTO.class);
    }

    @Override
    public CityDTO findById(Long id) {
        Optional<City> city =cityRepository.findById(id);
        CityDTO cityDTO=null;
        if(city.isPresent())
            cityDTO= objectMapper.convertValue(city,CityDTO.class);
        return cityDTO;
    }

    @Override
    public Set<CityDTO> findAll() {
        List<City> cities=cityRepository.findAll();
        Set<CityDTO>cityDTOS=new HashSet<>();
        for(City city:cities){
            cityDTOS.add(objectMapper.convertValue(city, CityDTO.class));
        }
        return cityDTOS;
    }

    @Override
    public void deleteById(Long id) {

        cityRepository.deleteById(id);

    }
}

