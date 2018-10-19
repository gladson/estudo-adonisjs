'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.get('/app', "AppController.index").middleware(['auth'])

Route.get('/', () => {
  return { greeting: 'AQUI NAO TEM NADA!' }
})

Route.group(() => {
  Route.resource('tweets', 'TweetController')
  .apiOnly()
  .except('update')
}).middleware('auth')
