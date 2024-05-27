package com.portifolio.empregos;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VagaController {
	
	private static final String template = "título: %s";
	private final AtomicLong contador = new AtomicLong();
	
	@GetMapping("/vaga")
	public Vaga vaga(
		@RequestParam(value="titulo", defaultValue="título inexistente")
		String titulo
	)
	{
		return new Vaga(
			contador.incrementAndGet(),
			String.format(template, titulo)
		);
	}
}
