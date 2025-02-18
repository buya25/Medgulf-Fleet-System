// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import JobCards from "./pages/JobCards/JobCards";
import FleetManagement from "./pages/FleetManagement/FleetManagement";
import PartsInventory from "./pages/PartsInventory/PartsInventory";
import SideNav from "./components/SideNav/SideNav";
import "./App.css"; // Add some global styles

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-layout">
          <SideNav />
          <div className="main-content">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/jobcards" component={JobCards} />
              <Route path="/fleet" component={FleetManagement} />
              <Route path="/parts" component={PartsInventory} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
