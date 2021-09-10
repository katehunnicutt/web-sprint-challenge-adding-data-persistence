exports.seed = function(knex, promise) {
  return knex("tasks").insert([
    {
      task_description: "see if mason accepts the pillows for bedding", 
      task_notes: "he is picky",
      task_completed: true,
      project_id: 1
    },
    {
      task_description: "chop the dark chocolate",
      task_notes: "may need more chocolate",
      task_completed: false,
      project_id: 2
    }
  ])
}