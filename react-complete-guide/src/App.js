import React, { useState }  from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person'


const app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'Paril', age: 25},
            {name: 'Sonu', age: 25},
            {name: 'Prashanth', age: 28}
        ],
        otherState: 'Some random unchanged states'
    })

    const [otherState, setOtherState ] = useState("some other state")

    const switchNameHandler = (newName) => {
        // console.log('Was Clicked');
        //Don't do this: this.state.persons[0] = 'Paril Doshi'
        setPersonsState({
            persons: [
                {name: 'Paril Doshi', age: 25},
                {name: newName  , age: 25},
                {name: 'Prashanth', age: 28}
            ],
            // otherState: personsState.otherState
        })
    }

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Paril Doshi', age: 25},
                {name: 'Sonu', age: 25},
                {name: event.target.value, age: 28}
            ]
        })
    }

    console.log(personsState, otherState);

    const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
          <div className="App">
              <h1> Hi, I'm a React App</h1>
              <p>This is really working</p>
              <button
                  style={style}
                  onClick={switchNameHandler.bind(this, 'Sonu Doshi')}>Switch Name</button>
              <Person
                  name={personsState.persons[0].name}
                  age={personsState.persons[0].age}/>
              <Person
                  name={personsState.persons[1].name}
                  age={personsState.persons[1].age}
                  click={() => switchNameHandler('SonuDoshi!')}>My Hobbies: Racing
              </Person>
              <Person
                  name={personsState.persons[2].name}
                  age={personsState.persons[2].age}
                  click={switchNameHandler.bind(this, 'Sonu')}
                  changed={nameChangedHandler}
              />

          </div>
        );
        // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

export default app;



