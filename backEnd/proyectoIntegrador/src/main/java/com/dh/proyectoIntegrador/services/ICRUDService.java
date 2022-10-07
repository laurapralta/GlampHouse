package com.dh.proyectoIntegrador.services;

import java.util.Set;

public interface ICRUDService <T>{

    T create (T t) throws Exception;

    T update(T t);

    T findById(Long id);

    Set<T> findAll();

    void deleteById(Long id);



}
