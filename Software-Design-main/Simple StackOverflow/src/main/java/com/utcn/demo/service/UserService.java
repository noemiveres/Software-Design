package com.utcn.demo.service;

import com.utcn.demo.entity.User;
import com.utcn.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    @Transactional
    public User loadUserByEmail(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

    }


}
