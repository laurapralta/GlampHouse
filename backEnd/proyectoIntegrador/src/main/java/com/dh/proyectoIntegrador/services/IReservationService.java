package com.dh.proyectoIntegrador.services;

import com.dh.proyectoIntegrador.dto.ReservationDTO;

import java.util.List;

public interface IReservationService extends ICRUDService<ReservationDTO>{

    List<ReservationDTO> findReservationByProductId(Long productId);

    List<ReservationDTO> findReservationsByUserId(Long userId);




}
