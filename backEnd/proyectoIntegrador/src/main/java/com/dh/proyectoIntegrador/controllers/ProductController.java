
package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.ProductDTO;
import com.dh.proyectoIntegrador.services.Impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {


    @Autowired
    private ProductService productServiceImpl;

    @PostMapping()
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productServiceImpl.create(productDTO));
    }

    @PutMapping()
    public ResponseEntity<ProductDTO> editProduct(@RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productServiceImpl.update(productDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(productServiceImpl.findById(id));
    }

    @GetMapping
    public ResponseEntity<Set<ProductDTO>> findAll() {
        return ResponseEntity.ok(productServiceImpl.findAll());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        productServiceImpl.deleteById(id);
        return ResponseEntity.ok("deleted");

    }

    //Este es el metodo que me llevó mucho tiempo hacer, nota para no olvidarme de explicarlo
    @GetMapping("/page")
    public ResponseEntity<List<ProductDTO>> listProductsDisordered() {
        return ResponseEntity.ok(productServiceImpl.listProductsDisordered());
    }

    @GetMapping("/categoryId/{categoryId}")
    public ResponseEntity<List<ProductDTO>> listProductsByCategory(@PathVariable Long categoryId) {
        List<ProductDTO> products = productServiceImpl.listProductsByCategory(categoryId);
        if (products != null) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


    @GetMapping("/cities/{cityId}")
    public ResponseEntity<List<ProductDTO>> listProductByCityId(@PathVariable Long cityId) {
        return ResponseEntity.ok(productServiceImpl.listProductByCity(cityId));
    }

    @GetMapping("/cityName/{cityName}")
    public ResponseEntity<List<ProductDTO>> listProductByCityName(@PathVariable String cityName) {
        return ResponseEntity.ok(productServiceImpl.listProductByCityName(cityName));
    }

    @GetMapping("/category/{id}/city/{cityId}")
    public ResponseEntity<List<ProductDTO>> findProductsByCategoryAndCity(@PathVariable Long id, @PathVariable Long cityId) {
        return ResponseEntity.ok(productServiceImpl.findProductsByCategoryAndCity(id, cityId));
    }

    //testeo exitoso
    @GetMapping("/features/{featureId}")
    public ResponseEntity<List<ProductDTO>> listProductByFeatureId(@PathVariable Long featureId) {
        return ResponseEntity.ok(productServiceImpl.listProductsByFeature(featureId));
    }


    @GetMapping("/city/{cityId}/{reservationStart}/{reservationEnd}")
    public ResponseEntity<List<ProductDTO>> findByCityAndDate(@PathVariable("cityId") Long cityId,
                                                              @PathVariable("reservationStart") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationStart,
                                                              @PathVariable("reservationEnd") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationEnd) {
        return ResponseEntity.ok(productServiceImpl.findByCityAndDate(cityId, reservationStart, reservationEnd));
    }


    //testeo hecho
    @GetMapping("/category/{categoryId}/{reservationStart}/{reservationEnd}")
    public ResponseEntity<List<ProductDTO>> findByCategoryAndDate(@PathVariable("categoryId") Long categoryId,
                                                                  @PathVariable("reservationStart") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationStart,
                                                                  @PathVariable("reservationEnd") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationEnd) {
        return ResponseEntity.ok(productServiceImpl.findByCategoryAndDate(categoryId, reservationStart, reservationEnd));
    }

    @GetMapping("/category/{categoryId}/city/{cityId}/{reservationStart}/{reservationEnd}")
    public ResponseEntity<List<ProductDTO>> findByCategoryCityAndDate(@PathVariable("categoryId") Long categoryId,
                                                                      @PathVariable("cityId") Long cityId,
                                                                      @PathVariable("reservationStart") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationStart,
                                                                      @PathVariable("reservationEnd") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationEnd) {
        return ResponseEntity.ok(productServiceImpl.findByCityAndDateAndCategory(categoryId, cityId, reservationStart, reservationEnd));
    }

    //testeo doble, hecho. comprobar pipeline que me quedó en pending
    @GetMapping("/date/{reservationStart}/{reservationEnd}")
    public ResponseEntity<List<ProductDTO>> findByDate(@PathVariable("reservationStart") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationStart,
                                                       @PathVariable("reservationEnd") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate reservationEnd) {
        return ResponseEntity.ok(productServiceImpl.findByDate(reservationStart, reservationEnd));
    }


}

