const router = require('express').Router()
const {Artist, Event, Venue} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const venues = await Venue.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      include: [{model: Event, include: Artist}]
    })
    res.json(venues)
  } catch (err) {
    next(err)
  }
})
