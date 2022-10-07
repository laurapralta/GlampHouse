package com.dh.proyectoIntegrador.Security.util;

import com.dh.proyectoIntegrador.configuration.GlampingAppException;
import com.dh.proyectoIntegrador.dto.UserDTO;
import com.dh.proyectoIntegrador.dto.UserReduxDTO;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${app.jwt-secret}")
    private String jwtSecret;

    @Value("${app.jwt-expiration-milliseconds}")
    private int jwtExpirationInMs;

    public String generateToken(Authentication authentication, UserReduxDTO user){
        String username = authentication.getName();
        Date fechaActual = new Date();
        Date fechaExpiracion = new Date(fechaActual.getTime() + jwtExpirationInMs);

        String token = Jwts.builder().setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(fechaExpiracion)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .claim("id", user.getId())
                .claim("nombre", user.getName())
                .claim("apellido",user.getLastName())
                .claim("rol", user.getRoles())
                .compact();

        return token;
    }


    private String SECRET_KEY = "amazonasGuerreras";

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private String createToken(Map<String,Object>claims,String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+20*60*1000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public String getUserFromJWT(String token){
        //obtener claims(usuario,roles,fechas) del token
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }


    public boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            throw  new GlampingAppException(HttpStatus.BAD_REQUEST, "Invalid JWT signature");
        }
        catch (MalformedJwtException ex){
            throw  new GlampingAppException(HttpStatus.BAD_REQUEST, "Invalid JWT token");
        }
        catch (ExpiredJwtException ex){
            throw new GlampingAppException(HttpStatus.BAD_REQUEST, "Expired JWT token");
        }
        catch (UnsupportedJwtException ex){
            throw  new GlampingAppException(HttpStatus.BAD_REQUEST, "Unsupported JWT token");
        }
        catch (IllegalArgumentException ex){
            throw  new GlampingAppException(HttpStatus.BAD_REQUEST, "JWT claims string is empty.");
        }




    }



}

