package com.dh.proyectoIntegrador.Security;

import com.dh.proyectoIntegrador.entities.Role;
import com.dh.proyectoIntegrador.entities.User;
import com.dh.proyectoIntegrador.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IUserRepository userRepository;



    @Override

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("Usuario no encontrado con el email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.get().getEmail(), user.get().getPassword(), mapRoles(user.get().getRoles()));
    }

    //listaDeRoles//

    private Collection<? extends GrantedAuthority> mapRoles(Set<Role> roles){
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
        }




    }

