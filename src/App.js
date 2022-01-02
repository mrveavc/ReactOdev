/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';
import { HomePage } from "./components/HomePage";
import { createBrowserHistory } from 'history';
import {
  Route,
  Router,
  Link,
} from "react-router-dom";

import { routes } from './routes'
import CandidatesPage from './components/CandidatesPage';
import AboutUsPage from './components/AboutUsPage';
import DetailPage from './components/DetailPage';

const history = createBrowserHistory();

class App extends React.Component {

  handlePageChange = (activePage, repo) => {
    history.push(activePage);
    // this.data(repo);
  }
  //   data = (repo) => {
  //  console.log(repo.name)    
  //   }
  renderNavMenu = () => {

    const { home } = routes;

    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <Link class="navbar-brand" to={home.path}>{home.title}</Link>


        </nav>

        <hr />
      </>


    )
  }

  render() {

    const { home, candidates, aboutUs, detailPage } = routes;
    return (
      <div className="App">


        <Router history={history} >
          {this.renderNavMenu()}
          <Route exact path={home.path}>
            <HomePage handlePageChange={this.handlePageChange} />
          </Route>
          <Route exact path={candidates.path}>
            <CandidatesPage data={this.repo} handlePageChange={this.handlePageChange} />
          </Route>
          <Route exact path={aboutUs.path}>
            <AboutUsPage handlePageChange={this.handlePageChange} />
          </Route>
          <Route exact path={detailPage.path}>
            <DetailPage handlePageChange={this.handlePageChange} />
          </Route>

        </Router>

      </div>);
  }
}

export default App;
