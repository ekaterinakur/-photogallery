import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from '../../styles/';

export default function FilesSearch({ getPhotoList }) {

  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const [debouncedSearch] = useDebounce(searchString, 300);

  useEffect(() => {
    if (searchString && searchString > 4) {
      getPhotoList(debouncedSearch);
    }
  }, [getPhotoList, debouncedSearch]);

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
