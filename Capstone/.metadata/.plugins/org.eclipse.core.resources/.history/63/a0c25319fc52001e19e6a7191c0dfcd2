package com.example.Spring.security.entity;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "prenotazioni")
public class Prenotazione {
	
	@Column(nullable = false, unique = true)
	private int prenotazioneId;
	   @Column(nullable = false, unique = true)
    private User user;
	   @Column(nullable = false, unique = true)
    private PostazionePC postazionePC;
	   @Column(nullable = false, unique = true)
    private PostazioneSalaGioco postazioneSalaGioco;
	   @Column(nullable = false, columnDefinition = "DATE")
    private Date dataPrenotazione;
	   @Column(nullable = false, unique = true)
    private Time oraInizio;
	   @Column(nullable = false, unique = true)
    private Time oraFine;
	   @Column(nullable = false, unique = true)
    private String stato;

}
