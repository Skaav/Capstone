package com.example.demo.security.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "prenotazioni")
public class Prenotazione {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPrenotazione;
	private String nomeUtente;
	@ManyToOne
	private Pc pc;
	@ManyToOne
	private Sala sale;
	private LocalDate data;
	private boolean pagamento;

}
