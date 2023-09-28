package com.example.demo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.security.entity.Prenotazione;




public interface PrenotazioneRepo extends JpaRepository<Prenotazione, Long> {
	List<Prenotazione> findByNomeUtente(String nomeUtente);

}
