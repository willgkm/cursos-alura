import express from "express";
import livroController from "../controller/livrosController.js";

const router = express.Router()

router 
  .get("/livros",livroController.listarLivros)
  .get("/livros/busca", livroController.buscarLivroPorEditora)
  .get('/livros/:id',livroController.buscarLivroPorId)
  .post("/livros",livroController.cadastrarLivro)
  .put('/livros/:id',livroController.atualizarLivro)
  .delete("/livros/:id", livroController.deletarLivro)


export default router;