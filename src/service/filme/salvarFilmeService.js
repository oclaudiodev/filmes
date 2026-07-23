import { salvarFilme, consultarFilmesPorNome } from "../../repository/filmeRepository.js";
import { validarFilmeIgual, validarNovoFilme } from "../../validation/filme/filmeValidation.js";


export default async function salvarFilmeService(filmeObj){
    validarNovoFilme(filmeObj)

    let registros = await consultarFilmesPorNome(filmeObj.nome)

    validarFilmeIgual(registros)

    let id = await salvarFilme(filmeObj)

    return id
}