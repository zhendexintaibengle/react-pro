import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routeConfig from './routers/route';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const User = () => <div>User</div>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  RouterList() {
    return routeConfig?.map(items => (
      <Route
        key={items.path}
        path={items.path}
        exact={true}
        render={(props) => {
          return (
            items.render
              ? items.render({ ...props, items })
              : <items.component {...props} route={items} />
          )
        }}
      />
    ))
  }

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/userlist">userlist</Link>

          <Switch>
            {this.RouterList()}
          </Switch>
        </Router>
      </div>
    )
  }
}