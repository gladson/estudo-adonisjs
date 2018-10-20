# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

#### EXTRAS

##### Create Model + Migration + Controller

To create a model together with a migration and the controller.

```js
adonis make:model Tweet -m -c
```

##### Create Seeds and Hooks

To create seeds and hooks.

Reference seeds: [ChanceJs](https://chancejs.com)

```js
adonis make:seed User
adonis make:seed Tweet
```

```js
adonis make:hook User
adonis make:hook Tweet
```
