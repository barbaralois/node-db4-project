const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('../recipes/recipe-router.js');
const Recipes = require('../recipes/recipe-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/api/ingredients/:id/recipes', (req, res) => {
  const { id } = req.params;
  Recipes.getByIngredient(id)
    .then((recipes) => {
      if (recipes) {
        res.json(recipes);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find an ingredient with the given id.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get recipes.' });
    });
});

module.exports = server;
