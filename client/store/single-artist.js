import axios from 'axios'

const SET_SINGLE_ARTIST = 'SET_SINGLE_ARTIST'

const setSingleArtist = artist => ({
  type: SET_SINGLE_ARTIST,
  artist
})

export const fetchSingleArtist = id => {
  return async dispatch => {
    try {
      const artist = await axios.get(`/api/artists/${id}`)
      dispatch(setSingleArtist(artist.data))
    } catch (error) {
      console.error(error)
    }
  }
}

const singleArtist = (state = {}, action) => {
  switch (action.type) {
    case SET_SINGLE_ARTIST:
      return action.artist
    default:
      return state
  }
}

export default singleArtist
