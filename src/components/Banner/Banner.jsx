import React, { useState, useEffect } from 'react';

import { 
  Slide,
} from '@material-ui/core';
import useStyles from '../../styles';

export default function Banner({ photos }) {

  const classes = useStyles();
  const [photo, setPhoto] = useState(photos[Math.floor(Math.random() * photos.length)]);

  useEffect(()=> {
    const interval = setInterval(() => {
      setPhoto(photos[Math.floor(Math.random() * photos.length)]);
    },4000);
    return () => clearInterval(interval);
  }, [photos, setPhoto])

  return (
    <>
      {photo && 
        <Slide direction='right' timeout={3000} in={true}>
          <div 
            style={{backgroundImage: 'url(' + photo.urls.full + ')'}}
            className={classes.bannerImg}
          ></div>
        </Slide>
      }
    </>
  )
}
