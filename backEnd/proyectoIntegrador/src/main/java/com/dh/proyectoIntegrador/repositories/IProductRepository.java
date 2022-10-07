package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository <Product, Long> {
    //creamos query especifica para listar segun ciudad

    @Query(value = "SELECT * FROM product p WHERE p.city_id = ?1", nativeQuery = true)
    List<Product> listProductsByCity(Long cityId);

    // segunda query especifica, con categorias.
    @Query(value = "SELECT * FROM product p WHERE p.category_id= ?1", nativeQuery = true)
    List<Product> listProductsByCategory(Long categoryId);

    @Query(value = "SELECT * FROM product p ORDER BY RAND()", nativeQuery = true)
    List<Product>listProductsDisordered();

    @Query(value= "SELECT * FROM product p JOIN city ON city.id = p.city_id WHERE city.name LIKE ?1", nativeQuery = true)
    List <Product>listProductByCityName(String name);

    @Query(value = "SELECT * FROM product p JOIN city ON city.id = p.city_id WHERE category_id = ?1 AND city_id = ?2", nativeQuery = true )
    List<Product> findProductsByCategoryAndCity(Long categoryId, Long cityId);

    @Query(value = "SELECT * FROM product p JOIN product_features ON product_id = p.id WHERE feature_id= ?1", nativeQuery = true)
    List<Product> listProductsByFeature(Long featureId);


    @Query(value= "{call getProductsBycityAndDates(?1, ?2, ?3)}", nativeQuery = true)
   List<Product> findByCityAndDate(Long cityid, LocalDate reservationStart, LocalDate reservationEnd);

     //Agregar query ciudad categoria y fecha +  categoria y fecha- agregar en service + implementacion

    @Query(value= "{call filterCategoryAndDates(?1, ?2, ?3)}", nativeQuery = true)
    List<Product>findByCategoryAndDate(Long categoryId, LocalDate reservationStart, LocalDate reservationEnd);

   @Query(value="{call getProductsByCityCategoriesAndDates(?1,?2,?3,?4)}",nativeQuery=true)
   List<Product> findByCityAndDateAndCategory(Long categoryId, Long cityId, LocalDate reservationStart, LocalDate reservationEnd);

    @Query(value= "{call getProductByDates(?1,?2)}", nativeQuery = true)
    List<Product> findByDate(LocalDate reservationStart, LocalDate reservationEnd);




}