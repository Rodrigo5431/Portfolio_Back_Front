package com.portfolio.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.portfolio.api.entity.User;
import com.portfolio.api.repository.UserRepository;

@Service
public class UsuarioDetailsImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User usuario = userRepository.findByEmail(username);

        if (usuario == null) {
        	throw new UsernameNotFoundException("Usuário não encontrado");
        }

        return usuario;
    }
}