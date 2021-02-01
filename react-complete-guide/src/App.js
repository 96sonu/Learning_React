import React, { Component }  from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person'


class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Paril', age: 25},
            {id: '2', name: 'Sonu', age: 25},
            {id: '3', name: 'Prashanth', age: 28}
        ],
        otherState: 'Some random unchanged states',
        showPersons: false
    }

    // switchNameHandler = (newName) => {
    //     // console.log('Was Clicked');
    //     //Don't do this: this.state.persons[0] = 'Paril Doshi'
    //     this.setState({
    //         persons: [
    //             {name: 'Paril Doshi', age: 25},
    //             {name: newName  , age: 25},
    //             {name: 'Prashanth', age: 28}
    //         ],
    //         // otherState: personsState.otherState
    //     });
    // }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        person[personIndex] = person;

        this.setState({persons:persons});


        this.setState({
            persons: [
                {name: 'Paril Doshi', age: 25},
                {name: 'Sonu', age: 25},
                {name: event.target.value, age: 28}
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}>*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*    click={() => this.switchNameHandler('SonuDoshi!')}>My Hobbies: Racing*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[2].name}*/}
                    {/*    age={this.state.persons[2].age}*/}
                    {/*    click={this.switchNameHandler.bind(this, 'Sonu')}*/}
                    {/*    changed={this.nameChangedHandler}>*/}
                    {/*</Person>*/}
                </div>
            );
        }

        return (
          <div className="App">
              <h1> Hi, I'm a React App</h1>
              <p>This is really working</p>
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}>Toggle Persons
              </button>
              {/*{this.state.showPersons ? */}
              {persons}
              {/*: null }*/}
          </div>
        );
    }
}

// const App = props => {
//     const [ personsState, setPersonsState ] = useState({
//         persons: [
//             {name: 'Paril', age: 25},
//             {name: 'Sonu', age: 25},
//             {name: 'Prashanth', age: 28}
//         ],
//         otherState: 'Some random unchanged states'
//     })
//
//     const [otherState, setOtherState ] = useState("some other state")
//
//     const switchNameHandler = (newName) => {
//         // console.log('Was Clicked');
//         //Don't do this: this.state.persons[0] = 'Paril Doshi'
//         setPersonsState({
//             persons: [
//                 {name: 'Paril Doshi', age: 25},
//                 {name: newName  , age: 25},
//                 {name: 'Prashanth', age: 28}
//             ],
//             // otherState: personsState.otherState
//         })
//     }
//
//     const nameChangedHandler = (event) => {
//         setPersonsState({
//             persons: [
//                 {name: 'Paril Doshi', age: 25},
//                 {name: 'Sonu', age: 25},
//                 {name: event.target.value, age: 28}
//             ]
//         })
//     }
//
//     console.log(personsState, otherState);
//
//     const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1px solid blue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//         return (
//           <div className="App">
//               <h1> Hi, I'm a React App</h1>
//               <p>This is really working</p>
//               <button
//                   style={style}
//                   onClick={switchNameHandler.bind(this, 'Sonu Doshi')}>Switch Name</button>
//               <div>
//                   <Person
//                       name={personsState.persons[0].name}
//                       age={personsState.persons[0].age}/>
//                   <Person
//                       name={personsState.persons[1].name}
//                       age={personsState.persons[1].age}
//                       click={() => switchNameHandler('SonuDoshi!')}>My Hobbies: Racing
//                   </Person>
//                   <Person
//                       name={personsState.persons[2].name}
//                       age={personsState.persons[2].age}
//                       click={switchNameHandler.bind(this, 'Sonu')}
//                       changed={nameChangedHandler}
//                   />
//               </div>
//           </div>
//         );
// }

export default App;



