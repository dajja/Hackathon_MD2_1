import React, { useEffect, useState } from 'react';
import '../css/input.css';

export default function Input(props) {
    const [text, setText] = useState("");
    const [flag, setFlag] = useState(false);
    const [render, setRender] = useState("");
    const handleText = (e) => {
        props.props(e.target.value)
        setText(e.target.value);
    }
    const upperCase = () => {
        setFlag(true);
        setRender(text.toUpperCase());
    }
    const lowerCase = () => {
        setFlag(true);
        setRender(text.toLowerCase());
    }
    return (
        <>
            <div className='input'>
                <div className='input-area'>
                    <textarea name="" id="" cols="100" rows="10" wrap='hard' placeholder='Write some text here' onChange={handleText} ></textarea>
                </div>
                <div className='input-text'>
                    {flag ? render : ''}
                </div>
                <div className='input-btn'>
                    <button onClick={upperCase}>Click to uppercase</button>
                    <button onClick={lowerCase}>Click to lowercase</button>
                </div>
            </div>
        </>
    )
}
