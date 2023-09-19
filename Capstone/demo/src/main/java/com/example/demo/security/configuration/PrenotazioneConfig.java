package com.example.demo.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.example.demo.security.entity.Prenotazione;
@Configuration
public class PrenotazioneConfig {
	
	    @Bean("prenotaBean")
	    @Scope("prototype")
	    public Prenotazione prenotazione() {
	       return new Prenotazione();
	 }

}
