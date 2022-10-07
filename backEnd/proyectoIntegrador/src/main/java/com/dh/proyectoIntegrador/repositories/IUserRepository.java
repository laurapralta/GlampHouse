package com.dh.proyectoIntegrador.repositories;

import com.dh.proyectoIntegrador.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    //query especifica la dejo para filtrar por mail mas adelante
    @Query (value = "SELECT * FROM user u WHERE u.email = ?1",nativeQuery = true)
    Optional<User> findByEmail(String email);

    @Query(value="{call findByVerificationCode(?1)}",nativeQuery = true)
    User findByVerificationCode(String code);

    @Query(value = "SELECT * FROM user ORDER BY user.id",nativeQuery = true)
    List<User> findAll();


}

