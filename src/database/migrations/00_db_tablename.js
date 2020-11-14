//EXEMPLO DE SCHEMA USANDO KNEX

exports.up = function(knex){
    return knex.schema.createTable('db_tablename', function(table){
        table.string('id').primary();
        table.float('temperatura').notNullable();
        table.float('umidade').notNullable();
        table.string('porta1').notNullable();
        table.string('porta2').notNullable();
        table.float('temperatura2').notNullable();
        table.string('porta3').notNullable();
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('db_tablename')
}