package com.example.demo.security.service;

import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.demo.security.entity.Pc;
import com.example.demo.security.entity.Prenotazione;
import com.example.demo.security.entity.Sala;
import com.example.demo.security.repository.PrenotazioneRepo;

import jakarta.transaction.Transactional;

@Service
public class PrenotazioneService {
	private Logger log  = (Logger) LoggerFactory.getLogger(PrenotazioneService.class);

    @Autowired PrenotazioneRepo repo;
    @Autowired SalaService slSvc;
    @Autowired PcService pcSvc;
    @Autowired UserService usSvc;

    @Autowired @Qualifier("prenotaBean") private ObjectProvider<Prenotazione> provider;
    
    public Prenotazione addPrenota(String nomeUtente, LocalDate data){

        Prenotazione p = provider.getObject().builder()
                .nomeUtente(nomeUtente)
                .data(data)
                .pagamento(false)
                .build();

        repo.save(p);
        System.out.println(p);
        log.info("---------Aggiunto al DataBase");
        return p;
    }
    
    public Prenotazione prenotaPagata( Long idPrenotazione) {

        Prenotazione p = repo.findById(idPrenotazione).get();
        p.setPagamento(true);
        repo.save(p);
        System.out.println(p);
        return p;
    }
    
    public Prenotazione prenotaSala(Long idPrenotazione , Long salaId) {

        Prenotazione p = repo.findById( idPrenotazione).get();
        Sala s = slSvc.findById(salaId);
        s.setDisponibile(false);
        Sala sa = this.slSvc.toggleDisponibile(s);
        p.setSale(sa);
        repo.save(p);
        System.out.println(p);
        return p;
    }
    
    public Prenotazione prenotaPc(Long idPrenotazione , Long pcId) {

        Prenotazione p = repo.findById( idPrenotazione).get();
        Pc pc = pcSvc.findById(pcId);
        pc.setDisponibile(false);
        Pc tr = this.pcSvc.toggleDisponibile(pc);
        p.setPc(tr);
        repo.save(p);
        System.out.println(p);
        return p;
    }

    
    public Prenotazione findById(long id) {

        Prenotazione p = repo.findById(id).get();
        System.out.println();
        log.info(p.toString());

        return p;
    }

    public List<Prenotazione> findAll(){

        List<Prenotazione> l  = (List<Prenotazione>)repo.findAll();
        System.out.println();
        l.forEach( s -> log.info(s.toString()));
        return l;
    }
    
    public List<Prenotazione> findByNomeUtente(String nomeUtente){
    	List<Prenotazione> nu = repo.findByNomeUtente(nomeUtente);
    	return nu;
    }

}
