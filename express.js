/*
No terminal:

npm init -y
npm install express

*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Minha primeira API com Express!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

/*
Para rodar: node index.js
Acesse no navegador: http://localhost:3000
*/


//Criando outras rotas

app.get("/sobre", (req, res) => {
  res.send("Essa é a rota sobre");
});

app.get("/jogos", (req, res) => {
  res.json([
    { id: 1, nome: "Minecraft", genero: "Sandbox" },
    { id: 2, nome: "Mario Kart", genero: "Corrida" },
    { id: 3, nome: "The Sims", genero: "Simulação" }
  ]);
});