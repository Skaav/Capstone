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

import com.example.demo.security.entity.Pc;
import com.example.demo.security.service.PcService;

@RestController
@RequestMapping("/api/pc")
@CrossOrigin(origins = "*")
public class PcController {
	
	@Autowired PcService pcSvc;
	
	@GetMapping("/all")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findAll(){
	
        List<Pc> l = pcSvc.findAllPc();
        ResponseEntity<List<Pc>> resp = new ResponseEntity<List<Pc>>(l , HttpStatus.OK);
        return resp;
    }
	
	@GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Pc p = pcSvc.findById(id);
        ResponseEntity<Pc> resp = new ResponseEntity<Pc>(p , HttpStatus.OK);
        return resp;
	}
	
	@GetMapping("/allPcDisponibile/{disponibile}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> findByDisponibile(@PathVariable boolean disponibile){
	
        List<Pc> l = pcSvc.findByDisponibile(disponibile);
        ResponseEntity<List<Pc>> resp = new ResponseEntity<List<Pc>>(l , HttpStatus.OK);
        return resp;
    }
}
