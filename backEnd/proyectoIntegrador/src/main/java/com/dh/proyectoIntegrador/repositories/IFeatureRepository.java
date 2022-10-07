package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature, Long> {
}
