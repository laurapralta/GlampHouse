package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.ReservationDTO;
import com.dh.proyectoIntegrador.entities.Product;
import com.dh.proyectoIntegrador.entities.Reservation;
import com.dh.proyectoIntegrador.entities.User;
import com.dh.proyectoIntegrador.repositories.IProductRepository;
import com.dh.proyectoIntegrador.repositories.IReservationRepository;
import com.dh.proyectoIntegrador.repositories.IUserRepository;
import com.dh.proyectoIntegrador.services.IReservationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ReservationService implements IReservationService {


    @Autowired
    IReservationRepository reservationRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProductRepository productRepository;



    @Override // hacemos un check de que no exista una reserva en esas fechas
    public ReservationDTO create(ReservationDTO reservationDTO){//throws Exception {
       // Set<Reservation>reservations= productRepository.getById(reservationDTO.getProduct().getId()).getReservations();
     //   boolean available=true;
      //  for(Reservation r:reservations){

     //       LocalDate iDate=reservationDTO.getReservationStart();
       //     LocalDate fDate=reservationDTO.getReservationEnd();
       //     LocalDate iDateDB=r.getReservationStart();
      //      LocalDate fDateDB=r.getReservationEnd();
     //       if(iDate.equals(iDateDB)){
     //           available=false;
      //      }
      //      if(iDate.isAfter(iDateDB) && iDate.isBefore(fDateDB)) {
      //          available = false;
        //    }
        //    if(fDate.isAfter(iDateDB) && fDate.isBefore(fDateDB)) {
       //         available = false;
       //     }
       //     if(fDate.equals(fDateDB)) {
       //         available = false;
        //    }
      //  }
      //  if(!available) {
      //      throw  new Exception("ya existe una reserva en esa fecha");
     //   } else {
            reservationDTO.setUser(getUser(reservationDTO));
            reservationDTO.setProduct(getProduct(reservationDTO));

            Reservation reservation = objectMapper.convertValue(reservationDTO, Reservation.class);
            System.out.println(reservation);
            return objectMapper.convertValue(reservationRepository.save(reservation), ReservationDTO.class);
     //   }


    }




    @Override
    public ReservationDTO update(ReservationDTO reservationDTO) {
        Reservation reservation =objectMapper.convertValue(reservationDTO, Reservation.class);
        return objectMapper.convertValue(reservationRepository.save(reservation), ReservationDTO.class);
    }

    @Override
    public ReservationDTO findById(Long id) {
        Optional<Reservation> reservation= reservationRepository.findById(id);
        ReservationDTO reservationDTO = null;
        if(reservation.isPresent())
            reservationDTO= objectMapper.convertValue(reservation,ReservationDTO.class);
        return reservationDTO;
    }

    @Override
    public Set<ReservationDTO> findAll() {
        List<Reservation> reservations = reservationRepository.findAll();
        Set<ReservationDTO> reservationDtoSet = new HashSet<>();
        for (Reservation reservation : reservations) {
            reservationDtoSet.add(objectMapper.convertValue(reservation,ReservationDTO.class));
        }
        return reservationDtoSet;
    }

    @Override
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }


    @Override
    public List<ReservationDTO> findReservationByProductId(Long productId) {
        List<Reservation>reservations=reservationRepository.findReservationByProductId(productId);
        List<ReservationDTO> reservationDTOS=new ArrayList<>();
        for (Reservation reservation:reservations){
            reservationDTOS.add(objectMapper.convertValue(reservation,ReservationDTO.class));
        }
        return reservationDTOS;
    }

    @Override
    public List<ReservationDTO> findReservationsByUserId(Long userId) {
        List<Reservation>reservations=reservationRepository.findReservationsByUserId(userId);
        List<ReservationDTO> reservationDTOS=new ArrayList<>();
        for (Reservation reservation:reservations){
            reservationDTOS.add(objectMapper.convertValue(reservation,ReservationDTO.class));
        }
        return reservationDTOS;
    }

    private User getUser(ReservationDTO reservationDTO) {
        User user = userRepository.findById(reservationDTO.getUser().getId()).get();
        return user;
    }

    private Product getProduct(ReservationDTO reservationDTO) {
        Product product = productRepository.findById(reservationDTO.getProduct().getId()).get();
        return product;
    }



}
