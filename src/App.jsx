import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import Input from './components/Input';
export default function App() {
  const [text,setText] = useState("");
  const handleInput=(value) => {
    setText(value);
  }
  return (
    <>
      <div className='app'>
        <div className='app-container'>
          <div className='app-con-1'>
            <i className="fa-solid fa-braille"></i>
            <div>Word counter</div>
          </div>
          <div className='app-con-2'>
            <Box textValue={text}/>
          </div>
          <div className='app-con-3'>
            <Input props={handleInput}/>
          </div>
        </div>
      </div>
    </>
  )
}
