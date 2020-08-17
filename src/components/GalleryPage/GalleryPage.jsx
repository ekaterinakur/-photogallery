import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Banner from '../Banner/Banner';
import GalleryList from '../GalleryList/GalleryList';

import { 
  CircularProgress, 
} from '@material-ui/core';

export default function GalleryPage({ photos, currentPage, getPhotoList, isLoading }) {

  const { category } = useParams();

  useEffect(() => {
    getPhotoList(category);
  }, [category]);

  return <>
      {
        isLoading
          ? <CircularProgress />
          : photos.length === 0
          ? <b>No photos.</b>
          : <>
              <Banner photos={photos} />

              <GalleryList 
                photos={photos} 
                currentPage={currentPage} 
                getPhotoList={getPhotoList}
                category={category}
              />
            </>
      }
  </>
}

