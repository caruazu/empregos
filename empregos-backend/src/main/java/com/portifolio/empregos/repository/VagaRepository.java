package com.portifolio.empregos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portifolio.empregos.model.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long>{}
