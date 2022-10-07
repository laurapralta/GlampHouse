package com.dh.proyectoIntegrador.services;

import com.dh.proyectoIntegrador.dto.ProductDTO;
import java.time.LocalDate;
import java.util.List;

public interface IProductService extends ICRUDService<ProductDTO>{

    List<ProductDTO> listProductsDisordered();

    List<ProductDTO> listProductsByCategory(Long categoryId);

    List <ProductDTO>listProductByCity(Long cityId);

    List <ProductDTO>listProductByCityName(String cityName);

    List <ProductDTO>findProductsByCategoryAndCity(Long categoryId, Long cityId);

    List <ProductDTO>listProductsByFeature(Long featureId);

    List<ProductDTO>findByCityAndDate(Long cityId, LocalDate reservationStart, LocalDate reservationEnd);


    // para filtrar prod por category y fecha
    List<ProductDTO>findByCategoryAndDate(Long categoryId, LocalDate reservationStart, LocalDate reservationEnd);


    List<ProductDTO>findByDate(LocalDate reservationStart, LocalDate reservationEnd);

    List<ProductDTO>findByCityAndDateAndCategory(Long categoryId, Long cityId, LocalDate reservationStart, LocalDate reservationEnd);





}
