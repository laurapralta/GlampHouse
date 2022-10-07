package com.dh.proyectoIntegrador.Security;


import com.dh.proyectoIntegrador.Security.JWT.JwtAuthenticationEntryPoint;
import com.dh.proyectoIntegrador.Security.MyUserDetailService;
import com.dh.proyectoIntegrador.Security.filter.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration /*extends WebSecurityConfigurerAdapter */{

    @Autowired
    MyUserDetailService myUserDetailService;

    /*
     * Spring security nos pide que haya un encoder
     */


    @Bean
    public JwtRequestFilter jwtAuthenticationFilter() {
        return new JwtRequestFilter();
    }

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }





    @Bean("authenticationManager")
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }




    @Primary
    @Bean
    protected HttpSecurity  configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/users/**").permitAll()
                .antMatchers(HttpMethod.GET, "/products/**", "/categories/**"
                        , "/cities/**","/users/verify/**","/feature/**","/activities/**").permitAll()
                .antMatchers(HttpMethod.POST, "/products/**", "/categories/**"
                        , "/cities/**","/feature/**","/activities/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/products/**", "/categories/**"
                        , "/cities/**","/feature/**","/activities/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/products/**", "/categories/**"
                        , "/cities/**","/feature/**","/activities/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.POST, "/reservation/**","/favorite/**").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/reservation/**").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/reservation/**","/favorite/**").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.GET, "/reservation/listAll").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.GET, "/reservation/listAll/user/**").hasAnyAuthority("USER","ADMIN")
                .antMatchers(HttpMethod.GET, "/users/listAll/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.GET, "/favorite/listAll").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.GET, "/favorite/listAll/user/**").hasAnyAuthority("USER","ADMIN")

                //.anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return  http;
    }














}
