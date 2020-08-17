import React from 'react';
import { Link } from 'react-router-dom';

import { 
  GridList,
  GridListTile,
  Button
 } from '@material-ui/core';
import useStyles from '../../styles';

export default function GalleryList({ photos, currentPage, category, getPhotoList }) {

  const classes = useStyles();
  
  return (
    <>
      <GridList cellHeight={160} cols={2} className={classes.list} >
        {photos.map((photo) => (
          <GridListTile key={photo.id}>
            <Link to={'/photo/' + photo.id} className={classes.listLink} >
              <img src={photo.urls.regular} alt={photo.description} />
            </Link>
          </GridListTile>
        ))}
      </GridList>

      <Button onClick={() => getPhotoList(category, null, currentPage + 1)}
              variant="contained" color="default" >
        Load more
      </Button>
    </>
  );
}

