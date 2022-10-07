package com.dh.proyectoIntegrador.services;

import com.dh.proyectoIntegrador.dto.FavoriteDTO;

import java.util.List;

public interface IFavoriteService extends ICRUDService<FavoriteDTO>{

    List<FavoriteDTO> findFavoritesByUserId(Long userId);

    void deleteByProductId(Long productId, Long userId);


}
