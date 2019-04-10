import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      // Provider needs to be the outermost wrapper since we're using Context API
      <Provider>
        { /* BrowserRouter needs to wrap around everything */ }
        <Router>
          <React.Fragment>
            <Navbar />
            {/* Everything below the Navbar needs to be within a container */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
