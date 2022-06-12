let nome_c = <HTMLSelectElement>document.querySelector('#nome')
let sobrenome_c = <HTMLSelectElement>document.querySelector('#sobrenome')
let email_c = <HTMLSelectElement>document.querySelector('#email')
let cpf_c = <HTMLSelectElement>document.querySelector('#cpf')
let dataNasc_c = <HTMLSelectElement>document.querySelector('#dataNasc')
let pais_c = <HTMLSelectElement>document.querySelector('#pais')
let cep_c = <HTMLSelectElement>document.querySelector('#cep')
let descricao_c = <HTMLSelectElement>document.querySelector('#descricao')
let senha_c = <HTMLSelectElement>document.querySelector('#senha')
let botaoCadastra_c = <HTMLElement>document.querySelector('.botao_cadastrar')
let link_c = document.querySelector('#link') as HTMLAnchorElement

console.log(link_c)

botaoCadastra_c.addEventListener('click', () => {
  cadastraUsuario()
  setTimeout(function() {
    //location.href="../competencias/competencias.html"
  }, 500)
 
})

async function cadastraUsuario () {

  let response
  let json
  try {
    event?.preventDefault
    let url = "http://localhost:3000/zghero/candidatos" 

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
