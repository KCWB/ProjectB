import { FolhaCalculada } from "../model/FolhaCalculada";

const folhasCalculadas : FolhaCalculada[] = [];
export class FolhaCalculadaRepository{
	create(folhas:FolhaCalculada[]) : void{
		folhas.forEach((folha) => {
			folhasCalculadas.push(folha);
		});
	}
	listUm(cpf:String, mes:Number, ano:Number): FolhaCalculada{
		const index = folhasCalculadas.findIndex((folhaCalculada) => folhaCalculada.funcionario.cpf === cpf 
		&& folhaCalculada.mes === mes && folhaCalculada.ano === ano);
		return folhasCalculadas[index]
	}
	list(): FolhaCalculada[]{
		return folhasCalculadas;
	}
}