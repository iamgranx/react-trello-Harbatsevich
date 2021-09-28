import { Component } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";



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


