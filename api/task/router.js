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

})

router.use("*", (req, res) => {
  res.json({api: "task be up"})
})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'something bad inside task router',
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router