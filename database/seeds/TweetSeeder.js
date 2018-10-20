'use strict'

/*
|--------------------------------------------------------------------------
| TweetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TweetSeeder {
  async run () {
    Factory.model('App/Models/Tweet').createMany(100)
  }
}

module.exports = TweetSeeder
