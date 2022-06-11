package com.zghero.rest.controller;

import com.zghero.model.entity.Candidato;
import com.zghero.model.repository.Candidatos;
import com.zghero.model.repository.Empresas;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/zghero/candidatos")
public class CandidatoController {

    private Candidatos repository;

    public CandidatoController(Candidatos repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Candidato create(@RequestBody Candidato candidato){
        return repository.save(candidato);
    }

    @GetMapping
    public List<Candidato> find(Candidato filtro){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING );

        Example example = Example.of(filtro, matcher);
        return repository.findAll(example);
    }

}
