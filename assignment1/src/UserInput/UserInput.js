import React from 'react'

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} value={props.userName} style={style} />
        </div>
    );
}

export default userInput;