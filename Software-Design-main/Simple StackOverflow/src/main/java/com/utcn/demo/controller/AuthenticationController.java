package com.utcn.demo.controller;

import com.utcn.demo.entity.DTO.LoginJwtDTO;
import com.utcn.demo.entity.DTO.LoginRequestDTO;
import com.utcn.demo.entity.DTO.UserDTO;
import com.utcn.demo.jwt.JwtUtils;
import com.utcn.demo.service.security.AuthenticationService;
import com.utcn.demo.service.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/register")
    void register(@RequestBody UserDTO userDTO) {
        authenticationService.register(userDTO);
    }

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<Object> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDTO.getEmail(),
                        loginRequestDTO.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        LoginJwtDTO loginJwtDTO = new LoginJwtDTO(userDetails.getEmail(), userDetails.getAuthorities().toString(),userDetails.getBanned(),jwt);
        return ResponseEntity.ok(loginJwtDTO);
    }
}
