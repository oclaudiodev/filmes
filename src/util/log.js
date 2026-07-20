import { horaAtual } from "./datetime.js"


global.logErro = function logErro(err){
    console.log(horaAtual()+' Erro ---> '+err.message)
}