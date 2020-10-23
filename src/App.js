import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';

function App () {

  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/post/:postId">
        <PostDetail/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
        <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;