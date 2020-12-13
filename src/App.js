import React, {Component} from "react";
import MyComponent from "./components/MyComponent.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    alert("Button has been clicked!");
  }

  render() {
    
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
      </div>
    )
  }
}

export default App;