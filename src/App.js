import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MovieListContainer from './containers/MovieListContainer';
import MovieItem from './components/MovieItem';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MovieListContainer} />
          <Route path="/:id" component={MovieItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
