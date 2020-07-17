exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {
          id: 1,
          recipe_id: 1,
          instruction: 'Spread peanut butter on one slice of bread',
        },
        {
          id: 2,
          recipe_id: 1,
          instruction: 'Spread jelly on the second slice of bread',
        },
        {
          id: 3,
          recipe_id: 1,
          instruction: 'Put the peanut butter side on top of the jelly',
        },
        {
          id: 4,
          recipe_id: 2,
          instruction: 'Combine instant oats and milk/water in a bowl',
        },
        { id: 5, recipe_id: 2, instruction: 'Microwave for 1:30-2 minutes' },
        {
          id: 6,
          recipe_id: 2,
          instruction: 'Let sit in microwave for at least 1 minute to cool',
        },
        {
          id: 7,
          recipe_id: 3,
          instruction: 'Drain excess water out of the can of tuna',
        },
        {
          id: 8,
          recipe_id: 3,
          instruction: 'Mix all ingredients together in a bowl',
        },
        {
          id: 9,
          recipe_id: 3,
          instruction: 'Spread on top of the bread',
        },
      ]);
    });
};
