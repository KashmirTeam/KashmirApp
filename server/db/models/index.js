const User = require('./user')
const Artist = require('./artist')
const Venue = require('./venue')
const Event = require('./event')
const Booking = require('./booking')

Artist.belongsToMany(User, {through: 'artist_member'})
User.belongsToMany(Artist, {through: 'artist_member'})

Venue.hasMany(Event)

Artist.belongsToMany(Event, {through: Booking})
Event.belongsToMany(Artist, {through: Booking})

module.exports = {
  User,
  Artist,
  Venue,
  Event,
  Booking
}
