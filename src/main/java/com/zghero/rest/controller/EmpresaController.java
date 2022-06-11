package com.zghero.rest.controller;

import com.zghero.model.entity.Empresa;
import com.zghero.model.repository.Empresas;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/zghero/empresas")
public class EmpresaController {

    private Empresas repository;

    public EmpresaController(Empresas repository){
        this.repository = repository;
    }

    @PostMapping
    public Empresa create(Empresa empresa){
        return repository.save(empresa);
    }



}
