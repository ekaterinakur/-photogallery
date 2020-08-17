import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { 
  Card, 
  CardHeader,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import useStyles from '../../styles';

export default function UserCard({ user, getUserInfo }) {

  const classes = useStyles();
  const { username } = useParams();

  useEffect(() => {
    getUserInfo(username);
  }, [username, getUserInfo]);

  return (
    <>
      {user &&
        <Card className={classes.userCard}>
          <CardMedia
            className={classes.userCardImage}
            image={user.profile_image.large}
            title={user.name}
          />

          <CardContent className={classes.userCardDetails}>
            <Typography variant='h3' component='h1'>
              { user.name }
            </Typography>
            <Typography variant='body1'>
              <b>Portfolio:</b> <a href='user.portfolio_url'>{ user.portfolio_url }</a>
            </Typography>
            <Typography variant='body1'>
              <b>Instagram:</b> { user.instagram_username }
            </Typography>
            <Typography variant='body1'>
              <b>Total photos:</b> { user.total_photos }
            </Typography>
            <Typography variant='body1'>
              <b>Total followers:</b> { user.followers_count }
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  )
}
