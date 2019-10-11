'use strict'

const db = require('../server/db')
const {User, Artist, Venue, Event, Booking} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const artists = await Promise.all([
    Artist.create({
      artistName: 'Mt. Vernon',
      city: 'Chicago',
      bio:
        'Mt. Vernon is an artist from the suburbs of Chicago. He focuses on old music that he does not play anymore because he has moved on to bigger and better things',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Wookie',
      city: 'Chicago',
      bio:
        'Wookie is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Tom Collins',
      city: 'Chicago',
      bio:
        'Tom is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Eric Clapton',
      city: 'Chicago',
      bio:
        'Eric is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Joe Nice',
      city: 'Chicago',
      bio:
        'Joe is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Diplo',
      city: 'Chicago',
      bio:
        'Diplo is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    }),
    Artist.create({
      artistName: 'Kris Gui',
      city: 'Chicago',
      bio:
        'Diplo is the direct result of bigger and better things. He has played several shows with Diplo, Skrillex, Joe Nice, and Bassnectar. Join him as he creates new soundscapes for the world',
      imageUrl: 'https://picsum.photos/seed/picsum/400/350'
    })
  ])

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const venues = await Promise.all([
    Venue.create({
      venueName: 'Schubas',
      city: 'Chicago',
      bio: 'A place for friends',
      state: 'IL',
      address: '123 Southport'
    }),
    Venue.create({
      venueName: 'Flagship',
      city: 'Chicago',
      bio: 'A place to touch tips',
      state: 'IL',
      address: '456 Belmont'
    })
  ])

  const events = await Promise.all([
    Event.create({
      eventName: 'Musik',
      city: 'Lake Forest',
      description: 'Pool party',
      state: 'IL',
      address: '1010 Forest Way',
      date: Date.now()
    }),
    Event.create({
      eventName: 'Art and stuff',
      city: 'Gary',
      description: 'Smell our great city',
      state: 'IN',
      address: '777 Armpit Rd',
      date: Date.now()
    }),
    Event.create({
      eventName: 'Swingers party',
      city: 'Chicago',
      description: 'Dirty work',
      state: 'IN',
      address: 'Secret',
      date: Date.now()
    }),
    Event.create({
      eventName: 'Rave',
      city: 'Hole',
      description: 'Wooks.',
      state: 'CA',
      address: '12345 Nowhere',
      date: Date.now()
    })
  ])

  await Promise.all([
    Booking.create({
      timeSlot: Date.now(),
      payRate: 200,
      gearList: ['Drums', 'Guitar'],
      artistId: 1,
      eventId: 1
    }),
    Booking.create({
      timeSlot: Date.now(),
      payRate: 500,
      gearList: ['Drums', 'Guitar', 'mic'],
      artistId: 1,
      eventId: 2
    }),
    Booking.create({
      timeSlot: Date.now(),
      payRate: 1000,
      gearList: ['Drums', 'Guitar', 'computer'],
      artistId: 2,
      eventId: 1
    }),
    Booking.create({
      timeSlot: Date.now(),
      payRate: 2000,
      gearList: ['Drums', 'Guitar', 'computer'],
      artistId: 2,
      eventId: 2
    })
  ])

  await artists[0].addUser(users[0])
  await artists[1].addUser(users[1])
  await artists[1].addUser(users[0])

  await venues[0].addEvent(events[0])
  await venues[0].addEvent(events[1])
  await venues[1].addEvent(events[2])
  await venues[1].addEvent(events[3])

  await artists[0].addEvent(events[0])
  await artists[2].addEvent(events[0])
  await artists[3].addEvent(events[0])
  await artists[4].addEvent(events[0])
  await artists[5].addEvent(events[0])
  await artists[6].addEvent(events[0])
  await artists[1].addEvent(events[1])
  await artists[1].addEvent(events[0])

  console.log(
    `seeded ${users.length} users, ${artists.length} artists, ${
      venues.length
    } venues, ${events.length} events.`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
