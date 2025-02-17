import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import JobCards from "./pages/JobCards/JobCards";
import FleetManagement from "./pages/FleetManagement/FleetManagement";
import PartsInventory from "./pages/PartsInventory";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the app with the Redux Provider */}
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/jobcards" component={JobCards} />
          <Route path="/fleet" component={FleetManagement} />
          <Route path="/parts" component={PartsInventory} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
