const router = require('express').Router()
const {User, Artist, Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      include: [{model: User, attributes: ['id', 'email']}, {model: Event}]
    })
    res.json(artists)
  } catch (err) {
    next(err)
  }
})
