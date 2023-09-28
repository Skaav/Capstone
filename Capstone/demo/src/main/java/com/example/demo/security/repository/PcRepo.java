package com.example.demo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.security.entity.Pc;


public interface PcRepo extends JpaRepository<Pc, Long> {
	List<Pc> findByDisponibile(boolean disponibile);
}
