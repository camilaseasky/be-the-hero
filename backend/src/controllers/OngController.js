//pacote do node para geração de uma string aleatoria para o id
const crypto = require('crypto');
//importação do arquivo de conexão com o banco de dados
const connection = require('../database/connection');


module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
     
         return response.json(ongs);
     },

    async create(request, response) {
        //Desmembrando o body em dados especificos
        //para evitar envio de colunas inexistentes
        const { name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

         //retorna somente o id que foi gerado
        return response.json({ id });

    }

    
}