import express from "express";
import dotenv from "dotenv";
import { carroRoutes } from "./Routes/carroRoutes";

dotenv.config();
const app = express ();
app.use (express.json());

app.get ("/", (req, res) => {
    res.send("Api To-do List está rodando! Acesse /task para usar")
});

app.use("/carros", carroRoutes);

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000")
});