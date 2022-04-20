import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const User = () => <div>User</div>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/user">User</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user" component={User} />
          </Switch>
        </Router>
      </div>
    )
  }
}