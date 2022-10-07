package com.dh.proyectoIntegrador.controllers;
import com.dh.proyectoIntegrador.Security.MyUserDetailService;
import com.dh.proyectoIntegrador.Security.util.JwtUtil;
import com.dh.proyectoIntegrador.configuration.NotFoundException;
import com.dh.proyectoIntegrador.configuration.UnauthorizedException;
import com.dh.proyectoIntegrador.dto.*;
import com.dh.proyectoIntegrador.entities.User;
import com.dh.proyectoIntegrador.repositories.IUserRepository;
import com.dh.proyectoIntegrador.services.Impl.UserService;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailService userDetailService;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser( @RequestBody UserDTO userDTO, Map<String, Object> model) throws MessagingException, IOException, TemplateException {
        UserDTO userDTO1= userService.createUser(userDTO);
        String url = "http://13.59.130.220:8080";

        model.put("name",userDTO.getName() +" "+userDTO.getLastName() );
        userService.sendVerificationEmail(userDTO1, url,model);
        return new ResponseEntity<>("User registered", HttpStatus.CREATED);
    }


    @GetMapping("/verify/{code}")
    public ResponseEntity<?> verifyAccount(@PathVariable("code") String code){
        if(userService.verify(code)) {
            return new ResponseEntity<>("Cuenta verificada",HttpStatus.OK);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Code not valid");
        }
    }

    @GetMapping("/listAll")
    public Collection<UserDTO> findAll() {
        return userService.findAll();
    }




    @PostMapping("/login")
   public ResponseEntity<AuthenticationResponse>userAuthentication(@RequestBody AuthenticationRequestDTO authUserDto) {
        Optional<User> userEmail= iUserRepository.findByEmail(authUserDto.getEmail());
        if (userEmail.get().getActive()) {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authUserDto.getEmail(), authUserDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserDTO user1 = userService.findByEmail(authUserDto.getEmail());
            UserReduxDTO user=new UserReduxDTO(user1.getId(), user1.getName(), user1.getLastName(),user1.getRoles());
            String jwt = jwtUtil.generateToken(authentication, user);
            return ResponseEntity.ok(new AuthenticationResponse(jwt));
        }
        throw new NotFoundException("please verificate your account");
    }

// testeo automatico
        private void authenticate(String username, String password) throws Exception {
            try {
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            } catch (DisabledException e) {
                throw new Exception("USER_DISABLED", e);
            } catch (BadCredentialsException e) {
                throw new Exception("INVALID_CREDENTIALS", e);
            }
        }




    }












