package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.configuration.EmailSenderService;
import com.dh.proyectoIntegrador.dto.ProductDTO;
import com.dh.proyectoIntegrador.dto.ReservationDTO;
import com.dh.proyectoIntegrador.services.Impl.ProductService;
import com.dh.proyectoIntegrador.services.Impl.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @Autowired
    EmailSenderService emailSenderService;

    @Autowired
    ProductService productService;


    @GetMapping("/{id}")
    public ResponseEntity<ReservationDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(reservationService.findById(id));
    }

    @GetMapping("/listAll")
    public ResponseEntity <Set<ReservationDTO>> findAll() {
        return ResponseEntity.ok(reservationService.findAll());
    }

    @DeleteMapping("/cancellation/{id}")
    public ResponseEntity<String>  deleteById(@PathVariable Long id) {
        reservationService.deleteById(id);
        return ResponseEntity.ok("deleted");

    }

    @PutMapping("/update")
    public ResponseEntity<ReservationDTO> update(@RequestBody ReservationDTO reservationDTO) {
        return new ResponseEntity<>(reservationService.update(reservationDTO), HttpStatus.OK);
    }

    @GetMapping("/listAll/product/{id}")
    public ResponseEntity<List<ReservationDTO>> findReservationByProductId(@PathVariable("id") Long id){
        return new ResponseEntity<>(reservationService.findReservationByProductId(id), HttpStatus.OK);
    }

    @GetMapping("/listAll/user/{id}")
    public ResponseEntity<List<ReservationDTO>> findReservationsByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(reservationService.findReservationsByUserId(id), HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<ReservationDTO> create(@RequestBody ReservationDTO reservationDTO)throws Exception{
        ReservationDTO reservationDTO1=reservationService.create(reservationDTO);
        return new ResponseEntity<>(reservationDTO1,HttpStatus.CREATED);

    }







}
