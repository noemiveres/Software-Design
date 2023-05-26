package com.utcn.demo.factory;

import com.utcn.demo.entity.DTO.UserDTO;
import com.utcn.demo.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserFactory {
    public static User create(UserDTO userDTO, PasswordEncoder passwordEncoder) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userDTO.buildUser(userDTO);
    }
}
