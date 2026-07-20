import con from './connection.js'

export async function salvarFilme(filme){
    let comando = 
    `
    insert into tb_filme(nm_filme,ds_sinopse,vl_avaliacao,dt_lancamento,bt_disponivel)
    values(?,?,?,?,?)
    `

    let resposta = await con.query(comando,[
        filme.nome,
        filme.sinopse,
        filme.avaliacao,
        filme.lancamento,
        filme.disponivel
    ])

    let info = resposta[0]

    let id = info.insertId

    return id
}