package com.example.demo.security.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.demo.security.entity.Pc;
import com.example.demo.security.repository.PcRepo;

@Service
public class PcService {
	private Logger log  = (Logger) LoggerFactory.getLogger(PcService.class);

    @Autowired PcRepo repo;

    @Autowired @Qualifier("pcBean") private ObjectProvider<Pc> provider;
    
    public Pc addPc( String nomeColore, String descrizione , boolean disponibile){
    	Pc p = provider.getObject().builder()
                             .nomeColore(nomeColore)
                             .descrizione(descrizione)
                             .disponibile(disponibile)
                             .build();

     repo.save(p);
     System.out.println();
     log.info("Pc aggiunto al DataBase");

return p;
}
    
    public Pc findById(long id) {
        Pc p = repo.findById(id).get();
        System.out.println();
        log.info(p.toString());
        return p;
    }
    public List<Pc> findAll(){

        List<Pc> p  = (List<Pc>)repo.findAll();
        System.out.println();
        p.forEach( i -> log.info(i.toString()));
        return p;
    }
    public Pc updatePc( long idPc , String descrizione) {
        Pc p = repo.findById(idPc).get();

        p.setDescrizione(descrizione);
        
        System.out.println();
        log.info(p.toString());
        return p;
    }
    
    public void loadPc() {
    	
    	addPc("Blu", "Gaming", false);
    	addPc("Giallo", "Gaming", false);
    	addPc("Arancione", "Lavoro", true);
    	addPc("Viola", "Lavoro", true);
    }
}
