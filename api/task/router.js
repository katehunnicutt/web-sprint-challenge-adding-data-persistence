// build your `/api/tasks` router here
const router = require("express").Router()
const Tasks = require("./model")

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch(next)
})

router.post("/", (req, res, next) => {
  Tasks.createTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next) 
})


router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'something bad inside task router',
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router