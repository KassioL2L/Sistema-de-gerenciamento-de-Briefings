const express = require('express');
const bodyParser = require('body-parser');
const briefingRoutes = require('./routes/briefingRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor de gestão de briefings!');
  });  

// Middleware para análise de corpos de solicitação
app.use(bodyParser.json());

// Rotas da API de briefings
app.use('/briefings', briefingRoutes);

// Configurações do MongoDB
mongoose.connect('mongodb+srv://kassiolimaprofissional:nLSL3xOD5WUBsXOm@briefing.6cmdehh.mongodb.net/')



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
