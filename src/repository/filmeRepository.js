import con from './connection.js'

export async function salvarFilme(filme) {
    let comando =
        `
    insert into tb_filme(nm_filme,ds_sinopse,vl_avaliacao,dt_lancamento,bt_disponivel)
    values(?,?,?,?,?)
    `

    let resposta = await con.query(comando, [
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

export async function consultarFilmes(nome) {
    let comando =
        `
    select id_filme      id,
        nm_filme          nome,
        vl_avaliacao      avaliacao,
        dt_lancamento      lancamento,
        bt_disponivel      disponivel
    from tb_filme
    where nm_filme like ?
    `

    let resposta = await con.query(comando, ['%'+nome+'%'])

    let registros = resposta[0]

    return registros
}

export async function consultarFilmesPorNome(nome) {
    let comando =
        `
    select id_filme      id,
        nm_filme          nome,
        vl_avaliacao      avaliacao,
        dt_lancamento      lancamento,
        bt_disponivel      disponivel
    from tb_filme
    where nm_filme like ?
    `

    let resposta = await con.query(comando, [nome])

    let registros = resposta[0]

    return registros
}

export async function consultarFilmesPorID(id) {
    let comando = `
    select 
      id_filme    id,
      nm_filme    nome,
      ds_sinopse   sinopse,
      vl_avaliacao     avaliacao,
      dt_lancamento     lancamento,
      bt_disponivel      disponivel,
      img_filme          imagem

      from tb_filme
    
    where id_filme = ?
    `

    let resposta = await con.query(comando,[id])
    
    let regs = resposta[0]

    return regs
}
