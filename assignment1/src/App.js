import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import './UserInput/UserInput.css'

class App extends Component {

    state = {
        userName1: "Paril Doshi",
        userName1Age: 25,
        userNames: [
            {userName: 'Sonu Doshi', age: 25}
        ]
    }

    changeUserName1 = (event) => {
        this.setState({
            userName1: event.target.value
        })
    }

    changeUserName2 = (event) => {
        this.setState({
            userNames: [
                {userName: event.target.value, age: 25}
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <div className="User">
              <UserInput changed={this.changeUserName1} userName={this.state.userName1}/>
              <UserOutput userName={this.state.userName1} age={this.state.userName1Age}>

              </UserOutput>
          </div>

          <div className="User">
              <UserInput changed={this.changeUserName2} userName={this.state.userNames[0].userName}/>
              <UserOutput userName={this.state.userNames[0].userName} age={this.state.userNames[0].age}>

              </UserOutput>
          </div>
      </div>
    );
  }
}

export default App;
