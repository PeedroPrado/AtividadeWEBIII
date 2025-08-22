import {PrismaClient} from "@prisma/client"
import { Request, Response } from "express"

interface Carro{
    id: number;
    modelo: string;
    marca: string;
    ano: number;
}

const prisma = new PrismaClient();

//Criar um carro
export const createCarro = async (req: Request, res: Response) => {
    try{
       const { modelo, marca, ano } = req.body;
    const carros = await prisma.carro.create ({
        data: {
            modelo,
            marca,
            ano,
        },
        });
        res.status(201).json(carros);
} catch (error) {
    console.error("Erro ao criar carro:", error);
    // Log do erro
    res.status(500).json({ error: "Erro ao criar carro" });
  }; 
    };

    // Listar todos os carros
export const getCarro = async (req: Request, res: Response) => {
    try{
       const carros = await prisma.carro.findMany();
        res.json(carros); 
    } catch (error){
        res.status(500).json ({error: "Erro ao buscar tarefas "});
    }
}

// Buscar Carro por id
export const getCarroId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const carro = await prisma.carro.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!carro) {
            return res.status(404).json({ error: "Carro não encontrado" });
        }

        res.json(carro);
    } catch (error) {
        // Log do erro 
        console.error("Erro ao buscar carro por ID:", error);
        res.status(500).json({ error: "Erro ao buscar carro" });
    }
};

// Atualizar Carro por id

export const updateCarroId = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {modelo, marca, ano} = req.body;

        const updateCarroId = await prisma.carro.update ({
            where: { id: Number (id)},
            data: {modelo, marca, ano}
        });
        res.json(updateCarroId);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar carro"});
    }
};

// Deletar os Carros

export const deleteCarro = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.carro.delete ({where: {id: Number(id)}});
        res.status(204).send();
    }catch (error){
        res.status(500).json({ error: "Erro ao deletar o carro "});
    }
};
    
