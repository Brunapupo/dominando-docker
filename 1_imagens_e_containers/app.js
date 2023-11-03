const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá minha imagem");
});

// indicar a porta que será escutada

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`);
});
