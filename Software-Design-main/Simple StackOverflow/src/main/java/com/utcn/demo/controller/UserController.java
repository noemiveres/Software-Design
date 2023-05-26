package com.utcn.demo.controller;

import com.utcn.demo.entity.User;
import com.utcn.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    @ResponseBody
    public List<User> retrieveUsers() {
        return userService.retrieveUsers();
    }


    @GetMapping("/{id}")
    @ResponseBody
    public User retrieveUserById(@PathVariable Long id){
        return userService.retrieveUserById(id);
    }

    @GetMapping("/email/{email}")
    @ResponseBody
    public User retrieveUserByEmail(@PathVariable String email){
        return userService.loadUserByEmail(email);
    }

    @PostMapping("/register")
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setUserId(id);
        userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUserById(id);
    }


}
