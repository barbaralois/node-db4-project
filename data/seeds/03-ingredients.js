exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'Slice of Bread' },
        { id: 2, ingredient_name: '1 tbsp Peanut Butter' },
        { id: 3, ingredient_name: '1 tbsp Grape Jelly' },
        { id: 4, ingredient_name: '1/2 cup Instant Oats' },
        { id: 5, ingredient_name: '3/4 cup Water or Milk' },
        { id: 6, ingredient_name: '1 can Tuna' },
        { id: 7, ingredient_name: '1 tbsp Mayonnaise' },
        { id: 8, ingredient_name: '1 tbsp Pickle Relish' },
        { id: 9, ingredient_name: '1 tsp Mustard' },
        { id: 10, ingredient_name: '1/4 tsp Garlic Salt' },
      ]);
    });
};
