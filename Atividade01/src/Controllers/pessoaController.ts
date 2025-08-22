import {PrismaClient} from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient();

//Criar uma pessoa
export const createPessoa = async (req: Request, res: Response) => {
    try{
       const { id, nome, email } = req.body;
    const pessoa = await prisma.pessoa.create ({
        data: {
            id,
            nome,
            email,
        },
        });
        res.status(201).json(pessoa);
} catch (error) {
    res.status(500).json({ error: "Erro ao criar a pessoa" });
  }; 
    };

    // Listar todas as Pessoas
export const getPessoas = async (req: Request, res: Response) => {
    try{
       const pessoas = await prisma.pessoa.findMany();
        res.json(pessoas); 
    } catch (error){
        res.status(500).json ({error: "Erro ao buscar as pessoas "});
    }
}

// Buscar as pessoas por id
export const getPessoaId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const pessoa = await prisma.pessoa.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!pessoa) {
            return res.status(404).json({ error: "Pessoa não encontrado" });
        }

        res.json(pessoa);
    } catch (error) {
        // Log do erro 
        console.error("Erro ao a pessoa por ID:", error);
        res.status(500).json({ error: "Erro ao buscar a pessoa" });
    }
};

// Atualizar Pessoa por id

export const updatePessoaId = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {nome, email} = req.body;

        const updatePessoaId = await prisma.pessoa.update ({
            where: { id: Number (id)},
            data: {nome, email}
        });
        res.json(updatePessoaId);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar a pessoa"});
    }
};

// Deletar alguem

export const deletePessoa = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.pessoa.delete ({where: {id: Number(id)}});
        res.status(204).send();
    }catch (error){
        res.status(500).json({ error: "Erro ao deletar a pessoa "});
    }
};
    
