import axios from 'axios'

const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS'

const getAllArtists = artists => ({
  type: GET_ALL_ARTISTS,
  artists
})

export const fetchAllArtists = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/artists')
      dispatch(getAllArtists(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const artists = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      return action.artists
    default:
      return state
  }
}

export default artists
