import { Request, Response } from "express";
import { FolhaCalculadaRepository } from "../repositories/FolhasCalculadasRepository";

const folhasCalculadasRepository = new FolhaCalculadaRepository();

	export class FolhaCalculadaController{
	    create(request: Request, response: Response) : void{
	        folhasCalculadasRepository.create(request.body);

	        response.status(201).json({message : "Folha Recebida", data: folhasCalculadasRepository})
	    }
	    listUm(request: Request, response: Response): void{
	    	const cpf = request.params.cpf;
	    	const mes = request.params.mes;
	    	const ano = request.params.ano;
	    	const folhaCalculada = folhasCalculadasRepository.listUm(cpf, mes, ano)
	        response.status(200).json({message: "Listagem da Folha Calculada", data: folhaCalculada})
	    }
	    list(request: Request, response: Response): void{
	        const folhasCalculadas = folhasCalculadasRepository.list();
	        response.status(200).json({message: "Listagem de Folhas Calculadas", data: folhasCalculadas})
	    }
	}
