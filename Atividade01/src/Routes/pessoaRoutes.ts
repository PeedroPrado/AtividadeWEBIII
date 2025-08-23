import  express  from "express";
import  { createPessoa, getPessoas, getPessoaId, 
    updatePessoaId, deletePessoa  } from "../Controllers/pessoaController";

     const router = express.Router();

router.post("/", createPessoa); // Apenas "/"
router.get("/", getPessoas); // Apenas "/"
router.get("/:id", getPessoaId); 
router.put("/:id", updatePessoaId);
router.delete("/:id", deletePessoa);

export default router;