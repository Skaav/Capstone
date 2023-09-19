package com.example.demo.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.example.demo.security.entity.Sala;

@Configuration
public class SalaConfig {
	 @Bean("salaBean")
	    @Scope("prototype")
	    public Sala sala() {
	       return new Sala();
	 }
}
