package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Category;
import com.dh.proyectoIntegrador.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Long> {
   @Query(value = "SELECT * FROM category ORDER BY category.id DESC",nativeQuery = true)
    List<Category> findAllInOrder();




}
