exports.seed = function(knex, promise) {
  return knex("resources").insert([
    {resource_name: "pillows", resource_description: "soft cotten and down"},
    {resource_name: "dark chocolate"},
    {resource_name: "oat milk"},
  ])
}