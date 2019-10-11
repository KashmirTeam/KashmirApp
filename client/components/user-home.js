import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store/single-user'
import AdminArtistCard from './artistComponents/admin-artist-card'
/**
 * COMPONENT
 */

class UserHome extends Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.id)
  }
  render() {
    const {email, singleUser} = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <div>
          <h4>Your Artists</h4>
        </div>
        {singleUser.artists && singleUser.artists.length ? (
          singleUser.artists.map(artist => (
            <AdminArtistCard artist={artist} key={artist.id} />
          ))
        ) : (
          <div>You have not joined any artists yet!</div>
        )}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    singleUser: state.singleUser
  }
}

const mapDispatch = dispatch => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id))
})
export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
