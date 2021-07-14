import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact component={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;