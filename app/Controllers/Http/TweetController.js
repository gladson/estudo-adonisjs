'use strict'

/**
 * O metodo create e edit foram deletados,
 * porque eles são utilizados quando o projeto e Full MVC.
 * Ou seja quando existe no projeto as views com forms.
 */

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tweet = use('App/Models/Tweet');

/**
 * Resourceful controller for interacting with tweets
 */
class TweetController {
  /**
   * Show a list of all tweets.
   * GET tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    // ANTES
    // const tweets = await Tweet.all()
    // DEPOIS
    /**
     * MÉTODO USADO
     * Eager Loading
     * É o Load aonde todas as classes relacionadas são carregadas
     * na mesma query. O ORM, normalmente por meio de Joins,
     * trará todas as entidades relacionadas.
     * Ou seja, carregar relacionamentos evitando perda de performace
     * no banco de dados.
     */
    const tweets = await Tweet.query()
    .with('user')
    .fetch()

    return tweets
  }

  /**
   * Create/save a new tweet.
   * POST tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['content'])
    const tweet = await Tweet.create({
      user_id: auth.user.id,
      ...data
    })
    return tweet
  }

  /**
   * Display a single tweet.
   * GET tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const tweet = await Tweet.findOrFail(params.id)
    return tweet
  }

  /**
   * Update tweet details.
   * PUT or PATCH tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // async update ({ params, request, response }) {
  // }

  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const tweet = await Tweet.findOrFail(params.id)

    if (tweet.user_id != auth.user.id ) {
      return Response.status(401)
    }

    await tweet.delete()
  }
}

module.exports = TweetController
