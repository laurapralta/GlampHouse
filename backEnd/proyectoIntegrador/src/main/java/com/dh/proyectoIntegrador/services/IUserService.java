package com.dh.proyectoIntegrador.services;

import com.dh.proyectoIntegrador.dto.UserDTO;

public interface IUserService {

    UserDTO findByEmail(String email);

    UserDTO createUser(UserDTO userDTO);

   //agregar mejora proximo sprint
   // UserDTO passwordUpdate(UserDTO userDTO);





}
