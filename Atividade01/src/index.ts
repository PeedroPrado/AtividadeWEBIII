import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; 
import carroRoutes from "./Routes/carroRoutes"; 
import  pessoaRoutes  from "./Routes/pessoaRoutes"; // Mantém as chaves se for export nomeado
import pessoaCarroRoutes from "./Routes/pessoaCarroRoutes"; // Importa sem chaves

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));

// Middleware para ler JSON
app.use(express.json());

// Adicione o middleware CORS para permitir requisições do front-end
app.use(cors());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rota para carregar a página HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rotas da API, COM o prefixo "/api"
app.use("/carros", carroRoutes);
app.use("/pessoas", pessoaRoutes);
app.use("/associacoes", pessoaCarroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});