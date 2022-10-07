package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.CityDTO;
import com.dh.proyectoIntegrador.services.Impl.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/cities")

public class CityController {

    @Autowired
    private CityService cityServiceImpl;

// trabajo metodo ciudades
    @PostMapping()
    public ResponseEntity<CityDTO> createCity (@RequestBody CityDTO cityDTO) {
        return ResponseEntity.ok(cityServiceImpl.create(cityDTO));
    }

    @PutMapping()
    public ResponseEntity<CityDTO> editCity(@RequestBody CityDTO cityDTO){
        return ResponseEntity.ok(cityServiceImpl.update(cityDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id){
        cityServiceImpl.deleteById(id);
        return ResponseEntity.ok("deleted");
    }


    @GetMapping("/{id}")
    public ResponseEntity<CityDTO> getCityById(@PathVariable Long id){
        return ResponseEntity.ok(cityServiceImpl.findById(id));
    }


    @GetMapping
    public ResponseEntity<Set<CityDTO>> listAllTheCities(){
        return ResponseEntity.ok(cityServiceImpl.findAll());
    }
}

