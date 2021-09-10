exports.seed = function(knex, promise) {
  return knex("projects").insert([
    { project_name: "make a dogbed", 
      project_description: "mason needs a cozy place",
      project_completed: true,
    },
    { project_name: "make a cake",
      project_description: "Ethan is vegan and likes chocolate",
      project_completed: true,
    },
  ])
}