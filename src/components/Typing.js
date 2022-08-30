import React, { useState, useEffect, useRef } from 'react'
import './Typing.scss';


function Typing({ text }) {

    const [currentText, setCurrentText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(index.current < text.length) {
                setCurrentText((value) => value + text.charAt(index.current));
                index.current += 1;
            }
        }, 150);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentText, text]);

    return (
        <>
            <p>{currentText}</p>
            {/* <div className="blink cursor"></div> */}
        </>
    );
    
};

export default Typing;