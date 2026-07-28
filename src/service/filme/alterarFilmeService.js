import { alterarFilme } from "../../repository/filmeRepository.js";
import { validarLinhasAfetadas } from "../../validation/filme/filmeValidation.js";

export default function alterarFilmeService(filmeObj, id){

    let linhasAfetadas =  alterarFilme(filmeObj,id)
    validarLinhasAfetadas(linhasAfetadas)

}