import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      /* TODO: change isAuthenticated state change into a more elaborate cookies method
            so that the user doesn't get logged out when they refresh */
      this.state = {
          isAuthenticated: false,
          location: useLocation()
        };
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );