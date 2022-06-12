"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nome_c = document.querySelector('#nome');
let sobrenome_c = document.querySelector('#sobrenome');
let email_c = document.querySelector('#email');
let cpf_c = document.querySelector('#cpf');
let dataNasc_c = document.querySelector('#dataNasc');
let pais_c = document.querySelector('#pais');
let cep_c = document.querySelector('#cep');
let descricao_c = document.querySelector('#descricao');
let senha_c = document.querySelector('#senha');
let botaoCadastra_c = document.querySelector('.botao_cadastrar');
let link_c = document.querySelector('#link');
console.log(link_c);
botaoCadastra_c.addEventListener('click', () => {
    cadastraUsuario();
    setTimeout(function () {
        //location.href="../competencias/competencias.html"
    }, 500);
});
function cadastraUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        let json;
        try {
            event === null || event === void 0 ? void 0 : event.preventDefault;
            let url = "http://localhost:3000/zghero/candidatos";
            const body = {
                nome: nome_c.value,
                sobrenome: sobrenome_c.value,
                email: email_c.value,
                data_de_nascimento: dataNasc_c.value,
                cpf: cpf_c.value,
                pais: pais_c.value,
                cep: cep_c.value,
                descricao: descricao_c.value,
                senha: senha_c.value
            };
            console.log(body);
            response = yield fetch(url, {
                method: 'POST',
                headers: {
                    Mode: 'no-cors',
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(body)
            });
            json = yield response.json();
        }
        catch (error) {
            console.log(error);
        }
    });
}
