import express from "express";
import { 
    createCarro, 
    getCarro, 
    getCarroId, 
    updateCarroId, 
    deleteCarro 
} from "../Controllers/carroController";

const router = express.Router();

router.post("/", createCarro);
router.get("/", getCarro); 
router.get("/:id", getCarroId);
router.put("/:id", updateCarroId);
router.delete("/:id", deleteCarro);

export default router;