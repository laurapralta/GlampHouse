package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.FavoriteDTO;
import com.dh.proyectoIntegrador.dto.ReservationDTO;
import com.dh.proyectoIntegrador.services.Impl.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/favorite")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/create")
    public ResponseEntity<FavoriteDTO>create(@RequestBody FavoriteDTO favoriteDTO){
        FavoriteDTO favoriteDTO1=favoriteService.create(favoriteDTO);
        return new ResponseEntity<>(favoriteDTO1, HttpStatus.CREATED);
    }

    @DeleteMapping("/product/{productId}/user/{userId}")
    public ResponseEntity<String>deleteByProductId(@PathVariable Long productId, @PathVariable Long userId){
        favoriteService.deleteByProductId(productId,userId);
        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/listAll/user/{id}")
    public ResponseEntity<List<FavoriteDTO>> findFavoritesByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(favoriteService.findFavoritesByUserId(id), HttpStatus.OK);
    }

    @GetMapping("/listAll")
    public ResponseEntity<Collection<FavoriteDTO>> findAll() {
        return ResponseEntity.ok(favoriteService.findAll());
    }





}
