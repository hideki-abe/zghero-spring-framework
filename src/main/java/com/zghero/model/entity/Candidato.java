package com.zghero.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "candidatos")
public class Candidato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "sobrenome")
    private String sobrenome;
    @Column(name = "data_de_nascimento")
    private String data_de_nascimento;
    @Column(name = "email")
    private String email;
    @Column(name = "cpf")
    private String cpf;
    @Column(name = "pais")
    private String pais;
    @Column(name = "cep")
    private String cep;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "senha")
    private String senha;

    public Candidato(){
    }

    public Candidato(Integer id, String nome, String sobrenome, String data_de_nascimento, String email, String cpf, String pais, String cep, String descricao, String senha) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_de_nascimento = data_de_nascimento;
        this.email = email;
        this.cpf = cpf;
        this.pais = pais;
        this.cep = cep;
        this.descricao = descricao;
        this.senha = senha;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Id
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getData_de_nascimento() {
        return data_de_nascimento;
    }

    public void setData_de_nascimento(String data_de_nascimento) {
        this.data_de_nascimento = data_de_nascimento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
