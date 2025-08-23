import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Associar um carro a uma pessoa
export const associarCarroAPessoa = async (req: Request, res: Response) => {
    try {
        const { pessoaId, carroId } = req.body;

        const novaAssociacao = await prisma.pessoaPorCarro.create({
            data: {
                pessoaId: Number(pessoaId), // Converte para Number
                carroId: Number(carroId),   // Converte para Number
            },
        });
        res.status(201).json(novaAssociacao);
    } catch (error) {
        console.error("Erro ao associar carro a pessoa:", error);
        res.status(500).json({ error: "Erro ao associar carro a pessoa" });
    }
};

// Listar todas as associações
export const listarAssociacoes = async (req: Request, res: Response) => {
    try {
        const associacoes = await prisma.pessoaPorCarro.findMany({
            include: { // O erro está aqui: "incluse" -> "include"
                pessoa: true,
                carro: true,
            },
        });
        res.status(200).json(associacoes);
    } catch (error) {
        console.error("Erro ao listar associações:", error);
        res.status(500).json({ error: "Erro ao listar associações" }); // Adicionado para um retorno de erro
    }
};

// Excluir uma associação
export const excluirAssociacao = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.pessoaPorCarro.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao excluir associação:", error);
        res.status(500).json({ error: "Erro ao excluir associação" });
    }
};