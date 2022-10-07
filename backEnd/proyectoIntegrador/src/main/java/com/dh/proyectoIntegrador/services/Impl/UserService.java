package com.dh.proyectoIntegrador.services.Impl;
import com.dh.proyectoIntegrador.Security.MyUserDetailService;
import com.dh.proyectoIntegrador.Security.util.JwtUtil;
import com.dh.proyectoIntegrador.dto.AuthenticationRequestDTO;
import com.dh.proyectoIntegrador.dto.ReservationDTO;
import com.dh.proyectoIntegrador.dto.UserDTO;
import com.dh.proyectoIntegrador.entities.Reservation;
import com.dh.proyectoIntegrador.entities.User;
import com.dh.proyectoIntegrador.repositories.IRoleRepository;
import com.dh.proyectoIntegrador.repositories.IUserRepository;
import com.dh.proyectoIntegrador.services.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.*;


@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleRepository iRoleRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    private MyUserDetailService myUserDetailService;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private Configuration configuration;




    @Override
    public UserDTO findByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        UserDTO userDTO = null;
        if (user.isPresent())
            userDTO = objectMapper.convertValue(user, UserDTO.class);
        return userDTO;

    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = userDTO.toEntity();
        user.setName(user.getName());
        user.setLastName(user.getLastName());
        user.setEmail(user.getEmail());
        user.setRoles(Collections.singleton(iRoleRepository.findByName("USER").orElse(null)));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(false);
        String verificationCode = RandomString.make(64);
        user.setVerificationCode(verificationCode);
        User user1= userRepository.save(user);
        return user1.toDTO();

    }

    public void sendVerificationEmail(UserDTO user, String siteURL,Map<String, Object> model) throws MessagingException, IOException, TemplateException {
        String subject = "confirmá tu cuenta";
        String senderName = "Glamphouse Team";
        String verifyURL = siteURL + "/users/verify/" + user.getVerificationCode();
        model.put("verification",verifyURL);

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        Template template= configuration.getTemplate("email-template.ftl");
        String html= FreeMarkerTemplateUtils.processTemplateIntoString(template,model);
        helper.setFrom("info@glamphouse.com.ar", senderName);
        helper.setTo(user.getEmail());
        helper.setSubject(subject);
        helper.setText(html, true);

        javaMailSender.send(message);
    }





    @Transactional
    public Boolean verify(String verificationCode) {
        User user = userRepository.findByVerificationCode(verificationCode);
        if (user == null || user.getActive() || !user.getVerificationCode().equals(verificationCode)) {
            return false;
        } else {
            user.setActive(true);
            userRepository.save(user);
            return true;
        }


    }

    public Set<UserDTO> findAll() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> userDtoSet = new HashSet<>();
        for (User user : users) {
            userDtoSet.add(objectMapper.convertValue(user,UserDTO.class));
        }
        return userDtoSet;
    }







}