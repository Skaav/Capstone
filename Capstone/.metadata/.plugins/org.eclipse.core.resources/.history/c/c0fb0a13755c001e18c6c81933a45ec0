package com.example.demo.security.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.security.service.PcService;
import com.example.demo.security.service.SalaService;

@Component
public class LanRunner implements ApplicationRunner {
	@Autowired PcService pcSvc;
	@Autowired SalaService slSvc;
	@Override
	public void run(ApplicationArguments args) throws Exception {
		// TODO Auto-generated method stub	
		pcSvc.loadPc();
		slSvc.loadSala();
	}
}
