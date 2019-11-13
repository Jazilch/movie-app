import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MovieListContainer from './containers/MovieListContainer';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import MoviePageContainer from './containers/MoviePageContainer';

const StyledApp = styled.div`
  color: #808080;
  background-color: #141414;
  height: 100%;
`;

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Layout>
          <Switch>
            <Route exact path="/movies" component={MovieListContainer} />
            <Route path="/movies/:id" component={MoviePageContainer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </StyledApp>
    </Router>
  );
};

export default App;
