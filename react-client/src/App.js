import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Closet, Home, Navigation} from "./components";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home data={data} />} />
          <Route path="/closet" component={Closet} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;