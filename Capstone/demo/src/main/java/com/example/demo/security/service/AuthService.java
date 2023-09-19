package com.example.demo.security.service;

import com.example.demo.security.payload.LoginDto;
import com.example.demo.security.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
