import React, { useEffect, useState } from 'react'
import '../css/box.css';
export default function Box(props) {
    const { textValue } = props;
    const [letter, setLetter] = useState(0);
    const [word, setWord] = useState(0);
    const [para,setPara] = useState(0);
    useEffect(() => {
        setLetter(textValue.match(/[a-zA-Z]/g)?.length || 0);
        if (textValue != "") {
            setWord(textValue.trim().split(/\s+/).length);
            setPara(textValue.match(/\n/g)?.length || 0)
        } else {
            setWord(0);
        }
    }, [textValue])
    return (
        <>
            <div className='box'>
                <div className='box-small'>
                    <div className='box-sm1'>
                        <i className="fa-regular fa-file-word"></i>
                        <div>Word</div>
                    </div>
                    <div className='box-sm2'>{word}</div>
                </div>
                <div className='box-small'>
                    <div className='box-sm1'>
                        <i className="fa-regular fa-envelope"></i>
                        <div>Letter</div>
                    </div>
                    <div className='box-sm2'>{letter}</div>
                </div>
                <div className='box-small'>
                    <div className='box-sm1'>
                        <i className="fa-solid fa-paragraph"></i>
                        <div>Paragraph</div>
                    </div>
                    <div className='box-sm2'>{para}</div>
                </div>
            </div>
        </>
    )
}
