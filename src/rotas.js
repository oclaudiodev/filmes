
import filmeController from './controller/filmeController.js'

export default function rotas(servidor){
    servidor.use(filmeController)
}