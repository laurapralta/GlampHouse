package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.ActivitiesDTO;
import com.dh.proyectoIntegrador.dto.ProductDTO;
import com.dh.proyectoIntegrador.services.Impl.ActivitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/activities")
@CrossOrigin
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @PostMapping()
    public ResponseEntity<ActivitiesDTO> createProduct(@RequestBody ActivitiesDTO activitiesDTO) {
        return ResponseEntity.ok(activitiesService.create(activitiesDTO));
    }

    @PutMapping()
    public ResponseEntity<ActivitiesDTO> editProduct(@RequestBody ActivitiesDTO activitiesDTO) {
        return ResponseEntity.ok(activitiesService.update(activitiesDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActivitiesDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(activitiesService.findById(id));
    }

    @GetMapping
    public ResponseEntity<Set<ActivitiesDTO>> findAll() {
        return ResponseEntity.ok(activitiesService.findAll());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        activitiesService.deleteById(id);
        return ResponseEntity.ok("deleted");

    }

    @GetMapping("/cityId/{cityId}")
    public ResponseEntity<List<ActivitiesDTO>> listActivitiesByCity(@PathVariable Long cityId) {
        List<ActivitiesDTO> activities = activitiesService.listActivitiesByCity(cityId);
        if (activities != null) {
            return ResponseEntity.ok(activities);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


}
