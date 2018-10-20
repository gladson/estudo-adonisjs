'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
| Reference to ChanceJs => https://chancejs.com/
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    email: faker.username() + '@gmail.com',
    password: '123456',
    // age: Math.floor(Math.random() *  80) + 18
  }
})

Factory.blueprint('App/Models/Tweet', (faker) => {
  return {
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    },
    //title: faker.sentence() //titulo
    content: faker.paragraph({ sentences: 1 }) //conteudo com paragrafo com uma setença
  }
})
