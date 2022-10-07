package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Activities;
import com.dh.proyectoIntegrador.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IActivitiesRepository extends JpaRepository<Activities,Long> {

    @Query(value = "SELECT * FROM activities a WHERE a.cities_id = ?1", nativeQuery = true)
    List<Activities> listActivitiesByCity(Long cityId);

}
