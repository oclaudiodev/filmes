import { Router } from "express";
import { salvarFilme } from "../repository/filmeRepository.js";

const endpoints = Router()

endpoints.post('/filme', async (req,resp)=>{
    
    let filme = req.body

    let id = await salvarFilme(filme)

    resp.send({
        id: id
    })
})

export default endpoints
