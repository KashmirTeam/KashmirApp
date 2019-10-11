import axios from 'axios'

const GET_SINGLE_USER = 'GET_SINGLE_USER'

const getSingleUser = user => ({
  type: GET_SINGLE_USER,
  user
})

export const fetchSingleUser = id => {
  return async dispatch => {
    try {
      const user = await axios.get(`/api/users/${id}`)
      dispatch(getSingleUser(user.data))
    } catch (error) {
      console.error(error)
    }
  }
}

const singleUser = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user
    default:
      return state
  }
}

export default singleUser
