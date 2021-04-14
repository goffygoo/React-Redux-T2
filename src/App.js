import { Component } from 'react';
import { Provider } from "react-redux"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import store from "./store";
import LandingPage from './components/landingPage'
import Albums from './components/albums';
import SinglePhoto from './components/singlePhoto'
import Album from './components/album';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/:id" component={SinglePhoto} />
            <Route exact path="/album/:id" component={Album} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
