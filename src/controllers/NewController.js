// EXEMPLO DE CONTROLLER
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req,res){
        /*
        let temperatura = (Math.random()+17).toFixed(2)
        let umidade = (Math.random()*3 - Math.random()/10 + 70).toFixed(2)
        let porta1 = "True"
        let porta2 = "True"
        let porta3 = "False"
        let temperatura2 = (Number(temperatura)+Math.random()/10).toFixed(2)
       // let umidade2 = (umidade + Math.random()/10).toString().toFixed(2)
        */
       const {
           temperatura,
           umidade,
           porta1,
           porta2,
           temperatura2,
           porta3
       } = req.body
        await connection('db_tablename').insert({temperatura,umidade,porta1,porta2,temperatura2,porta3});
        return res.json({temperatura,umidade,porta1,porta2,temperatura2,porta3})
    },

    async index(req,res){
        const data = await connection('db_tablename').select('temperatura','umidade','porta1','porta2','temperatura2','porta3').limit(1).orderBy('id','desc')
        return res.json(
            {
                temperatura:data[0].temperatura,
                umidade:data[0].umidade,
                porta1:data[0].porta1,
                porta2:data[0].porta2,
                temperatura2:data[0].temperatura2,
                porta3:data[0].porta3
            }
        )
    },

    async delete(req,res){
        await connection('db_tablename').delete();
        return res.json("TODOS OS DADOS DELETADOS")
    }
}
/*
{
    temperatura:data[index].temperatura
}
*/