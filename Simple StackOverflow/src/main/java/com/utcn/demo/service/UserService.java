package com.utcn.demo.service;

import com.utcn.demo.entity.User;
import com.utcn.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public List<User> retrieveUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User retrieveUserById(Long userId) {

        Optional<User> user = userRepository.findById(userId);

        if(user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    public void saveUser(User user) {   // Create/Update
        userRepository.save(user);
    }

    public void deleteUserById(Long userId) {   // Delete
        userRepository.deleteById(userId);
    }



}
