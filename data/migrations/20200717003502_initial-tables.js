exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl.text('recipe_name', 63).notNullable();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments();
      tbl.text('ingredient_name', 63).notNullable();
    })
    .createTable('recipe_ingredients', (tbl) => {
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('quantity').unsigned().notNullable();
    })
    .createTable('recipe_instructions', (tbl) => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('instruction', 128).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
