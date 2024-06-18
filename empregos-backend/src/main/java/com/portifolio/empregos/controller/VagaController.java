package com.portifolio.empregos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.portifolio.empregos.model.Vaga;
import com.portifolio.empregos.repository.VagaRepository;


@RestController
@CrossOrigin(origins = "${front-end-url}")
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
	
	@GetMapping("/{id}")
	public ResponseEntity<Vaga> findById(@PathVariable Long id) {
		return vagaRepository.findById(id)
				.map(vagaEncontrada -> ResponseEntity.ok().body(vagaEncontrada))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Vaga create(@RequestBody Vaga vagaApi){
		return vagaRepository.save(vagaApi);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Vaga> update(@PathVariable Long id, @RequestBody Vaga vagaApi) {
		return vagaRepository.findById(id)
				.map(vagaEncontrada -> {
					vagaEncontrada.setTitulo(vagaApi.getTitulo());
					vagaEncontrada.setTipo(vagaApi.getTipo());
					
					Vaga updated = vagaRepository.save(vagaEncontrada);
					return ResponseEntity.ok().body(updated);
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		return vagaRepository.findById(id)
				.map(vagaEncontrada -> {
					vagaRepository.deleteById(id);
					return ResponseEntity.noContent().<Void>build();
				})	
				.orElse(ResponseEntity.notFound().build());
	}
}
