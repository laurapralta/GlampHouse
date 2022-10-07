package com.dh.proyectoIntegrador.controllers;

import com.dh.proyectoIntegrador.dto.CategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import com.dh.proyectoIntegrador.services.Impl.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/categories")

public class CategoryController {
    @Autowired
    private CategoryService categoryServiceImpl;

    @PostMapping()
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO categoryDTO){
        return ResponseEntity.ok(categoryServiceImpl.create(categoryDTO));
    }

    @PutMapping()
    public ResponseEntity<CategoryDTO> editCategory(@RequestBody CategoryDTO categoryDTO){
        return ResponseEntity.ok(categoryServiceImpl.update(categoryDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id){
        categoryServiceImpl.deleteById(id);
        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/listAll")
    public ResponseEntity<Set<CategoryDTO>> listAllCategories(){
        return ResponseEntity.ok(categoryServiceImpl.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable Long id){
        return ResponseEntity.ok(categoryServiceImpl.findById(id));


    }
}
