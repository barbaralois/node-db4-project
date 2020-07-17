const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getByIngredient,
};

function getRecipes() {
  return db('recipes');
}

function getRecipeById(id) {
  return db('recipes').where({ id }).first();
}

function getInstructions(id) {
  return db('recipes as r')
    .join('recipe_instructions as i', 'r.id', 'i.recipe_id')
    .select('r.id', 'i.id', 'i.instruction')
    .where('r.id', id)
    .orderBy('i.id'); // should I have numbered the instructions within each recipe as well? or is this good enough?
}

function getShoppingList(id) {
  return db('recipe_ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity')
    .where('r.id', id);
}

function getByIngredient(id) {
  return db('recipe_ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .select('i.ingredient_name', 'r.recipe_name', 'ri.quantity')
    .where('i.id', id);
}
