const Sequelize = require('sequelize')
const db = require('../db')

const Venue = db.define('venue', {
  venueName: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  },
  state: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.TEXT
  }
})

module.exports = Venue
