import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllArtists} from '../store/artists'
import ArtistCard from './artistComponents/artist-card'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

class AllArtists extends Component {
  componentDidMount() {
    this.props.fetchAllArtists()
  }
  render() {
    const {artists} = this.props
    return (
      <>
        <div style={{marginTop: 40, justifyContent: 'flex-start'}}>
          <h3>Discover artists</h3>
        </div>
        <GridList
          cols={3.5}
          spaceing={1}
          style={{flexWrap: 'nowrap', transform: 'translateZ(0)'}}
        >
          {artists.map(artist => (
            <GridListTile key={artist.id}>
              <img src={artist.imageUrl} />
              <GridListTileBar
                title={artist.artistName}
                actionIcon={
                  <Button
                    component={Link}
                    to={`/artists/${artist.id}`}
                    style={{color: 'lightBlue'}}
                  >
                    Go
                  </Button>
                }
              />
              />
            </GridListTile>
          ))}
        </GridList>
      </>
    )
  }
}

const mapState = state => ({
  artists: state.artists
})

const mapDispatch = dispatch => ({
  fetchAllArtists: () => dispatch(fetchAllArtists())
})

export default connect(mapState, mapDispatch)(AllArtists)
