const users = [
  {
    nome: "Maria Silva",
    dataNascimento: "12/05/1995",
    email: "maria.silva@example.com",
    senha: "senha123",
    cidade: "São Paulo",
    estado: "SP",
  },
  {
    nome: "João Pereira",
    dataNascimento: "22/03/1990",
    email: "joao.pereira@example.com",
    senha: "seguranca456",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
  {
    nome: "Ana Souza",
    dataNascimento: "05/11/1999",
    email: "ana.souza@example.com",
    senha: "minhasenha789",
    cidade: "Belo Horizonte",
    estado: "MG",
  },
  {
    nome: "Pedro Oliveira",
    dataNascimento: "19/07/1983",
    email: "pedro.oliveira@example.com",
    senha: "123456789",
    cidade: "Curitiba",
    estado: "PR",
  },
  {
    nome: "Lucas Lima",
    dataNascimento: "14/02/1992",
    email: "lucas.lima@example.com",
    senha: "senha1234",
    cidade: "Florianópolis",
    estado: "SC",
  },
  {
    nome: "Clara Mendes",
    dataNascimento: "10/10/1987",
    email: "clara.mendes@example.com",
    senha: "senha567",
    cidade: "Salvador",
    estado: "BA",
  },
  {
    nome: "Fernando Alves",
    dataNascimento: "30/08/1978",
    email: "fernando.alves@example.com",
    senha: "abc123",
    cidade: "Porto Alegre",
    estado: "RS",
  },
  {
    nome: "Juliana Castro",
    dataNascimento: "21/04/1994",
    email: "juliana.castro@example.com",
    senha: "password123",
    cidade: "Fortaleza",
    estado: "CE",
  },
  {
    nome: "Carlos Martins",
    dataNascimento: "15/06/1985",
    email: "carlos.martins@example.com",
    senha: "securepass789",
    cidade: "Recife",
    estado: "PE",
  },
  {
    nome: "Sofia Rodrigues",
    dataNascimento: "09/01/2000",
    email: "sofia.rodrigues@example.com",
    senha: "senhaabc",
    cidade: "Brasília",
    estado: "DF",
  },
  {
    nome: "Gustavo Ferreira",
    dataNascimento: "27/03/1993",
    email: "gustavo.ferreira@example.com",
    senha: "passw0rd",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "Isabela Costa",
    dataNascimento: "17/07/1997",
    email: "isabela.costa@example.com",
    senha: "mypassword123",
    cidade: "Manaus",
    estado: "AM",
  },
  {
    nome: "Ricardo Nunes",
    dataNascimento: "05/12/1982",
    email: "ricardo.nunes@example.com",
    senha: "pass1234",
    cidade: "Belém",
    estado: "PA",
  },
  {
    nome: "Luana Teixeira",
    dataNascimento: "23/05/1989",
    email: "luana.teixeira@example.com",
    senha: "seguro456",
    cidade: "Campinas",
    estado: "SP",
  },
  {
    nome: "Fábio Moreira",
    dataNascimento: "08/11/1975",
    email: "fabio.moreira@example.com",
    senha: "password789",
    cidade: "Niterói",
    estado: "RJ",
  },
  {
    nome: "Gabriela Ramos",
    dataNascimento: "12/09/1996",
    email: "gabriela.ramos@example.com",
    senha: "securepassword",
    cidade: "Vitória",
    estado: "ES",
  },
  {
    nome: "Henrique Souza",
    dataNascimento: "29/01/1981",
    email: "henrique.souza@example.com",
    senha: "senha12345",
    cidade: "Joinville",
    estado: "SC",
  },
  {
    nome: "Carolina Duarte",
    dataNascimento: "11/06/1992",
    email: "carolina.duarte@example.com",
    senha: "senha123abc",
    cidade: "Uberlândia",
    estado: "MG",
  },
  {
    nome: "Marcelo Azevedo",
    dataNascimento: "19/04/1988",
    email: "marcelo.azevedo@example.com",
    senha: "abcde123",
    cidade: "Cuiabá",
    estado: "MT",
  },
  {
    nome: "Tatiana Lima",
    dataNascimento: "24/08/1991",
    email: "tatiana.lima@example.com",
    senha: "minhasenha456",
    cidade: "Maceió",
    estado: "AL",
  },
];

const tabelaUsuarios = document.querySelector("tbody");
console.log(tabelaUsuarios);

window.onload = () => {
  users.forEach((user) => {
    tabelaUsuarios.innerHTML += `
          <tr>
              <td>${user.nome}</td>
              <td>${user.dataNascimento}</td>
              <td>${user.email}</td>
              <td>${user.senha}</td>
              <td>${user.cidade}</td>
              <td>${user.estado}</td>
          <tr>   
          `;
  });
};
