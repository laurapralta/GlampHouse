package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Product;
import com.dh.proyectoIntegrador.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationDTO {

    private Long id;

    private User user;

    private Product product;

    private String reservationTime;
    private LocalDate reservationStart;
    private LocalDate reservationEnd;
    private String comments;
    private boolean vaccinated;

}
