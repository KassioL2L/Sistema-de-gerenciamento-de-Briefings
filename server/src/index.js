const express = require('express');
const bodyParser = require('body-parser');
const briefingRoutes = require('./routes/briefingRoutes');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor de gestão de briefings!');
});

// Middleware para análise de corpos de solicitação
app.use(bodyParser.json());

// Middleware CORS para permitir solicitações somente da origem 5173
app.use(cors({
  origin: '*'
}));

// Rotas da API de briefings
app.use('/briefings', briefingRoutes);

// Configurações do MongoDB
mongoose.connect('mongodb+srv://kassiolimaprofissional:nLSL3xOD5WUBsXOm@briefing.6cmdehh.mongodb.net/')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
