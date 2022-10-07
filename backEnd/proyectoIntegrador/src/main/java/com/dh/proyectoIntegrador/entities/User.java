package com.dh.proyectoIntegrador.entities;


import com.dh.proyectoIntegrador.dto.UserDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler"})
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @SequenceGenerator(name = "user_glamphouse_sequence", sequenceName = "user_kabook_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String lastName;

    @Column(unique = true)
    private String email;


    private String password;

    private Boolean active;

    private String city;

    private String verificationCode;




    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))

    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private Set<Reservation> reservation = new HashSet<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Favorite> favorites;

    public UserDTO toDTO(){
        UserDTO userDTO= new UserDTO();
        userDTO.setId(id);
        userDTO.setName(name);
        userDTO.setLastName(lastName);
        userDTO.setEmail(email);
        userDTO.setPassword(password);
        userDTO.setRoles(roles);
        userDTO.setActive(active);
        userDTO.setVerificationCode(verificationCode);
        userDTO.setReservation(reservation);
        return userDTO;
    }



}
