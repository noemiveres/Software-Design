package com.utcn.demo.entity.DTO;

public class LoginJwtDTO {
    private String email;
    private String userType;

    private boolean banned;

    private String accessToken;
    private String type = "Bearer";

    public LoginJwtDTO() {
    }

    public LoginJwtDTO(String email, String userType, boolean banned, String accessToken) {
        this.email = email;
        this.userType = userType;
        this.banned = banned;
        this.accessToken = accessToken;
    }

    public UserDTO buildUserDTO() {
        return new UserDTO(null, null, null, email, userType, null, null, false);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isBanned() {
        return banned;
    }

    public void setBanned(boolean banned) {
        this.banned = banned;
    }
}
