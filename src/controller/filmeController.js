import { Router } from "express";
import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";



const endpoints = Router()

endpoints.post('/filme', async (req, resp) => {

    try {
        let filme = req.body
        let id = await salvarFilmeService(filme)

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }


})

endpoints.get('/filme', async (req, resp) => {
    try {
        let nome = req.query.nome
        let registros = await consultarFilmesService(nome)
        
        resp.send({registros})

    } catch (error) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }


})

export default endpoints
