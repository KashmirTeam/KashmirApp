import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ExtraInfo from './artist-extra-info'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    marginBottom: 5
  },
  media: {
    height: 140
  }
})

const AdminArtistCard = ({artist}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {artist.artistName}
              </Typography>
              <Typography color="textSecondary" variant="h6" component="h2">
                Events
              </Typography>
              {artist.events.map(event => (
                <Typography
                  color="textPrimary"
                  variant="body1"
                  component="h2"
                  key={event.id}
                >
                  {event.eventName}
                </Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid>
        <ExtraInfo />
      </Grid>
    </Grid>
  )
}

export default AdminArtistCard
