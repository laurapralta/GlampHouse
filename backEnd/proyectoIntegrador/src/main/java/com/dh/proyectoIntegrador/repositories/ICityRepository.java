package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ICityRepository extends JpaRepository<City,Long> {
}
