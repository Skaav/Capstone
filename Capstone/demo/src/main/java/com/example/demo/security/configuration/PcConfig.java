package com.example.demo.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.example.demo.security.entity.Pc;

@Configuration
public class PcConfig {
	@Bean("pcBean")
    @Scope("prototype")
    public Pc pc() {
       return new Pc();
 }

}
