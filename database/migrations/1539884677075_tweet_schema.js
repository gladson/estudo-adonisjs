'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', (table) => {
      table.increments()
      table
        .integer('user_id') //nome da coluna da tabela
        .unsigned() //diz no banco que o valor nao pode ser abaixo de zero
        .notNullable() //nao pode ser nulo
        .references('id')
      table.string('content', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
