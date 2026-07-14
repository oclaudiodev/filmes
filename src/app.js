import './util/global.js'

import express, { json } from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import con from './repository/connection.js'


const servidor = express()

servidor.use(express.json())
servidor.use(cors())

const PORTA = process.env.PORT

servidor.listen(
    PORTA,
    ()=>
    console.log("CONECTOU NA PORTA: "+ PORTA)
)