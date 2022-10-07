package com.dh.proyectoIntegrador.services.Impl;

import com.dh.proyectoIntegrador.dto.CategoryDTO;
import com.dh.proyectoIntegrador.entities.Category;
import com.dh.proyectoIntegrador.repositories.ICategoryRepository;
import com.dh.proyectoIntegrador.services.ICategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoryService implements ICategoryService {

    @Autowired

    private ICategoryRepository categoryRepository;

    @Autowired

    private ObjectMapper objectMapper;


    @Override
    public CategoryDTO create(CategoryDTO categoryDTO) {
        Category category = objectMapper.convertValue(categoryDTO, Category.class);
        return objectMapper.convertValue(categoryRepository.save(category),CategoryDTO.class);
    }

    @Override
    public CategoryDTO update(CategoryDTO categoryDTO) {
        Category category = objectMapper.convertValue(categoryDTO, Category.class);
        return objectMapper.convertValue(categoryRepository.save(category),CategoryDTO.class);
    }

    @Override
    public CategoryDTO findById(Long id) {
        Optional<Category> category =categoryRepository.findById(id);
        CategoryDTO categoryDTO=null;
        if(category.isPresent())
            categoryDTO= objectMapper.convertValue(category,CategoryDTO.class);
        return categoryDTO;
    }

    @Override
    public Set<CategoryDTO> findAll() {
        List<Category> categories = categoryRepository.findAllInOrder();
        Set <CategoryDTO> categoryDTOS = new HashSet<>();
        for (Category category: categories){
            categoryDTOS.add(objectMapper.convertValue(category, CategoryDTO.class));
        }
        return categoryDTOS;
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);

    }
}
