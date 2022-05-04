import {Router} from "express";
import { FolhaCalculadaController } from "../controller/FolhaCalculadaController";

const routes = Router();

routes.get("/", (request, response) => {
    response.json({message : "envio de folha..."});
});

routes.post("/folha/receber", new FolhaCalculadaController().create);
routes.post("/folha/consultar/:cpf/:mes/:ano", new FolhaCalculadaController().listUm);
routes.get("/folha/listar", new FolhaCalculadaController().list);

export { routes };
