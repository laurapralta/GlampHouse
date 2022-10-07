package com.dh.proyectoIntegrador.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
//issue de politicas - ampliar
public class PolicyDTO {

    private Long id;
    private ArrayList rules;
    private ArrayList security;
    private ArrayList cancellation;


}
