package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.FeatureDTO;
import com.dh.proyectoIntegrador.services.Impl.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/feature")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @GetMapping("/find/{id}")
    public ResponseEntity<FeatureDTO> findById(@PathVariable("id") Long id){
        return new ResponseEntity<>(featureService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<FeatureDTO> create(@RequestBody FeatureDTO featureDTO){
        return new ResponseEntity<>(featureService.create(featureDTO), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<FeatureDTO> update(@RequestBody FeatureDTO featureDTO){
        return new ResponseEntity<>(featureService.update(featureDTO), HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id){
        featureService.deleteById(id);
        return new ResponseEntity<>("Delete success", HttpStatus.OK);
    }

    @GetMapping("/listAll")
    public ResponseEntity<Set<FeatureDTO>> findAll(){
        return new ResponseEntity<>(featureService.findAll(), HttpStatus.OK);
    }
}
