import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleArtist} from '../store/single-artist'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Button from '@material-ui/core/Button'

class SingleArtist extends Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10)
    this.props.fetchSingleArtist(id)
  }
  render() {
    const {artist} = this.props
    return (
      <div style={{marginTop: 40}}>
        {artist && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={String(artist.imageUrl)}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {artist.artistName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {artist.bio}
                    </Typography>
                    <Typography variant="h6" component="h6">
                      Members
                    </Typography>
                    {artist.users && artist.users.length ? (
                      artist.users.map(user => (
                        <Typography
                          variant="body2"
                          component="h6"
                          key={user.id}
                          color="textSecondary"
                        >
                          {user.email}
                        </Typography>
                      ))
                    ) : (
                      <div>no members</div>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" component="h5" gutterBottom>
                Upcoming Events
              </Typography>
              {artist.events && artist.events.length ? (
                artist.events.map(event => (
                  <Paper style={{padding: 5, marginBottom: 5}} key={event.id}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Typography variant="h5" component="h3">
                          {event.eventName}{' '}
                          <span style={{fontSize: 14, color: 'gray'}}>
                            {event.date}
                          </span>
                        </Typography>
                        <Typography component="p">
                          {event.address} {event.city} {event.state}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Description: {event.description}
                        </Typography>
                      </Grid>

                      <Grid item xs={7}>
                        <GridList
                          cols={3.5}
                          spaceing={1}
                          style={{
                            flexWrap: 'nowrap',
                            transform: 'translateZ(0)'
                          }}
                        >
                          {event.artists.map(artistPlaying => {
                            if (artistPlaying.id !== artist.id) {
                              return (
                                <GridListTile
                                  key={artistPlaying.id}
                                  style={{height: 120}}
                                >
                                  <img src={artistPlaying.imageUrl} />
                                  <GridListTileBar
                                    title={artistPlaying.artistName}
                                  />
                                </GridListTile>
                              )
                            }
                          })}
                        </GridList>
                      </Grid>
                    </Grid>
                  </Paper>
                ))
              ) : (
                <div>No events have been scheduled</div>
              )}
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}
const mapState = state => ({
  artist: state.singleArtist
})

const mapDispatch = dispatch => ({
  fetchSingleArtist: id => dispatch(fetchSingleArtist(id))
})

export default connect(mapState, mapDispatch)(SingleArtist)
