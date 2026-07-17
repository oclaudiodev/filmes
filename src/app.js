import './util/global.js'

import express, { json } from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import rotas from './rotas.js'

const servidor = express()

servidor.use(express.json())
servidor.use(cors())

rotas(servidor)


const PORTA = process.env.PORT

servidor.listen(
    PORTA,
    ()=>
    console.log("CONECTOU NA PORTA: "+ PORTA)
)