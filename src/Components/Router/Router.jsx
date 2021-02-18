import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../../Views/Home";
import Models from "../../Views/Models";
import Solar from "../../Views/Solar";
import Contact from "../../Views/Contact";
import NavBar from "../Nav/NavBar";

// https://reactrouter.com/web/guides/quick-start

const Routes = () => {
    return (
      <Router> 
        <div>
          <NavBar/>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/models">
              <Models />
            </Route>

            <Route path="/solar">
              <Solar />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Routes;
