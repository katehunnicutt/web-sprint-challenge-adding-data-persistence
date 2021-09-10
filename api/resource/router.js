// build your `/api/resources` router here
const router = require("express").Router()
const Resources = require("./model")

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resource) => {
      res.status(200).json(resource)
    })
    .catch(next)
})

router.post("/", (req, res, next) => {
  Resources.createResources(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next) 
})


router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'something bad inside resource router',
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router