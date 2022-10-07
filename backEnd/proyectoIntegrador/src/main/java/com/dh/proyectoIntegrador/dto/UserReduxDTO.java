package com.dh.proyectoIntegrador.dto;

import com.dh.proyectoIntegrador.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserReduxDTO {
    private Long id;

    private String name;

    private String lastName;

    private Set<Role> roles = new HashSet<>();
}
