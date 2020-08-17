import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { 
  Card, 
  CardContent,
  Avatar,
  CardMedia,
  Button
} from '@material-ui/core';
import useStyles from '../../styles';

export default function PhotoCard({ photo, getPhotoInfo }) {
  
  const history = useHistory();
  const { photoId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    getPhotoInfo(photoId);
  }, [photoId, getPhotoInfo]);

  return (
    <>
      {photo &&
        <Card className={classes.card}>
          <CardContent className={classes.photoCardContent} > 
            <Link 
                to={'/user/' + photo.user.username}
                className={classes.photoCardLink}
              >
              <Avatar aria-label={photo.user.username}
                      src={photo.user.profile_image.small}
                      className={classes.photoCardAvatar}
              />
              <strong>{ photo.user.name }</strong>
            </Link>

            <Button onClick={() => history.goBack()}>
                Go back
            </Button>
          </CardContent>
          <CardMedia
            image={photo.urls.full}
            title={photo.description}
            className={classes.photoCardMedia}
          />
        </Card>
      }
    </>
  )
}
