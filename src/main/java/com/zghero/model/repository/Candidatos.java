package com.zghero.model.repository;

import com.zghero.model.entity.Candidato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Candidatos extends JpaRepository<Candidato, Integer> {

}
