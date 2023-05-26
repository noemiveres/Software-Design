package com.utcn.demo.service.security;

import com.utcn.demo.entity.DTO.UserDTO;
import com.utcn.demo.entity.User;
import com.utcn.demo.factory.UserFactory;
import com.utcn.demo.jwt.JwtUtils;
import com.utcn.demo.repository.UserRepository;
import com.utcn.demo.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    public void register(UserDTO userDTO){
        User user = UserFactory.create(userDTO,passwordEncoder);
        userRepository.save(user);
    }

    public User getCurrentUser(HttpServletRequest request) {
        String jwt = parseJwt(request.getHeader("Authorization"));

        if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
            String email = jwtUtils.getEmailFromJwtToken(jwt);
            return userService.loadUserByEmail(email);
        }

        return null;
    }

    private String parseJwt(String header) {
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }

        return null;
    }


}
