package com.example.demo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.security.entity.Sala;
import com.example.demo.security.service.SalaService;

@RestController
@RequestMapping("/api/sala")
@CrossOrigin(origins = "*")
public class SalaController {

@Autowired SalaService slSvc;
	
	@GetMapping("/all")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findAll(){
	
        List<Sala> l = slSvc.findAll();
        ResponseEntity<List<Sala>> resp = new ResponseEntity<List<Sala>>(l , HttpStatus.OK);
        return resp;
    }
	
	@GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Sala p = slSvc.findById(id);
        ResponseEntity<Sala> resp = new ResponseEntity<Sala>(p , HttpStatus.OK);
        return resp;
	}
	
	@GetMapping("/allSalaDisponibile/{disponibile}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findByDisponibile(@PathVariable boolean disponibile){
	
        List<Sala> l = slSvc.findByDisponibile(disponibile);
        ResponseEntity<List<Sala>> resp = new ResponseEntity<List<Sala>>(l , HttpStatus.OK);
        return resp;
    }
}
