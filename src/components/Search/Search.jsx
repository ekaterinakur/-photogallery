import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from '../../styles/';

export default function FilesSearch({ getPhotoList }) {

  const classes = useStyles();
  const { category } = useParams();
  const [searchString, setSearchString] = useState('');
  const [debouncedSearch] = useDebounce(searchString, 500);

  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 4) {
      getPhotoList(category, debouncedSearch);
    }
  }, [debouncedSearch, category, getPhotoList]);

  return (
    <TextField
      value={searchString}
      onChange={({ target: { value } }) => setSearchString(value)}
      variant='standard'
      className={classes.input}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
