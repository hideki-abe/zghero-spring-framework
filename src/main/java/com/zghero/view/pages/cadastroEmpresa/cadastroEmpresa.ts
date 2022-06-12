let nome_e = <HTMLSelectElement>document.querySelector("#nome")
let email_e = <HTMLSelectElement>document.querySelector("#email")
let cnpj_e = <HTMLSelectElement>document.querySelector("#cnpj")
let pais_e = <HTMLSelectElement>document.querySelector("#pais")
let estado_e = <HTMLSelectElement>document.querySelector("#estado")
let cep_e = <HTMLSelectElement>document.querySelector("#cep")
let descricao_e = <HTMLSelectElement>document.querySelector("#descricao")
let senha_e = <HTMLSelectElement>document.querySelector("#senha")
let botaoCadastra_e = <HTMLElement>document.querySelector(".botao_cadastrar")
let link_e = document.querySelector("#link") as HTMLAnchorElement


botaoCadastra_e.addEventListener('click', () => {
    cadastraEmpresa()
    setTimeout(function() {
        //location.href="../vagas/cadastraVaga.html"
      }, 500)
})

async function cadastraEmpresa () {

    let response
    let json
    try {
      event?.preventDefault
      let url = "http://localhost:3000/zghero/empresas" 
      
      const body = {
        nome: nome_e.value,
        email: email_e.value,
        cnpj: cnpj_e.value,
        descricao: descricao_e.value,
        pais: pais_e.value,
        cep: cep_e.value,
        senha: senha_e.value
      }
      console.log(body)
  
      response = await fetch(url, {
        method: 'POST',
        headers: {
          Mode: 'no-cors',
          'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(body)
      })
  
      json = await response.json()
  
    } catch (error) {
      console.log(error)
    }
  }
