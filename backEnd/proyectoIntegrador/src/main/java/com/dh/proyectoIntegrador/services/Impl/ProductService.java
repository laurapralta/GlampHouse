package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.ProductDTO;
import com.dh.proyectoIntegrador.entities.Product;
import com.dh.proyectoIntegrador.repositories.IProductRepository;
import com.dh.proyectoIntegrador.services.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private ObjectMapper objectMapper;


    @Override
    public ProductDTO create(ProductDTO productDTO) {
        Product product=objectMapper.convertValue(productDTO, Product.class);
        return objectMapper.convertValue(productRepository.save(product),ProductDTO.class);
    }

    @Override
    public ProductDTO update(ProductDTO productDTO) {
        Product product=objectMapper.convertValue(productDTO, Product.class);
        return objectMapper.convertValue(productRepository.save(product),ProductDTO.class);
    }

    @Override
    public ProductDTO findById(Long id) {
        Optional<Product>product=productRepository.findById(id);
        ProductDTO productDTO = null;
        if(product.isPresent())
            productDTO= objectMapper.convertValue(product,ProductDTO.class);
        return productDTO;
    }

    @Override
    public Set<ProductDTO> findAll() {
        List<Product>products=productRepository.findAll();
        Set<ProductDTO>productDTOS=new HashSet<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);

    }

    @Override
    public List<ProductDTO> listProductsDisordered() {
        List<Product>products=productRepository.listProductsDisordered();
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> listProductsByCategory(Long categoryId) {
        List<Product>products=productRepository.listProductsByCategory(categoryId);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> listProductByCity(Long cityId) {
        List<Product>products=productRepository.listProductsByCity(cityId);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> listProductByCityName(String cityName) {
        List<Product>products=productRepository.listProductByCityName(cityName);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> findProductsByCategoryAndCity(Long categoryId, Long cityId) {
        List<Product>products=productRepository.findProductsByCategoryAndCity(categoryId, cityId);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> listProductsByFeature(Long featureId) {
        List<Product>products=productRepository.listProductsByFeature(featureId);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
   public List<ProductDTO> findByCityAndDate(Long cityId, LocalDate reservationStart, LocalDate reservationEnd) {
       List<Product>products=productRepository.findByCityAndDate(cityId,reservationStart,reservationEnd);
       List<ProductDTO>productDTOS=new ArrayList<>();
       for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    //Creacion de encontrar por categoria y fecha

   @Override
    public List<ProductDTO> findByCategoryAndDate(Long categoryId, LocalDate reservationStart, LocalDate reservationEnd) {
        List<Product>products=productRepository.findByCategoryAndDate(categoryId,reservationStart,reservationEnd);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    @Override
    public List<ProductDTO> findByCityAndDateAndCategory(Long categoryId, Long cityId, LocalDate reservationStart, LocalDate reservationEnd) {
    List<Product>products=productRepository.findByCityAndDateAndCategory(categoryId, cityId, reservationStart,reservationEnd);
    List<ProductDTO>productDTOS=new ArrayList<>();
    for (Product product:products){
    productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
      }
      return productDTOS;
     }


     @Override
    public List<ProductDTO> findByDate(LocalDate reservationStart,LocalDate reservationEnd) {
        List<Product>products=productRepository.findByDate(reservationStart,reservationEnd);
        List<ProductDTO>productDTOS=new ArrayList<>();
        for (Product product:products){
            productDTOS.add(objectMapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }






}
