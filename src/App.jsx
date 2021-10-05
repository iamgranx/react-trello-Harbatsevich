import { Component } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
// import { Button } from "./components/common/Button";
// import { Input } from "./components/common/Input";



export default class App extends Component {
  render () {
    return (
      <div>
        <Header />;
        <Dashboard />;

      </div>
    );
  }
}


