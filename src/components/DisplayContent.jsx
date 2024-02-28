import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayContent = () => {
    const {param} = useParams();
    const isWord = isNaN(param);
    return (
        isWord ? 
        <h1>The word is: {param}</h1>:
        <h1>The number is: {param}</h1>
    )
}
export default DisplayContent