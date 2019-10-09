const Sequelize = require('sequelize')
const db = require('../db')

const Booking = db.define('booking', {
  timeSlot: {
    type: Sequelize.DATE
  },
  payRate: {
    type: Sequelize.STRING
  },
  gearList: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Booking
