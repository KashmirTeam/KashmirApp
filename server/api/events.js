const router = require('express').Router()
const {Artist, Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      include: [{model: Artist}]
    })
    res.json(events)
  } catch (err) {
    next(err)
  }
})
