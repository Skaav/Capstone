package com.example.demo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.security.entity.Prenotazione;




public interface PrenotazioneRepo extends JpaRepository<Prenotazione, Long> {

}
