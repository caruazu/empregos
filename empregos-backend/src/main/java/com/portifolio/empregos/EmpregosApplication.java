package com.portifolio.empregos;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.portifolio.empregos.model.Vaga;
import com.portifolio.empregos.repository.VagaRepository;

@SpringBootApplication
public class EmpregosApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpregosApplication.class, args);
	}
}
