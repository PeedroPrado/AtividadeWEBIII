import express from "express";
import {
    associarCarroAPessoa,
    listarAssociacoes,
    excluirAssociacao,
} from "../Controllers/pessoaCarroController";

const router = express.Router();

// Rota POST para associar um carro a uma pessoa
router.post("/", associarCarroAPessoa);

// Rota GET para listar todas as associações
router.get("/", listarAssociacoes);

// Rota DELETE para excluir uma associação por id

router.delete("/:id", excluirAssociacao);

export default router;