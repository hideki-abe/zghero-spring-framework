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
let nome_e = document.querySelector("#nome");
let email_e = document.querySelector("#email");
let cnpj_e = document.querySelector("#cnpj");
let pais_e = document.querySelector("#pais");
let estado_e = document.querySelector("#estado");
let cep_e = document.querySelector("#cep");
let descricao_e = document.querySelector("#descricao");
let senha_e = document.querySelector("#senha");
let botaoCadastra_e = document.querySelector(".botao_cadastrar");
let link_e = document.querySelector("#link");
botaoCadastra_e.addEventListener('click', () => {
    cadastraEmpresa();
    setTimeout(function () {
        //location.href="../vagas/cadastraVaga.html"
    }, 500);
});
function cadastraEmpresa() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        let json;
        try {
            event === null || event === void 0 ? void 0 : event.preventDefault;
            let url = "http://localhost:3000/zghero/empresas";
            const body = {
                nome: nome_e.value,
                email: email_e.value,
                cnpj: cnpj_e.value,
                descricao: descricao_e.value,
                pais: pais_e.value,
                cep: cep_e.value,
                senha: senha_e.value
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
