import React from 'react'

const userOutput = (props) => {
    const style = {
        backgroundColor: 'gray',
        font: 'inherit',
        border: '2px solid red',
        padding: '5px'
    }
    return(
        <div>
            <p style={style}>My user name is {props.userName}</p>
            <p>My age is {props.age}</p>
        </div>
    );
}

export default userOutput;