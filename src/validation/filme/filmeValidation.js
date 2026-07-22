export function validarNovoFilme(objFilme){
    if(!objFilme.nome){
        throw new Error("Nome do filme é obrigatório.")
    }
    if(!objFilme.sinopse){
        throw new Error("sinopse do filme é obrigatório.")
    }
    if(!objFilme.avaliacao){
        throw new Error("Avaliacao do filme é obrigatório.")
    }
    if(isNaN(objFilme.avaliacao)){
        throw new Error("Avaliacao do filme está indefinida.")
    }
    if(!objFilme.lancamento){
        throw new Error("lancamento do filme é obrigatório.")
    }
    if(objFilme.disponivel == undefined){
        throw new Error("Disponível do filme é obrigatório.")
    }
}

export function validarFilmeUnico(registros){
    if (registros.length==0){
        throw new Error("Filme não encontrado")
    }
    
}