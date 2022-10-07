package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservationRepository extends JpaRepository<Reservation,Long> {


    @Query(value = "SELECT * FROM reservation WHERE product_id = ?1", nativeQuery = true)
    List<Reservation> findReservationByProductId(Long productId);


    @Query(value = "SELECT * FROM reservation WHERE user_id = ?1", nativeQuery = true)
    List<Reservation> findReservationsByUserId(Long userId);



}
