import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderPeople from "./components/Header";
import MenuExamplePointing from "./components/Menu";
import People from "./components/People";
import AddPeople from "./components/AddPeople";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderPeople />
        <Router>
          <MenuExamplePointing />
          <Route path="/" exact render={() => <People />} />
          <Route path="/AddPeople" exact render={() => <AddPeople />} />
        </Router>
      </div>
    );
  }
}

export default App;
