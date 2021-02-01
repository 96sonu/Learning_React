import React from 'react'

const validationComponent = (props) => {
    let textMessage = "Text too short"
    if (props.textLength > 5) {
        textMessage = "Text Long enough"
    }
    return(
        <p>Text Length from validation component - {textMessage} - {props.text}</p>
    );
}

export default validationComponent