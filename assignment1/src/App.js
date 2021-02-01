import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import ValidationComponent from "./ValidationComponent/ValidationComponent"
import CharComponent from "./CharComponent/CharComponent"
import './UserInput/UserInput.css'

class App extends Component {

    state = {
        userName1: "Paril Doshi",
        userName1Age: 25,
        showCharacters: false,
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

    inputListener = (event) => {
        this.setState({
            text: event.target.value,
            textLength: event.target.value.length,
            showCharacters: true
        })
    }

    deleteCharHandler = (charIndex) => {
        const characters = this.state.text.split('');
        characters.splice(charIndex,1);
        this.setState({
            text: characters.join('')
        })
    };


  render() {

      let display = null

      if(this.state.showCharacters) {
          display = (
              <div>
                  <ValidationComponent textLength={this.state.textLength} text={this.state.text}/>
                  {this.state.text.split('').map((char, index) => {
                      return <CharComponent
                          click={() => this.deleteCharHandler(index)}
                          index={index}
                          key={index}
                          character={char}
                      />
                  })}
              </div>
          );
      }

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

          Enter the text to validate -
          <input onChange={this.inputListener} value={this.state.text}/>
          {display}
      </div>
    );
  }
}

export default App;
