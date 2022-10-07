package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Reservation;
import com.dh.proyectoIntegrador.entities.Role;
import com.dh.proyectoIntegrador.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private String name;

    private String lastName;

    private String email;

    private String password;

    private Boolean active;

    private Set<Role> roles = new HashSet<>();

    private String verificationCode;

    private Set<Reservation> reservation = new HashSet<>();

    public User toEntity(){
        User user= new User();
        user.setId(id);
        user.setName(name);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setRoles(roles);
        user.setActive(active);
        user.setVerificationCode(verificationCode);
        user.setReservation(reservation);
        return user;
    }


}



