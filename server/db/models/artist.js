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
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Artist
