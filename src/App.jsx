import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
  useLocation 
} from 'react-router-dom';

import useStyles from './styles';

import MainLayout from './layouts/MainLayout';
import GalleryPageHandler from './components/GalleryPage/GalleryPageHandler';
import UserCardHandler from './components/UserCard/UserCardHandler';
import PhotoCardHandler from './components/PhotoCard/PhotoCardHandler';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const App = () => {

  const classes = useStyles();

  return (
      <Router>
        <MainLayout>
          <Switch>
            <Redirect exact from="/" to="/photos/all" />
            <Route path="/photos/:category">
              <GalleryPageHandler />
            </Route>
            <Route path="/photo/:photoId" >
              <PhotoCardHandler />
            </Route>
            <Route path="/user/:username" >
              <UserCardHandler />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
  )
};

export default App;
