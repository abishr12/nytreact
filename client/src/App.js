import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import SavedArticles from "./pages/Saved-Articles";
import Nav from "./components/Nav";
import Results from "./pages/Results";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => (
  <Router>
    <div>
      <PortfolioContainer />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved-articles" component={SavedArticles} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  </Router>
);

export default App;
