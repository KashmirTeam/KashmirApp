const Sequelize = require('sequelize')
const db = require('../db')

const Artist = db.define('artist', {
  artistName: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  }
})

module.exports = Artist
