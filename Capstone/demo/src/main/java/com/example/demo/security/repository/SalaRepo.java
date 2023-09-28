package com.example.demo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.security.entity.Sala;


public interface SalaRepo extends JpaRepository<Sala, Long> {
	List<Sala> findByDisponibile(boolean disponibile);
}
