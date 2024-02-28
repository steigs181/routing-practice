import React from 'react';
import { useParams } from 'react-router-dom';

const Multiple = (props) => {
    const {word} = useParams();
    const {textColor} = useParams();
    const {bgColor} = useParams();
    const isWord = isNaN(word)
    return (
        isWord ? 
            <div style={{backgroundColor: bgColor}} >
                <h1 style={{color: textColor}}>The word is: {word}</h1>
            </div>
            :
            <h1>Please enter a word and not a number</h1>
    )
}

export default Multiple