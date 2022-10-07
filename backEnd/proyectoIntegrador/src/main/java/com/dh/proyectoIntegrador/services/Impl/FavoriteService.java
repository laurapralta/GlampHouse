package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.CategoryDTO;
import com.dh.proyectoIntegrador.dto.FavoriteDTO;
import com.dh.proyectoIntegrador.entities.Category;
import com.dh.proyectoIntegrador.entities.Favorite;
import com.dh.proyectoIntegrador.repositories.IFavoriteRepository;
import com.dh.proyectoIntegrador.services.IFavoriteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class FavoriteService implements IFavoriteService {


    @Autowired
    private IFavoriteRepository favoriteRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public FavoriteDTO create(FavoriteDTO favoriteDTO) {
        Favorite favorite = objectMapper.convertValue(favoriteDTO, Favorite.class);
        return objectMapper.convertValue(favoriteRepository.save(favorite), FavoriteDTO.class);
    }

    @Override
    public FavoriteDTO update(FavoriteDTO favoriteDTO) {
        return null;
    }

    @Override
    public FavoriteDTO findById(Long id) {
        return null;
    }

    @Override
    public Set<FavoriteDTO> findAll() {
        List<Favorite> favorites = favoriteRepository.findAll();
        Set<FavoriteDTO> favoriteDTOS = new HashSet<>();
        for (Favorite favorite : favorites) {
            favoriteDTOS.add(objectMapper.convertValue(favorite, FavoriteDTO.class));
        }
        return favoriteDTOS;
    }


    @Override
    public void deleteById(Long id) {
        favoriteRepository.deleteById(id);

    }


    @Override
    public List<FavoriteDTO> findFavoritesByUserId(Long userId) {
        List<Favorite> favorites = favoriteRepository.findFavoritesByUserId(userId);
        List<FavoriteDTO> favoriteDTOS = new ArrayList<>();
        for (Favorite favorite : favorites) {
            favoriteDTOS.add(objectMapper.convertValue(favorite, FavoriteDTO.class));
        }
        return favoriteDTOS;
    }

    @Override
    public void deleteByProductId(Long productId, Long userId) {
        List<Favorite> favorites = favoriteRepository.findAll();
        for (Favorite favorite : favorites) {
            if (favorite.getProduct().getId().equals(productId) && favorite.getUser().getId().equals(userId))
                favoriteRepository.deleteById(favorite.getId());
        }
    }
}