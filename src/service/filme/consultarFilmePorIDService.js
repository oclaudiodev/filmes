import { consultarFilmesPorID } from "../../repository/filmeRepository.js"
import { validarFilmeUnico } from "../../validation/filme/filmeValidation.js"

export async function consultarFilmesPorIDService(id){

        let registros = await consultarFilmesPorID(id)
        validarFilmeUnico(registros)

        let filme  = registros[0]
        return filme
    
}