import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
  useLocation 
} from 'react-router-dom';

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

  return (
      <Router>
      {/* <MainLayout> */}
          <Switch>
            <Redirect exact from="/" to="/photos/all" />
            <Route path="/photos/:category" >
              <MainLayout>
                <GalleryPageHandler />
              </MainLayout>
            </Route>
            <Route path="/photo/:photoId" >
              <MainLayout>
                <PhotoCardHandler />
              </MainLayout>
            </Route>
            <Route path="/user/:username" >
              <MainLayout>
                <UserCardHandler />
              </MainLayout>
            </Route>
            <Route path="*">
              <MainLayout>
                <NoMatch />
              </MainLayout>
            </Route>
          </Switch>
        {/* </MainLayout> */}
      </Router>
  )
};

export default App;
