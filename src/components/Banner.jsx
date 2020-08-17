import React, { useState, useEffect } from 'react';

import { 
  Slide,
} from '@material-ui/core';
import useStyles from './../styles/';

export default function Banner({ photos }) {
  
  const classes = useStyles();
  const [photo, setPhoto] = useState(photos[Math.random() * photos.length]);

  useEffect(()=> {
    const interval = setInterval(() => {
      setPhoto(photos[Math.random() * photos.length]);
    }, 1000);
    return () => clearInterval(interval);
  }, [photos, setPhoto])

  return (
    <>
      {photo && 
        <Slide direction='right' mountOnEnter unmountOnExit>
          <picture>
            <source srcset={photo.urls.full} media='(min-width: 960px)' />
            <source srcset={photo.urls.regular} media='(min-width: 600px)' />
            <img src={photo.urls.small} alt={photo.description} />
          </picture>
        </Slide>
      }
    </>
  )
}
