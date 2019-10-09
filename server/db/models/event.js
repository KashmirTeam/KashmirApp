const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  eventName: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  state: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.TEXT
  },
  date: {
    type: Sequelize.DATE
  }
})

module.exports = Event
