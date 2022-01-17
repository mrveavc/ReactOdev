import './App.css';
import React ,{ Component } from 'react';
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

const history = createBrowserHistory({forceRefresh:false});
class App extends Component {
state = {
      data:[]
    }
  handlePageChange = (activePage, repo) => {
    history.push(activePage);
    this.setState({ data: repo })
  }
  renderNavMenu = () => {

    const { home } = routes;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={home.path}>{home.title}</Link>
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
          <Route  path={candidates.path}>
            <CandidatesPage  handlePageChange={this.handlePageChange} />
          </Route>
          <Route  path={aboutUs.path}>
            <AboutUsPage  />
          </Route>
          <Route   path={detailPage.path}>
            <DetailPage parentState={this.state.data}  />
          </Route>

        </Router>

      </div>);
  }
}

export default App;
