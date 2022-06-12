# zghero-spring-framework
API RESTful do programa Acelera ZG da ZG Soluções com o intuito do aprendizado em Spring Framework.

## (K3-T1): Spring Framework

A etapa consistia em fazer uma API RESTful com o Spring. Mas as configurações da parte View continuou com os problemas da etapa anterior, sem a utilização
de nenhum framework. Também foi retirada a parte de validação com REGEX para a facilidade de testagem e por conta do tempo curto pelo meu atraso nas entregas.

No Intellij inicialize o projeto Spring na porta 8080. Os seguintes endpoints foram utilizados nas requisições:

  - /candidatos
  - /empresas

Configurações necessárias:

  - É necessário ter a extensão do live-server instalada no Visual Studio.
  - É necessário que a IDE utilizada seja o Intellij IDEA.
  - A conexão do PostgreeSQL precisa ser:
  - String url = "jdbc:postgresql://localhost:5432/postgres2"
      - String user = "postgres"
      - String password = "postgres"
      - Tenha certeza que o banco de dados utilizado seja o do <a href="https://github.com/hideki-abe/zghero-spring-framework/blob/master/linkedtinder.sql"></a>.

O endpoint do Tomcat precisa ser: http://localhost:8080/zghero, para que a requisição no Frontend seja aplicável. Para executar o projeto, realize o seguinte comando no terminal da pasta "Frontend": no-cors-proxy -p 3000 -t http://localhost:8080. A seguir, dê o seguinte comando para iniciar o Frontend: npm start. Se necessário, finalize o processo do live-server com os comandos:

  - netstat -tulpn | grep 3000
  - kill (numero da porta utilizada)

Após isso, entre na página inicial(a home.html) pela extensão do Live Server.
