package com.dh.proyectoIntegrador.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String jwt;
    private String tokenType = "Bearer";
    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}
