const router = require('express').Router()
const {Artist, Booking, Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    })
    res.json(booking)
  } catch (err) {
    next(err)
  }
})
