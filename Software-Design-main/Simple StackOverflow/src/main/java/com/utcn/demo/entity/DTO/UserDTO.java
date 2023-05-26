package com.utcn.demo.entity.DTO;

import com.utcn.demo.entity.EUserType;
import com.utcn.demo.entity.User;

public class UserDTO {

    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private EUserType userType;

    private boolean banned;

    public UserDTO() {
    }

    public UserDTO(Long userId, String firstName, String lastName, String email, String password,
                   String phoneNumber, EUserType userType, boolean banned) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
        this.banned = false;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public EUserType getUserType() {
        return userType;
    }

    public void setUserType(EUserType userType) {
        this.userType = userType;
    }

    public void setBanned(boolean banned) {this.banned = banned; }

    public boolean getBanned() { return banned; }

    public User buildUser(UserDTO userDTO){
        User user = new User();
        user.setUserId(userDTO.getUserId());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setUserType(userDTO.getUserType());
        user.setBanned(false);
        return user;
    }
}

