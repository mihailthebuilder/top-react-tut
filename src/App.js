import React, {Component} from "react";
import MyComponent from "./components/component.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    )
  }
}

export default App;