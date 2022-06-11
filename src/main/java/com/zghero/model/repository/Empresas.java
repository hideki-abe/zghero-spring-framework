package com.zghero.model.repository;

import com.zghero.model.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Empresas extends JpaRepository<Empresa, Integer> {

}
