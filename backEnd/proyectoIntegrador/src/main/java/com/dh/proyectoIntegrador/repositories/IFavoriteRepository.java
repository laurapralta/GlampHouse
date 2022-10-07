package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFavoriteRepository extends JpaRepository<Favorite, Long> {


    @Query(value = "SELECT * FROM favorite WHERE user_id = ?1", nativeQuery = true)
    List<Favorite> findFavoritesByUserId(Long userId);

}
