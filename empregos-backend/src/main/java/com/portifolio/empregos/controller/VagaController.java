package com.portifolio.empregos.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.portifolio.empregos.model.Vaga;
import com.portifolio.empregos.repository.VagaRepository;

@RestController
@RequestMapping("/api/vaga")
public class VagaController {
	
	private final VagaRepository vagaRepository;
	
	public VagaController(VagaRepository vagaRepository) {
		super();
		this.vagaRepository = vagaRepository;
	}
	
	@GetMapping
	public List<Vaga> list(){
		return vagaRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Vaga create(@RequestBody Vaga vagaApi){
		return vagaRepository.save(vagaApi);
	}
}
