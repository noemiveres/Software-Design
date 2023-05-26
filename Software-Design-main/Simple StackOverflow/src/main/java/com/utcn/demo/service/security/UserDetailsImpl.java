package com.utcn.demo.service.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.utcn.demo.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String firstname;

    private String email;

    private boolean banned;

    @JsonIgnore
    private String password;

    private GrantedAuthority authority;

    public UserDetailsImpl(Long id, String firstname, String email, String password, boolean banned,
                           GrantedAuthority authority) {
        this.id = id;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.banned = banned;
        this.authority = authority;
    }

    public static UserDetailsImpl build(User user) {
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getUserType().toString());
        return new UserDetailsImpl(
                user.getUserId(),
                user.getFirstName(),
                user.getEmail(),
                user.getPassword(),
                user.getBanned(),
                authority);
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authority == null ? List.of() : List.of(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public String getEmail() {
        return email;
    }

    public boolean getBanned() {
        return banned;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }

}
