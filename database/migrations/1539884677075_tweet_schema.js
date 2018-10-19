'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', (table) => {
      table.increments()
      //Relacionamento FK
      table
        .integer('user_id') //nome da coluna da tabela
        .unsigned() //diz no banco que o valor nao pode ser abaixo de zero
        .notNullable() //nao pode ser nulo
        .references('id') //O campo a ser referenciado
        .inTable('users') //A tabela a ser referenciada
        .onUpdate('CASCADE') //Ao ser atualizado o id referenciado da tabela referenciada, será atualizado todos os registros na tabela
        .onDelete('CASCADE') //Ao ser deletado o id referenciado da tabela referenciada, será deletado todos os registros na tabela
      table.string('content', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
