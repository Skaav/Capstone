package com.example.demo.security.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.demo.security.entity.Sala;
import com.example.demo.security.repository.SalaRepo;

@Service
public class SalaService {
	private Logger log = (Logger) LoggerFactory.getLogger(PcService.class);
	
	@Autowired SalaRepo repo;

    @Autowired @Qualifier("salaBean") private ObjectProvider<Sala> provider;
    
    public Sala addSala( String nome, String descrizione , boolean disponibile){
    	Sala s = provider.getObject().builder()
                             .nome(nome)
                             .descrizione(descrizione)
                             .disponibile(disponibile)
                             .build();

     repo.save(s);
     System.out.println();
     log.info("Sala aggiunta al Database");
     

return s;
}
    public Sala findById(long id) {
        Sala s = repo.findById(id).get();
        System.out.println();
        log.info(s.toString());
        return s;
    }
    public List<Sala> findAll(){

        List<Sala> s  = (List<Sala>)repo.findAll();
        System.out.println();
        s.forEach( i -> log.info(i.toString()));
        return s;
    }
    public Sala updateSala( long salaId , String descrizione) {
    	Sala s = repo.findById(salaId).get();

        s.setDescrizione(descrizione);
        
        System.out.println();
        log.info(s.toString());
        return s;
    }
    
 public void loadSala() {
    	
    	addSala("Sala 1", "GDR", false);
    	addSala("Sala 2", "Giochi da tavolo", true);
    	addSala("Sala 3", "GDR", true);
    	addSala("Sala 4", "Giochi da tavolo", false);
    	
    }

}
